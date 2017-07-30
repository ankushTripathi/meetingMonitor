<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMeetingUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('meeting_users', function (Blueprint $table) {
            $table->integer('meeting_id')->unsigned()->index();
            $table->integer('user_id')->unsigned()->index();
            $table->string('status');
            $table->primary(['meeting_id','user_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('meeting_users');
    }
}
