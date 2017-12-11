<?php

use Illuminate\Support\Facades\Artisan;

echo "Clearing cache";
Artisan::call('cache:clear');

echo "Migrating database";
Artisan::call('migrate', [
  '--force' => true,
]);

echo "Destroying itself in 1, 2, 3 boom!!!";

// delete itself so nobody can execute this again until the the next deployment
unlink(__FILE__);
