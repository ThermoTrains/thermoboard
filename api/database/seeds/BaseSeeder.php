<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Places
        DB::table('places')->insert([
            ['name' => 'Zürich Hardbrücke, DLR', 'latitude' => 47.386700, 'longitude' => 8.510973],
        ]);

        // Controller
        $controllerId = DB::table('controllers')->insertGetId([
            'name' => 'Thermo-Scanner',
        ]);

        // Sensors
        DB::table('sensors')->insert([
            ['name' => 'FLIR Ax5', 'produces' => 'IMAGE', 'controller_id' => $controllerId],
            ['name' => 'FLIR Ax5 Device Parameters', 'produces' => 'STRING', 'controller_id' => $controllerId],
            ['name' => 'Basler Cam', 'produces' => 'IMAGE', 'controller_id' => $controllerId],
            ['name' => 'Weather', 'produces' => 'STRING', 'controller_id' => $controllerId],
            ['name' => 'Temperature', 'produces' => 'TEMPERATURE', 'controller_id' => $controllerId],
        ]);
    }
}
