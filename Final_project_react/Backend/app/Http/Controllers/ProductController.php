<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Session;

class ProductController extends Controller
{
    //


    public function list(){
        //$products = Product::all();
        $products = Product::simplePaginate(2);
        return view('pages.product.list',compact('products'))->with('products' ,$products);

    }
    public function addproduct(){
        
        return view('pages.product.addproduct');

    }
    public function storeproduct(Request $request){

        $var=[
            //'name'=>'required | min:3|max:30|regex:/^[A-Za-z]+$/',
            'name'=>'required | min:3|max:30|regex:/^[A-Za-z0-9? ,_-]+$/',
            //'p_id'=>'required|regex:/^([0-9\s\-\+\(\)]*)$/',
            'p_id'=>'required|regex:/^[A-Za-z0-9? ,_-]+$/',
            'unit_price'=>'required',
            'quantity'=>'required',
            'description'=>'required',
           //'image'=>'required'
                       
            ];

        $var2=[
                'name.required'=>'Please enter the product name',
                'name.min'=>'Product name must be greater than 3 characters ',
                'p_id.required'=>'Please enter the product id',
                'unitPrice.required'=>'Please enter the product price',
                'quantity.required'=>'Please enter the product quantity',
                'description.required'=>'Please enter the product description',
               // 'image.required'=>'Please enter the product image',
            ];

        $this->validate($request, $var,$var2);
                $pcrud=new Product();
                $pcrud->name=$request->name;
                $pcrud->p_id=$request->p_id;
                $pcrud->unit_price=$request->unit_price;
                $pcrud->quantity=$request->quantity;
                $pcrud->description=$request->description;
                if($request->hasfile('p_image'))
                {
                 
                    $file = $request->file('p_image');
                    $extension = $file->getClientOriginalExtension();
                    $filename=time().'.'.$extension;
                    $file->move('uploads/products/',$filename);
                    $pcrud->p_image = $filename;

                }
               // $pcrud->p_image=$request->p_image;
                $pcrud->save();



               // Session::flash('msg','Product Successfully added');
       
                //return redirect()->back();
        
               //return redirect('/Products/list')->with('status','Product Successfully added');
               return redirect('Products/list')->with('status','Product Successfully Added');

              
    }
  

    public function editData($id=null){
        //return $id;
        $edit=Product::find($id);
        return view('pages.product.edit_data',compact('edit'));
    }

//////////////////////////////////////////////////////////////////////////////////


    public function updateData(Request $request,$id){

        $var=[
            //'name'=>'required | min:3|max:30|regex:/^[A-Za-z]+$/',
            'name'=>'required | min:3|max:30|regex:/^[A-Za-z0-9? ,_-]+$/',
            //'p_id'=>'required|regex:/^([0-9\s\-\+\(\)]*)$/',
            'p_id'=>'required|regex:/^[A-Za-z0-9? ,_-]+$/',
            'unit_price'=>'required',
            'quantity'=>'required',
            'description'=>'required',
           //'image'=>'required'
                       
            ];

        $var2=[
                'name.required'=>'Please enter the product name',
                'name.min'=>'Product name must be greater than 3 characters ',
                'p_id.required'=>'Please enter the product id',
                'unitPrice.required'=>'Please enter the product price',
                'quantity.required'=>'Please enter the product quantity',
                'description.required'=>'Please enter the product description',
               // 'image.required'=>'Please enter the product image',
            ];

        $this->validate($request, $var,$var2);
                $pcrud=Product::find($id);
                $pcrud->name=$request->name;
                $pcrud->p_id=$request->p_id;
                $pcrud->unit_price=$request->unit_price;
                $pcrud->quantity=$request->quantity;
                $pcrud->description=$request->description;
                if($request->hasfile('p_image'))
                {
                 
                    $file = $request->file('p_image');
                    $extension = $file->getClientOriginalExtension();
                    $filename=time().'.'.$extension;
                    $file->move('uploads/products/',$filename);
                    $pcrud->p_image = $filename;

                }
               // $pcrud->p_image=$request->p_image;
                $pcrud->save();



               // Session::flash('msg','Product Successfully added');
       
                //return redirect()->back();
        
              // return redirect('/Products/list')->with('status','Product Successfully updated');

              return redirect('Products/list')->with('status','Product Successfully Updated');
    }
  
    public function deleteData($id=null){

        $delete=Product::find($id);
        $delete->delete();
        return redirect('Products/list')->with('stat','Product Successfully Deleted');
        
        
        }

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Delivery///////////////////////////////////////////////////
        public function orderlist(){
            //$products = Product::all();
            $products = Product::simplePaginate(2);
            return view('pages.product.orderlist',compact('products'))->with('products' ,$products);
    
        }
        public function owdList(){
            //$products = Product::all();
            $products = Product::simplePaginate(2);
            return view('pages.product.owd_list',compact('products'))->with('products' ,$products);
    
        }

        public function sd_editData($id=null){
            //return $id;
            $edit=Product::find($id);
            return view('pages.product.sd_edit_data',compact('edit'));
        }


        public function owd_updateData(Request $request,$id){

            $var=[
                'd_name'=>'required | min:3|max:30|regex:/^[A-Za-z0-9? ,_-]+$/',
                //'name'=>'required | min:3|max:30|regex:/^[A-Za-z]+$/',
                'name'=>'required | min:3|max:30|regex:/^[A-Za-z0-9? ,_-]+$/',
                //'p_id'=>'required|regex:/^([0-9\s\-\+\(\)]*)$/',
                'p_id'=>'required|regex:/^[A-Za-z0-9? ,_-]+$/',
                'unit_price'=>'required',
                'quantity'=>'required',
                'description'=>'required',
               //'image'=>'required'
                           
                ];
    
            $var2=[

                    'd_name.required'=>'Please enter the delivery man name',
                    'd_name.min'=>'Product name must be greater than 3 characters ',
                    'name.required'=>'Please enter the product name',
                    'name.min'=>'Product name must be greater than 3 characters ',
                    'p_id.required'=>'Please enter the product id',
                    'unitPrice.required'=>'Please enter the product price',
                    'quantity.required'=>'Please enter the product quantity',
                    'description.required'=>'Please enter the product description',
                   // 'image.required'=>'Please enter the product image',
                ];
    
            $this->validate($request, $var,$var2);
                   
                   
                    $pcrud=Product::find($id);
                    $pcrud->delivery_man=$request->d_name;
                    $pcrud->name=$request->name;
                    $pcrud->p_id=$request->p_id;
                    $pcrud->unit_price=$request->unit_price;
                    $pcrud->quantity=$request->quantity;
                    $pcrud->description=$request->description;
                    if($request->hasfile('p_image'))
                    {
                     
                        $file = $request->file('p_image');
                        $extension = $file->getClientOriginalExtension();
                        $filename=time().'.'.$extension;
                        $file->move('uploads/products/',$filename);
                        $pcrud->p_image = $filename;
    
                    }
                   // $pcrud->p_image=$request->p_image;
                    $pcrud->save();
    
    
    
                   // Session::flash('msg','Product Successfully added');
           
                    //return redirect()->back();
            
                  //return redirect('/Products/list')->with('status','Product Successfully updated');
    
                 return redirect('owd/list')->with('status','Delivery Man Successfully Added');
        }



}
