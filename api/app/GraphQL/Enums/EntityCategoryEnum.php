<?php

namespace App\GraphQL\Enums;

use Folklore\GraphQL\Support\EnumType;

class EntityCategoryEnum extends EnumType
{
    protected $attributes = [
        'name' => 'EntityCategoryEnum',
        'description' => 'Enum of possible entity categories'
    ];

    public function values()
    {
        return [
            'LOCOMOTIVE' => 'LOCOMOTIVE',
            'TRAIN_CARRIAGE' => 'TRAIN_CARRIAGE',
        ];
    }
}
