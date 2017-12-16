<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Record extends Model
{
    public function place()
    {
        return $this->belongsTo('App\Place');
    }

    public function entityRecords()
    {
        return $this->hasMany('App\EntityRecord');
    }

    public function values()
    {
        return $this->belongsToMany('App\Value');
    }
}
