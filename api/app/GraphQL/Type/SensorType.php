<?php

namespace App\GraphQL\Type;

use Folklore\GraphQL\Support\Type as BaseType;
use GraphQL;
use GraphQL\Type\Definition\Type;

class SensorType extends BaseType
{
    protected $attributes = [
        'name' => 'Sensor',
        'description' => 'A sensor gathers data about an entity and is controller by a controller'
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::id(),
                'description' => 'The id of the sensor'
            ],
            'name' => [
                'type' => Type::string(),
                'description' => 'Short name of this sensor'
            ],
            'controller' => [
                'type' => Type::nonNull(GraphQL::type('Controller')),
                'description' => 'Controller of this sensor'
            ],
            'produces' => [
                'type' => Type::nonNull(GraphQL::type('ValueType')),
                'description' => 'The type of value this sensor produces'
            ],
            'values' => [
                'type' => Type::listOf(GraphQL::type('Value')),
                'description' => 'Values this sensor produces'
            ],
        ];
    }

    public function resolveControllerField($root, $args)
    {
        return $root->controller;
    }

    public function resolveValuesField($root, $args)
    {
        return $root->values;
    }
}
