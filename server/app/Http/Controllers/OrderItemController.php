<?php

namespace App\Http\Controllers;


use App\Http\Requests\OrderItem\CreateOrderItemRequest;
use App\Http\Requests\OrderItem\UpdateOrderItemRequest;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;

class OrderItemController extends Controller
{
    public function index(){
        $orderIetms = OrderItem::all();
        return response()->json([
            'success' => true,
            'message' => 'Order Items returned successfully',
            'data' => $orderIetms
        ]);
    }
    public function getOrderItemsId ($id){
        $orderIetm = OrderItem::find($id);
        return response()->json([
            'success' => true,
            'message' => 'Order Item returned successfully',
            'data' => $orderIetm
        ]);
    }

    public function create(CreateOrderItemRequest $request)
    {
        try {
            $product = Product::find($request->input('product_id'));
            $order =Order::find($request->input('order_id'));
            $productQuantity = $request->input('product_quantity');

            $orderItem = new OrderItem();
            $orderItem->order_id = $order->id;
            $orderItem->product_id = $product->id;
            $orderItem->product_name = $product->name;
            $orderItem->product_price = $product->price;
            $orderItem->product_quantity = $productQuantity;
            $orderItem->product_subtotal = $productQuantity * $product->price;
            $orderItem->save();

            return response()->json([
                'success' => true,
                'message' => 'Order item created successfully',
                'data' => $orderItem
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Order item not created successfully',
                'error' => $e->getMessage()
            ]);
        }
    }
    public function delete ($id){
        $orderItem = OrderItem::find($id);
        $orderItem->delete();
        return response()->json([
            'success' => true,
            'message' => 'Order deleted successfully',
        ]);
    }
}
