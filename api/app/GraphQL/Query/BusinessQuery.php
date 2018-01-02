<?php

namespace App\GraphQL\Query;

use App\GraphQL\GraphQLUtil;
use App\Record;
use Folklore\GraphQL\Support\Query;
use GraphQL\Type\Definition\ResolveInfo;
use Illuminate\Database\Eloquent\Builder;

abstract class BusinessQuery extends Query
{
    public function args()
    {
        return GraphQLUtil::args();
    }

    protected function applyArgs(Builder $query, $args): Builder
    {
        return GraphQLUtil::applyArgs($query, $args);
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        return $this->applyArgs(Record::query(), $args)->get();
    }
}
