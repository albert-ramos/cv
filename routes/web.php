<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/{route:.*}/', function ()  {
//     return view('app');
// });

Route::group(['scheme' => config('app.httpScheme')], function () {
    Route::fallback(function() {
        return view('app');
    });
});