<?php

namespace App\GraphQL\Type;

use Folklore\GraphQL\Support\Type as BaseType;
use GraphQL;
use GraphQL\Type\Definition\Type;

class ControllerType extends BaseType
{
    protected $attributes = [
        'name' => 'ControllerType',
        'description' => 'Controller is a merger of sensors'
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::id(),
                'description' => 'The id of the controller'
            ],
            'name' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'Short name of the controller'
            ],
            'sensors' => [
                'type' => Type::listOf(GraphQL::type('Sensor')),
                'description' => 'The controller\'s sensors'
            ]
        ];
    }

    public function resolveSensorsField($root, $args)
    {
        return $root->sensors;
    }
}
