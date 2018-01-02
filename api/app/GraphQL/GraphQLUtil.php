<?php

namespace App\GraphQL;

use GraphQL\Type\Definition\Type;

class GraphQLUtil
{
    public static function args()
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::id()],
            'orderby' => ['name' => 'orderby', 'type' => Type::listOf(Type::string())]
        ];
    }

    public static function applyArgs($query, $args)
    {
        $myQuery = $query;

        if (isset($args['id'])) {
            $myQuery = $myQuery->where('id', $args['id']);
        }

        if (isset($args['orderby'])) {
            $myQuery = $myQuery->orderBy($args['orderby'][0], $args['orderby'][1]);
        }

        return $myQuery;
    }
}
