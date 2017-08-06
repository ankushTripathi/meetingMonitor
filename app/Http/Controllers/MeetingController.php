<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests\StoreMeetingRequest;
use App\Http\Requests\StoreMeetingAdminRequest;
use Illuminate\Support\Facades\Auth;
use App\Meeting;
use App\User;

class MeetingController extends Controller
{
    //store meeting functions
    public function store(StoreMeetingRequest $request){

        $meeting = new Meeting;
        $meeting->title = $request->title;
        $meeting->description = $request->description;
        $meeting->session = $request->session;
        $meeting->date = $request->date;
        $meeting->created_by = Auth::user()->id;
        

        $meeting->save();

        $meeting = Meeting::where('title',$request->title)->first();
        $admin = User::where('role','admin')->first();
        $user = Auth::user();

        $meeting->users()->attach([
            $admin->id => ['meeting_id'=>$meeting->id,'status' => 'pending','priority'=>'low'],
            $user->id => ['meeting_id'=>$meeting->id,'status'=> 'pending', 'priority' => 'low']
        ]);

        foreach($request->members as $member){
            $meeting->users()->attach([
                $member['id'] => ['meeting_id'=>$meeting->id,'status' => 'pending','priority'=>'low'],
            ]);
        }

    }

    public function storeByAdmin(StoreMeetingAdminRequest $request){
        $meeting = new Meeting;
        $meeting->title = $request->title;
        $meeting->description = $request->description;
        $meeting->date = $request->date;
        $meeitng->time = $request->time;
        $meeting->created_by = Auth::user()->id;

        $meeting->save();

        $meeting = Meeting::where('title',$request->title)->first();
        $admin = User::where('role','admin')->first();

        $meeting->users()->attach([
            $admin->id => ['meeting_id'=>$meeting->id,'status' => 'pending','priority'=>'low'],
        ]);
        foreach($request->members as $member){
            $meeting->users()->attach($member['id'],['meeting_id'=>$meeting->id,'status' => 'pending','priority'=>'low']);
        }
    }


//display functions
    public function getAll(){
        $meetings = Auth::user()->meetings()->orderBy('created_at','desc')->get();
        return $meetings;
    }

    public function getById($meeting_id){
        $meeting = Meeting::findOrFail($meeting_id);
        $members = $meeting->users;
        return response($meeting);
    }

    public function getPriority(){
        $meetings = Auth::user()->meetings()->where('priority','high')->get();
        return $meetings;
    }

    //update controllers
    public function setPriority($meeting_id){
        $meeting = Auth::user()->meetings()->where('meeting_id',$meeting_id)->firstOrFail();
        $meeting->pivot->priority = 'high';
        $meeting->pivot->save();
    }

    public function accept($meeting_id){
        if(Auth::user()->role === 'admin'){
            return redirect()->route('acceptByAdmin');
        }
        $meeting = Auth::user()->meetings()->where('meeting_id',$meeting_id)->firstOrFail();
        $meeting->pivot->status = 'accepted';
        $meeting->pivot->save();
    }
    public function adminAccept(ScheduleMeetingRequest $request,$meeting_id){
        $meeting = Auth::user()->meetings()->where('meeting_id',$meeting_id)->firstOrFail();
        $meeting->pivot->status = 'accepted';
        $meeting->pivot->save();
        $meeting->time = $request->time;
        $meeting->save();
    }
    public function reject($meeting_id){
        $meeting = Auth::user()->meetings()->where('meeting_id',$meeting_id)->firstOrFail();
        $meeting->pivot->status =  'rejected';
        $meeting->pivot->save();
    }
    public function unsetPriority($meeting_id){
        $meeting = Auth::user()->meetings()->where('meeting_id',$meeting_id)->firstOrFail();
        $meeting->pivot->priority = 'low'; 
        $meeting->pivot->save();
    }
}
