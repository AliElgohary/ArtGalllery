<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name', 50)->nullable(false);
            $table->string('description', 150)->nullable(false);
            $table->decimal('price', 10, 2)->nullable(false);
            $table->integer('stock')->nullable(false);
            $table->string('image', 200)->nullable(false);
            $table->string('category', 50)->nullable(false);
            $table->boolean('status')->nullable(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
