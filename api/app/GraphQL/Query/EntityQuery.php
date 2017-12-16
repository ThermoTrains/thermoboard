<?php

namespace App\GraphQL\Query;

use App\Entity;
use Folklore\GraphQL\Support\Query;
use GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class EntityQuery extends Query
{
    protected $attributes = [
        'name' => 'EntityQuery',
        'description' => 'Get entities'
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('Entity'));
    }

    public function args()
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::id()],
            'serialNumber' => ['name' => 'serialNumber', 'type' => Type::string()],
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        if (isset($args['id'])) {
            return Entity::where('id', $args['id'])->get();
        }

        if (isset($args['serialNumber'])) {
            return Entity::where('serialNumber', $args['serialNumber'])->get();
        }

        return Entity::all();
    }
}
