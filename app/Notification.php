<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\Orderable;

class Notification extends Model
{
    //
    use Orderable;
    
    protected $fillable = [
        'title',
        'body',
        'type',
    ];

    public function users(){
        $this->belongsToMany('App\User');
    }
}
