<?php

namespace App\GraphQL\Type;

use Folklore\GraphQL\Support\Type as BaseType;
use GraphQL;
use GraphQL\Type\Definition\Type;

class ValueType extends BaseType
{
    protected $attributes = [
        'name' => 'ValueType',
        'description' => 'A type'
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::id(),
                'description' => 'The id of the record value'
            ],
            'sensor' => [
                'type' => Type::nonNull(GraphQL::type('Sensor')),
                'description' => 'The sensor that produced this value (and contains the value type)'
            ],
            'string' => [
                'type' => Type::string(),
                'description' => 'String value'
            ],
            'temperature' => [
                'type' => Type::float(),
                'description' => 'Temperature value in kelvin'
            ],
            'number' => [
                'type' => Type::float(),
                'description' => 'Number value'
            ],
            'image' => [
                'type' => Type::string(),
                'description' => 'Image URL'
            ],
        ];
    }

    public function resolveSensorField($root, $args)
    {
        return $root->sensor;
    }
}
