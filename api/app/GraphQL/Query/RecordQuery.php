<?php

namespace App\GraphQL\Query;

use App\Record;
use Folklore\GraphQL\Support\Query;
use GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class RecordQuery extends Query
{
    protected $attributes = [
        'name' => 'RecordQuery',
        'description' => 'Get records'
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('Record'));
    }

    public function args()
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::id()],
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        if (isset($args['id'])) {
            return Record::where('id', $args['id'])->get();
        }

        return Record::all();
    }
}
