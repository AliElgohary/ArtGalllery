<?php

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
                Route::get('/', 'AuthController@index')->middleware(['auth:sanctum']);
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
                Route::get('/', 'ProductController@index');
                Route::post('/', 'ProductController@create')->middleware(['auth:sanctum']);
                Route::put('/{id}', 'ProductController@update')->middleware(['auth:sanctum']);
                Route::delete('/{id}', 'ProductController@delete')->middleware(['auth:sanctum']);
                Route::get('/{id}', 'ProductController@getProductById')->middleware(['auth:sanctum']);
            }
        );

        //orders routes
        Route::group([
            'prefix' => 'order',
        ], function(){
            Route::get('/', 'OrderController@index')->middleware('auth:sanctum');
            Route::post('/', 'OrderController@create')->middleware('auth:sanctum');
            Route::delete('/{id}', 'OrderController@delete')->middleware(['auth:sanctum']);
            Route::put('/{id}', 'OrderController@update')->middleware(['auth:sanctum']);
        });
    }
);
