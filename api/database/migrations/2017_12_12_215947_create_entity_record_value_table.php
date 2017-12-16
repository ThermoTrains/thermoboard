<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEntityRecordValueTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('entity_record_value', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('entity_record_id')->unsigned();
            $table->integer('value_id')->unsigned();

            $table->foreign('entity_record_id')->references('id')->on('entity_records');
            $table->foreign('value_id')->references('id')->on('values');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('entity_record_values');
    }
}
