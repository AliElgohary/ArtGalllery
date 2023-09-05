<?php

namespace App\Http\Requests\Product;

use App\Models\Product;
use Illuminate\Foundation\Http\FormRequest;

class CreateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:50|unique:products',
            'description' => 'required|string|max:150',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
            'image' => 'required|string|max:200',
            'category' => 'required|string|max:50',
            'status' => 'required|boolean',
        ];
    }

    public function createProduct(): Product
    {
        return Product::create([
            'name' => $this->name,
            'description' => $this->description,
            'price' => $this->price,
            'stock' => $this->stock,
            'image' => $this->image,
            'category' => $this->category,
            'status' => $this->status,
        ]);
    }

}
