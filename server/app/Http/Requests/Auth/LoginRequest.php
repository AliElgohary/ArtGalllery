<?php

namespace App\Http\Requests\Auth;
use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'email' => 'required|email',
            'password' => 'required|min:8',
        ];
    }
    public function login(): array
    {
        $credentials = $this->only('email', 'password');
        try {
            $auth = auth()->attempt($credentials);
            if (!$auth) throw new \Exception('Invalid credentials');
            return [
                'token' => auth()->user()->createToken('auth_token')->plainTextToken,
                'role' => auth()->user()->role,
                'email' => auth()->user()->email,
                'id' => auth()->user()->id
            ];
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 401);
        }
    }
}
