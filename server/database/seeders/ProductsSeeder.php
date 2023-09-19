<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            'name' => 'Product 1',
            'description' => 'Description for Product 1',
            'price' => 20.99,
            'stock' => 100,
            'image' => './assets/images/1.jpg',
            'category' => 'Category A',
            'status' => true,
        ]);
        Product::create([
            'name' => 'Product 2',
            'description' => 'Description for Product 2',
            'price' => 30.50,
            'stock' => 80,
            'image' => './assets/images/5.jpg',
            'category' => 'Category B',
            'status' => false,
        ]);
        Product::create([
            'name' => 'Product 2',
            'description' => 'Description for Product 2',
            'price' => 30.50,
            'stock' => 80,
            'image' => './assets/images/4.jpg',
            'category' => 'Category B',
            'status' => false,
        ]);
    }
}
