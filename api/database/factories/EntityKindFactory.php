<?php

use Faker\Generator as Faker;

$factory->define(\App\EntityKind::class, function (Faker $faker) {
    return [
        'name' => strtoupper($faker->lexify('?????')),
        'manufacturer' => $faker->company
    ];
});
