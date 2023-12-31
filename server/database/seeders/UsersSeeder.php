<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'admin',
            'email' => 'admin@example.com',
            'password' => Hash::make('secretpassword'),
            'phone' => '01234567891',
            'role' => 'admin',
            'address' => 'Cairo admin st',
        ]);

        User::create([
            'name' => 'user',
            'email' => 'user@example.com',
            'password' => Hash::make('secretpassword'),
            'phone' => '01234567891',
            'role' => 'user',
            'address' => 'Cairo user st',
        ]);
    }
}
