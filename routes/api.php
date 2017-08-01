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

Route::group(['prefix' => 'meetings'],function(){
    Route::post('/','MeetingController@store')->middleware('auth:api');
    Route::post('/admin','MeetingController@storeByAdmin')->middleware('auth:api');
    Route::post('/members/{member}','MeetingController@addMember')->middleware('auth:api');
});