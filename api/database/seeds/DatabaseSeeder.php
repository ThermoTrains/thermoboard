<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(TruncateSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(BaseSeeder::class);
        $this->call(DummyDataSeeder::class);
    }
}
