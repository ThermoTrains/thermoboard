<?php

use Faker\Generator as Faker;

$factory->define(\App\Controller::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->lexify('?????'),
    ];
});
