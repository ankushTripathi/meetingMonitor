<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreMeetingRequest;
use Illuminate\Support\Facades\Auth;
use App\Meeting;
use App\User;

class MeetingController extends Controller
{
    //
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

    }

    public function storeByAdmin($request){

    }

    public function addMember($request,$member){

    }

}
