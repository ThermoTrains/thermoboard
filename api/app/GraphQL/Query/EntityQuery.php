<?php

namespace App\GraphQL\Query;

use App\Entity;
use GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class EntityQuery extends BusinessQuery
{
    protected $attributes = [
        'name' => 'EntityQuery',
        'description' => 'Get entities'
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('Entity'));
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        return $this->applyArgs(Entity::query(), $args)->get();
    }
}
