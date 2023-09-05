<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;
    protected $fillable = [
        'order_id',
        'product_id',
        'product_name',
        'product_price',
        'product_quantity',
        'product_subtotal',
    ];

    public function orders (){
        return $this->belongsTo(Order::class);
    }
    public function products (){
        return $this->belongsTo(Product::class);
    }
}
