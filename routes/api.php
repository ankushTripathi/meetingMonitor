<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register','RegisterApiController@register')->middleware('auth:api');

Route::group(['prefix' => 'meetings','middleware'=>'auth:api'],function(){
    Route::post('/','MeetingController@store');
    Route::post('/admin','MeetingController@storeByAdmin');
    Route::get('/','MeetingController@getAll');
    Route::get('/priority','MeetingController@getPriority');
    Route::put('/priority/{meeting_id}','MeetingController@setPriority');
    Route::delete('/priority/{meeting_id}','MeetingController@unsetPriority');
    Route::get('/{meeting_id}','MeetingController@getById');
    Route::put('/accept/{meeting_id}','MeetingController@accept');
    Route::put('/reject/{meeting_id}','MeetingController@reject');
    Route::put('/admin/accept/{meeting_id}','MeetingController@adminAccept');
});

Route::get('/users/{name}','UserController@getByName')->middleware('auth:api');