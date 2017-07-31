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
        Schema::table('meetings', function(Blueprint $table){
            $table->foreign('created_by')->references('id')->on('users')->onDelete('cascade');
        });
        
        Schema::table('meeting_user', function(Blueprint $table){
            $table->foreign('user_id')->references('id')
                ->on('users')->onDelete('cascade');
            $table->foreign('meeting_id')->references('id')
                ->on('meetings')->onDelete('cascade');
        });

        Schema::table('notification_user', function(Blueprint $table){
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
        Schema::table('meeting_user', function(Blueprint $table){
            $table->dropForeign('meeting_user_user_id_foreign');
            $table->dropForeign('meeting_user_meeting_id_foreign');
        });

        Schema::table('notification_user', function(Blueprint $table){
            $table->dropForeign('notification_user_user_id_foreign');
            $table->dropForeign('notification_user_notification_id_foreign');
        });

        Schema::table('meetings', function(Blueprint $table){
            $table->dropForeign('meetings_created_by_foreign');
        });
    }
}
