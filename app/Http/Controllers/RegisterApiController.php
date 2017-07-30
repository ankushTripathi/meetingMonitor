<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Http\Requests\StoreUserRequest;
use Illuminate\Support\Facades\Auth;

class RegisterApiController extends Controller
{
    //
    public function register(StoreUserRequest $request){
        
        if(Auth::user()->role === 'admin'){
        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->role = $request->role;

        $user->save();
        }else{
            abort(403,'unauthorized action');
        }

    }
}
