<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\AllUsersRequest;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function index(AllUsersRequest $request)
    {
        $users = User::all();
        if ($users->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'No users found.',
            ], 404);
        }
        return $users;
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
        $auth = $request->login();

        return response()->json([
            'success' => true,
            'message' => 'User logged in successfully',
            'data' => $auth,
        ], 200);
    }
}
