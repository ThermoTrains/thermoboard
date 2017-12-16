<?php

namespace App\GraphQL\Type;

use Folklore\GraphQL\Support\Type as BaseType;
use GraphQL;
use GraphQL\Type\Definition\Type;

class PlaceType extends BaseType
{
    protected $attributes = [
        'name' => 'PlaceType',
        'description' => 'A type'
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::id(),
                'description' => 'The id of the place'
            ],
            'name' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'Name of this place'
            ],
            'records' => [
                'type' => Type::listOf(GraphQL::type('Record')),
                'description' => 'List of records produced at this place'
            ],
            'latitude' => [
                'type' => Type::float(),
                'description' => 'WGS84 Latitude'
            ],
            'longitude' => [
                'type' => Type::float(),
                'description' => 'WGS84 Longitude'
            ],
        ];
    }

    public function resolveRecordsField($root, $args)
    {
        return $root->records;
    }
}
