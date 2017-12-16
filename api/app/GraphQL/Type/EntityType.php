<?php

namespace App\GraphQL\Type;

use Folklore\GraphQL\Support\Type as BaseType;
use GraphQL;
use GraphQL\Type\Definition\Type;

class EntityType extends BaseType
{
    protected $attributes = [
        'name' => 'EntityType',
        'description' => 'An entity that is observed by sensors'
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::id(),
                'description' => 'The id of the entity'
            ],
            'category' => [
                'type' => Type::nonNull(GraphQL::type('EntityCategory')),
                'description' => 'Category of this entity'
            ],
            'kind' => [
                'type' => GraphQL::type('EntityKind'),
                'description' => 'Kind of entity'
            ],
            'serial_number' => [
                'type' => Type::string(),
                'description' => 'Serial number of this entity'
            ],
            'exists_since' => [
                'type' => Type::string(), // TODO use timestamp
                'description' => 'Timestamp when this entity was first introduced'
            ],
            'entity_records' => [
                'type' => Type::listOf(GraphQL::type('EntityRecord')),
                'description' => 'Records of this entity'
            ],
        ];
    }

    public function resolveKindField($root, $args)
    {
        return $root->entityKind;
    }

    public function resolveEntityRecordsField($root, $args)
    {
        return $root->entityRecords;
    }
}
