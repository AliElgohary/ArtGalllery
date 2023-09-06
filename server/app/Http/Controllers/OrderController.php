<?php

namespace App\Http\Controllers;

use App\Http\Requests\Order\AllOrdersRequest;
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
}
