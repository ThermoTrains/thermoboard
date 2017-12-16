<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            ['name' => 'Sebastian Häni', 'email' => 'haeni.sebastian@gmail.com', 'password' => bcrypt('1234')],
            ['name' => 'Raphael Laubscher', 'email' => 'raphael.laubscher@gmail.com', 'password' => bcrypt('1234')],
            ['name' => 'Pietro Loderer', 'email' => 'pietro_maria.loderer@sbb.ch', 'password' => bcrypt('1234')],
            ['name' => 'Marcus Hudritsch', 'email' => 'marcus.hudritsch@bfh.ch', 'password' => bcrypt('1234')],
        ]);
    }
}
