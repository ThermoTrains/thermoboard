<?php

namespace App\GraphQL\Query;

use App\EntityKind;
use Folklore\GraphQL\Support\Query;
use GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class EntityKindQuery extends Query
{
    protected $attributes = [
        'name' => 'EntityKindQuery',
        'description' => 'Get entity kinds'
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('EntityKind'));
    }

    public function args()
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::id()]
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        if (isset($args['id'])) {
            return EntityKind::where('id', $args['id'])->get();
        }

        return EntityKind::all();
    }
}
