<?php

namespace App\GraphQL\Query;

use App\Sensor;
use GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class SensorQuery extends BusinessQuery
{
    protected $attributes = [
        'name' => 'SensorQuery',
        'description' => 'Get sensors'
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('Sensor'));
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        return $this->applyArgs(Sensor::query(), $args)->get();
    }
}
