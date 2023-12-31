<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        if(auth()->user()->role != 'admin'){
            return false;
        }
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
            'name' => 'string|max:50|unique:products,name,' . $this->id,
            'description' => 'string|max:150',
            'price' => 'numeric',
            'stock' => 'integer',
            'image' => 'string|max:200',
            'category' => 'string|max:50',
            'status' => 'boolean',
        ];
    }
}
