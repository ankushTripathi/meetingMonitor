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
        $meeting->created_by = Auth::user()->id;
        $meeting->request_status = 'pending';

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
        $meeting->date_time = $request->date_time;
        $meeting->created_by = Auth::user()->id;
        $meeting->request_status = 'pending';

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
        $meetings = Meeting::all()->latestFirst();
        return $meetings;
    }

    public function getById($meeting_id){
        $meeting = Meeting::find($meeting_id);
        $members = $meeting->users;
        return response()->json(['meeting' => $meeting, 'members' => $members]);
    }

    public function getPriority($request){

    }

}
