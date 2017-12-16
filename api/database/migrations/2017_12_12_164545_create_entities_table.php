<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEntitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('entities', function (Blueprint $table) {
            $table->increments('id');
            $table->enum('category', ['LOCOMOTIVE', 'TRAIN_CARRIAGE']);
            $table->integer('entity_kind_id')->unsigned();
            $table->string('serial_number');
            $table->dateTime('exists_since');
            $table->timestamps();

            $table->foreign('entity_kind_id')->references('id')->on('entity_kinds');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('entities');
    }
}
