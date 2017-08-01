<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Meeting extends Model
{
    //
    protected $fillable = [
        'title',
        'description',
        'date_time',
        'session',
        'created_by',
        'request_status',
    ];

    public function users(){
        return $this->belongsToMany('App\User');
    }
}
