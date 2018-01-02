<?php

namespace App\GraphQL\Query;

use App\Record;
use GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class RecordQuery extends BusinessQuery
{
    protected $attributes = [
        'name' => 'RecordQuery',
        'description' => 'Get records'
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('Record'));
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        return $this->applyArgs(Record::query(), $args)->get();
    }
}
