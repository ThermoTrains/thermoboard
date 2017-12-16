<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sensor extends Model
{
    public function controller()
    {
        return $this->belongsTo('App\Controller');
    }

    public function values()
    {
        return $this->hasMany('App\Value');
    }
}
