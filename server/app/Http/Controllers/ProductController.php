<?php
namespace App\Http\Controllers;

use App\Http\Requests\Product\CreateProductRequest;
use App\Http\Requests\Product\DeleteProductRequest;
use App\Http\Requests\Product\UpdateProductRequest;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();

        if ($products->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'No products found.',
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Products retrieved successfully',
            'data' => $products,
        ]);
    }

    public function create(CreateProductRequest $request)
    {
        $product = $request->createProduct();

        return response()->json([
            'success' => true,
            'message' => 'Product created successfully',
            'data' => $product,
        ]);
    }
    public function update($id ,UpdateProductRequest $request) {
        $product = Product::findOrFail($id);
        $product->update($request->validated());

        return response()->json([
            'success' => true,
            'message' => 'Product updated successfully',
            'data' => $product
        ]);
    }
    public function delete ($id){
        $product = Product::findOrFail($id);
        $product->delete();
        return response()->json([
            'success' => true,
            'message' => 'Product deleted successfully'
        ]);
    }
}
