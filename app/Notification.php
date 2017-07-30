<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    //
    protected $fillable = [
        'title',
        'body',
        'type',
    ];

    public function users(){
        $this->belongsToMany('App\User');
    }
}
