<?php

use Faker\Generator as Faker;
use Illuminate\Support\Facades\DB;

$factory->define(\App\Value::class, function (Faker $faker) {
    static $sensors;

    $sensors = $sensors ?: DB::table('sensors')->get()->toArray();
    $sensor = $faker->randomElement($sensors);

    return [
        'sensor_id' => $sensor->id,
        'string' => $sensor->produces === 'STRING' ? $faker->lexify('?????') : null,
        'temperature' => $sensor->produces === 'TEMPERATURE' ? $faker->numberBetween(250, 310) : null,
        'number' => $sensor->produces === 'NUMBER' ? $faker->numberBetween(-100, 100) : null,
        'image' => $sensor->produces === 'IMAGE' ? 'https://thermoboard.sebastianhaeni.ch/placeholder.jpg' : null,
    ];
});
