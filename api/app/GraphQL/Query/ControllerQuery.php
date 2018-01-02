<?php

namespace App\GraphQL\Query;

use App\Controller;
use GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class ControllerQuery extends BusinessQuery
{
    protected $attributes = [
        'name' => 'ControllerQuery',
        'description' => 'Get controllers'
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('Controller'));
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        return $this->applyArgs(Controller::query(), $args)->get();
    }
}
