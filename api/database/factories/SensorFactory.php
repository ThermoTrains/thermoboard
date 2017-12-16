<?php

use Faker\Generator as Faker;
use Illuminate\Support\Facades\DB;

$factory->define(\App\Sensor::class, function (Faker $faker) {
    static $controllerIds;

    $controllerIds = $controllerIds ?: DB::table('controllers')->select('id')->get()->toArray();

    return [
        'name' => $faker->lexify('?????'),
        'controller_id' => $faker->randomElement($controllerIds)->id,
        'produces' => $faker->randomElement(['STRING', 'NUMBER', 'TEMPERATURE', 'IMAGE']),
    ];
});
