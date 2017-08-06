<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use App\Traits\Orderable;

class User extends Authenticatable
{
    use Notifiable,HasApiTokens,Orderable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','role','fcm_token',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function meetings(){
        return $this->belongsToMany('App\Meeting')->withPivot('status','priority');
    }
    
    public function notifications(){
        return $this->belongsToMany('App\Notification')->withPivot('status');
    }
}
