<?php

use Faker\Generator as Faker;

$factory->define(\App\Place::class, function (Faker $faker) {
    return [
        'name' => $faker->city,
        'latitude' => $faker->latitude,
        'longitude' => $faker->longitude,
    ];
});
