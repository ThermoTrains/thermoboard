<?php

use Faker\Generator as Faker;

$factory->define(\App\EntityRecord::class, function (Faker $faker) {
    return [
        'name' => $faker->numerify('#. Wagen'),
    ];
});
