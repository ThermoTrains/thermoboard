<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EntityKind extends Model
{
    public function entities()
    {
        return $this->hasMany('App\Entity');
    }
}
