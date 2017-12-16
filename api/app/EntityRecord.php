<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EntityRecord extends Model
{
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    public function entity()
    {
        return $this->belongsTo('App\Entity');
    }

    public function record()
    {
        return $this->belongsTo('App\Record');
    }

    public function values()
    {
        return $this->belongsToMany('App\Value');
    }
}
