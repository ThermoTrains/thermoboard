<?php

namespace App\GraphQL\Type;

use Folklore\GraphQL\Support\Type as BaseType;
use GraphQL;
use GraphQL\Type\Definition\Type;

class RecordType extends BaseType
{
    protected $attributes = [
        'name' => 'Record',
        'description' => 'A type'
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::id(),
                'description' => 'The id of the record'
            ],
            'timestamp' => [
                'type' => Type::string(), // TODO use timestamp
                'description' => 'Timestamp of when this record was produced'
            ],
            'place' => [
                'type' => GraphQL::type('Place'),
                'description' => 'The place this record was produced'
            ],
            'entity_records' => [
                'type' => Type::listOf(GraphQL::type('EntityRecord')),
                'description' => 'Entity records of this record'
            ],
            'values' => [
                'type' => Type::listOf(GraphQL::type('Value')),
                'description' => 'List of values recorded'
            ]
        ];
    }

    public function resolvePlaceField($root, $args)
    {
        return $root->place;
    }

    public function resolveEntityRecordsField($root, $args)
    {
        return $root->entityRecords;
    }

    public function resolveValuesField($root, $args)
    {
        return $root->values;
    }
}
