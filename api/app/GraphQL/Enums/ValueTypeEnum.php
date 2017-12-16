<?php

namespace App\GraphQL\Enums;

use Folklore\GraphQL\Support\EnumType;

class ValueTypeEnum extends EnumType
{
    protected $attributes = [
        'name' => 'ValueTypeEnum',
        'description' => 'An enum'
    ];

    public function values()
    {
        return [
            'STRING' => 'STRING',
            'NUMBER' => 'NUMBER',
            'TEMPERATURE' => 'TEMPERATURE',
            'IMAGE' => 'IMAGE'
        ];
    }
}
