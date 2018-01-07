<?php

namespace App\GraphQL\Query;

use App\EntityRecord;
use GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class EntityRecordQuery extends BusinessQuery
{
    protected $attributes = [
        'name' => 'EntityRecordQuery',
        'description' => 'A query'
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('EntityRecord'));
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        return $this->applyArgs(EntityRecord::query(), $args)->get();
    }
}
