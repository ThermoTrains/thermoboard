<?php

namespace App\GraphQL\Query;

use App\EntityKind;
use GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class EntityKindQuery extends BusinessQuery
{
    protected $attributes = [
        'name' => 'EntityKindQuery',
        'description' => 'Get entity kinds'
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('EntityKind'));
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        return $this->applyArgs(EntityKind::query(), $args)->get();
    }
}
