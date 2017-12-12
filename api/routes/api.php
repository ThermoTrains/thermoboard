<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/migrate', function () {
  $migrationScript = __DIR__ . '/../database/migrate.php';

  if (!file_exists($migrationScript)) {
    echo "Migration already executed";
    return;
  }

  include($migrationScript);
});
