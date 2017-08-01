<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\Orderable;

class Meeting extends Model
{
    //
    use Orderable;
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
