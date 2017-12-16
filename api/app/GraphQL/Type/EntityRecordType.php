<?php

namespace App\GraphQL\Type;

use Folklore\GraphQL\Support\Type as BaseType;
use GraphQL;
use GraphQL\Type\Definition\Type;

class EntityRecordType extends BaseType
{
    protected $attributes = [
        'name' => 'EntityRecordType',
        'description' => 'A type'
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::id(),
                'description' => 'The id of the entity record'
            ],
            'name' => [
                'type' => Type::string(),
                'description' => 'Name or short description of how this entity record relates to the whole record'
            ],
            'entity' => [
                'type' => Type::nonNull(GraphQL::type('Entity')),
                'description' => 'Entity this record relates to'
            ],
            'record' => [
                'type' => Type::nonNull(GraphQL::type('Record')),
                'description' => 'Record this entity record relates to'
            ],
            'values' => [
                'type' => Type::listOf(GraphQL::type('Value')),
                'description' => 'List of values recorded'
            ]
        ];
    }

    public function resolveEntityField($root, $args)
    {
        return $root->entity;
    }

    public function resolveRecordField($root, $args)
    {
        return $root->record;
    }

    public function resolveValuesField($root, $args)
    {
        return $root->values;
    }
}
