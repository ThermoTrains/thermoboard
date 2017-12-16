<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Value extends Model
{
    public function sensor()
    {
        return $this->belongsTo('App\Sensor');
    }

    public function entityRecords()
    {
        return $this->belongsToMany('App\EntityRecord');
    }

    public function records()
    {
        return $this->belongsToMany('App\Record');
    }
}
