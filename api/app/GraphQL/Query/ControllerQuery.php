<?php

namespace App\GraphQL\Query;

use App\Controller;
use Folklore\GraphQL\Support\Query;
use GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class ControllerQuery extends Query
{
    protected $attributes = [
        'name' => 'ControllerQuery',
        'description' => 'Get controllers'
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('Controller'));
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
            return Controller::where('id', $args['id'])->get();
        }

        return Controller::all();
    }
}
