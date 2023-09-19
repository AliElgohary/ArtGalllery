<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Product extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'name',
        'description',
        'price',
        'stock',
        'image',
        'category',
        'status'
    ];
    public function orderItem (){
        return $this->hasMany(OrderItem::class);
    }
}
