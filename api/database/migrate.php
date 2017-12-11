<?php

use Illuminate\Support\Facades\Artisan;

$exitCode = Artisan::call('migrate', [
  '--force' => true,
]);

echo $exitCode;

// delete itself so nobody can execute this again until the the next deployment
unlink(__FILE__);
