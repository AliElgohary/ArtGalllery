<?php

namespace App\Http\Controllers;

use App\Http\Requests\Order\AllOrdersRequest;
use App\Http\Requests\Order\CreateOrderRequest;
use App\Http\Requests\Order\DeleteOrderRequest;
use App\Http\Requests\Order\UpdateOrderRequest;
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
                'customer_name' => $user->name,
                'customer_email' => $user->email,
                'customer_phone' => $user->phone,
                'customer_address' => $user->address,
                'order_status' => 'Pending',
                'order_date' => now(),
                'order_total' => 0.0,
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Order created successfully.',
                'data' => $order
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error creating the order.',
                'error' => $e
            ], 500);
        }
    }
    public function update($id, UpdateOrderRequest $request)
    {
        try{
            $order = Order::find($id);
            $validatedData = $request->validated();
            $order->update($validatedData);

            return response()->json([
                'success' => true,
                'message' => 'Order updated successfully',
                'data' => $order
            ], 200);
        }catch (\Exception $e){
            return response()->json([
                'success' => false,
                'message' => 'Error updating the order.',
                'error' => $e
            ]);
        }
    }


    public function delete($id , DeleteOrderRequest $request){
        $order = Order::find($id);
        if(!$order) {
            return response()->json([
                'success' => false,
                'message' => 'Order not found'
            ]);
        }
        $order->delete();
        return response()->json([
            'success' => true,
            'message' => 'Order deleted successfully'
        ]);
    }
}
