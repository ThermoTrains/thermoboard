<?php

use Faker\Generator as Faker;

$factory->define(\App\Record::class, function (Faker $faker) {
    return [
        'timestamp' => $faker->dateTimeBetween('-1 years', 'now'),
    ];
});
