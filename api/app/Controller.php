<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Controller extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
    ];

    public function sensors()
    {
        return $this->hasMany('App\Sensor');
    }
}
