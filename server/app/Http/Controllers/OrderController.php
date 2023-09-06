<?php

namespace App\Http\Controllers;

use App\Http\Requests\Order\AllOrdersRequest;
use App\Http\Requests\Order\CreateOrderRequest;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index (AllOrdersRequest $request){
        $orders = Order::all();
        if(!$orders) {
            return response()->json([
                'success' => false,
                'message' => 'error getting orders',

            ]);
        }
        if (!empty($orders)) {
            return response()->json([
                'success' => true,
                'message' => 'orders are empty',
            ]);
        }
        return response()->json([
            'success' => true,
            'message' => 'orders found successfully',
            'data' => $orders
        ]);
    }



    public function create(CreateOrderRequest $request)
    {
        try {
            $user = auth()->user();

            $order = Order::create([
                'order_number' => mt_rand(10000, 99999),
                'user_id' => $user->id,
                'customer_name' => $request->input('customer_name'),
                'customer_email' => $request->input('customer_email'),
                'customer_phone' => $request->input('customer_phone'),
                'customer_address' => $request->input('customer_address'),
                'order_status' => 'Pending',
                'order_date' => now(),
                'order_total' => 0.0,
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Order created successfully.',
                'data' => $order,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error creating the order.',
                'error' => $e
            ], 500);
        }
    }
}
