<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    //
    public function getByName($name){
        $users = User::where('name','like',$name.'%')->get();
        return $users;
    }
}
