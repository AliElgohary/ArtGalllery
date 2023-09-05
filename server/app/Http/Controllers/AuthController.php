<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register (RegisterRequest $request){
        $user = $request->newUser();
        return response()->json([
            'success' => true,
            'message' => 'user registration successful',
            'data' => $user
        ]);
    }

    public function login (LoginRequest $request){

    }
}
