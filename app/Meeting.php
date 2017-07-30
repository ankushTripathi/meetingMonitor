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
    ];

    public function users(){
        return $this->belongsToMany('App\User');
    }
}
