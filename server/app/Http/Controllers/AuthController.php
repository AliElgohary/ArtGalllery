<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function index(){
        $users = User::all();
        return $users;

        if ($users->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'No users found.',
            ], 404);
        }

    }
    public function register (RegisterRequest $request){
        $user = $request->newUser();
        return response()->json([
            'success' => true,
            'message' => 'user registration successful',
            'data' => $user
        ]);
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user(); // Get the authenticated user

            return response()->json([
                'success' => true,
                'message' => 'Login successful',
                'data' => $user, // Include the authenticated user data
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Login failed: Invalid credentials',
                'data' => null,
            ], 401);
        }
    }
}
