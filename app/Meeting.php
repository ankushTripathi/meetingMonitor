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
        'date',
        'session',
        'created_by',
        'time',
        'duration',
    ];

    public function users(){
        return $this->belongsToMany('App\User')->withPivot('status','priority');
    }
}
