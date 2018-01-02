<?php

namespace App\GraphQL\Query;

use App\User;
use GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class UserQuery extends BusinessQuery
{
    protected $attributes = [
        'name' => 'UserQuery',
        'description' => 'Get users'
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('User'));
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        return $this->applyArgs(User::query(), $args)->get();
    }
}
