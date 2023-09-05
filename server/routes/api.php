<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(
    [
        'prefix' => 'v1',
        'namespace' => 'App\Http\Controllers'
    ],
    function () {
        //User routes
        Route::group(
            [
                'prefix' => 'auth',
            ],
            function () {
                Route::post('/register', 'AuthController@register');
                Route::post('/login', 'AuthController@login');
            }
        );

        // Products routes
        Route::group(
            [
                'prefix' => 'products',
            ],
            function () {
                Route::post('/', 'ProductController@create');
                Route::get('/', 'ProductController@index');
                Route::put('/{id}', 'ProductController@update');
                Route::delete('/{id}', 'ProductController@delete');
                Route::get('/{id}', 'ProductController@getProductById');
            }
        );
    }
);
