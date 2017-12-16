<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEntityRecordTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('entity_records', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->nullable();
            $table->integer('entity_id')->unsigned();
            $table->integer('record_id')->unsigned();

            $table->foreign('entity_id')->references('id')->on('entities');
            $table->foreign('record_id')->references('id')->on('records');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('entity_records');
    }
}
