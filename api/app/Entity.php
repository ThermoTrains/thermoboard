<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Entity extends Model
{
    public function entityKind()
    {
        return $this->belongsTo('App\EntityKind');
    }

    public function entityRecords()
    {
        return $this->hasMany('App\EntityRecord');
    }
}
