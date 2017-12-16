<?php

namespace App\GraphQL\Query;

use App\Sensor;
use Folklore\GraphQL\Support\Query;
use GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class SensorQuery extends Query
{
    protected $attributes = [
        'name' => 'SensorQuery',
        'description' => 'Get sensors'
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('Sensor'));
    }

    public function args()
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::id()]
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        if (isset($args['id'])) {
            return Sensor::where('id', $args['îd'])->get();
        }

        return Sensor::all();
    }
}
