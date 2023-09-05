<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = [
        'customer_name',
        'user_id',
        'customer_email',
        'customer_phone',
        'customer_address',
        'order_status',
        'order_date',
        'order_total',
    ];
    public function user (){
        return $this->belongsTo(User::class);
    }

    public function orderItem (){
        return $this->hasMany(OrderItem::class);
    }
}
