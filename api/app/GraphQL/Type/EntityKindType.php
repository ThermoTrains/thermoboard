<?php

namespace App\GraphQL\Type;

use Folklore\GraphQL\Support\Type as BaseType;
use GraphQL;
use GraphQL\Type\Definition\Type;

class EntityKindType extends BaseType
{
    protected $attributes = [
        'name' => 'EntityKindType',
        'description' => 'The kind of an entity'
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::id(),
                'description' => 'The id of the record'
            ],
            'manufacturer' => [
                'type' => Type::string(),
                'description' => 'Manufacturer of this kind of entity'
            ],
            'name' => [
                'type' => Type::string(),
                'description' => 'The name of this kind of entity'
            ],
            'entities' => [
                'type' => Type::listOf(GraphQL::type('Entity')),
                'description' => 'Entities of this kind'
            ],
        ];
    }

    public function resolveEntitiesField($root, $args)
    {
        return $root->entities;
    }
}
