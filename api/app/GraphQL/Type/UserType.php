<?php

namespace App\GraphQL\Type;

use Folklore\GraphQL\Support\Type as BaseType;
use GraphQL\Type\Definition\Type;

class UserType extends BaseType
{
    protected $attributes = [
        'name' => 'UserType',
        'description' => 'User that can access the application'
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::id(),
                'description' => 'The id of the user'
            ],
//            'category' => [
//                'type' => Type::nonNull(GraphQL::type('EntityCategory')),
//                'description' => 'Category of this entity'
//            ],
            'email' => [
                'type' => Type::string(),
                'description' => 'The email of user'
            ]
        ];
    }
}
