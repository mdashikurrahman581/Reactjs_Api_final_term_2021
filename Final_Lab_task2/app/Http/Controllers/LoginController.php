<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Manager;
use App\Models\Product;
use Session;

class LoginController extends Controller
{
    //
    public function login(){
        return view('pages.login.login');
       
    }


    public function loginSubmit(Request $request){
        $m = Manager::where('phone',$request->phone)
        ->where('password',md5($request->password))
        ->first();
    if($m){
              session()->put('user',$m->phone);
              return redirect()->route('products.list');
           }

         return redirect()->route('mlogin');

       }
   


  public function logout(){

      session()->flush();
        return redirect()->route('mlogin');
       
    }

   
}