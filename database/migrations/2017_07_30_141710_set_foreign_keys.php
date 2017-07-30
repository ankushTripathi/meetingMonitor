<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SetForeignKeys extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('meeting_users', function(Blueprint $table){
            $table->foreign('user_id')->references('id')
                ->on('users')->onDelete('cascade');
            $table->foreign('meeting_id')->references('id')
                ->on('meetings')->onDelete('cascade');
        });

        Schema::table('notification_users', function(Blueprint $table){
            $table->foreign('user_id')->references('id')
                ->on('users')->onDelete('cascade');
            $table->foreign('notification_id')->references('id')
                ->on('notifications')->onDelete('cascade');
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
        Schema::table('meeting_users', function(Blueprint $table){
            $table->dropForeign('meeting_users_user_id_foreign');
            $table->dropForeign('meeting_users_meeting_id_foreign');
        });

        Schema::table('notification_users', function(Blueprint $table){
            $table->dropForeign('notification_users_user_id_foreign');
            $table->dropForeign('notification_users_notification_id_foreign');
        });
    }
}
