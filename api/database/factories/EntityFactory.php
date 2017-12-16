<?php

use Faker\Generator as Faker;
use Illuminate\Support\Facades\DB;

$factory->define(\App\Entity::class, function (Faker $faker) {
    static $entityKindIds;
    $entityKindIds = $entityKindIds ?: DB::table('entity_kinds')->select('id')->get()->toArray();

    return [
        'category' => $faker->randomElement(['LOCOMOTIVE', 'TRAIN_CARRIAGE']),
        'entity_kind_id' => $faker->randomElement($entityKindIds)->id,
        'serial_number' => $faker->numerify('### ### ###-#'),
        'exists_since' => $faker->dateTimeBetween('-40 years', 'now')->format('Y-m-d H:i:s'),
    ];
});
