<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductAPIController extends Controller
{
    //
    public function list(){
        $products = Product::all();
        return  $products;

    }
    
    public function editData($id=null){
        //return $id;
        $edit=Product::find($id);
        return $edit;
    }


}
