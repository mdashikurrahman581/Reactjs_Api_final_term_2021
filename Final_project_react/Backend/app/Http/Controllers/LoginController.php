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
     
      $m = Manager::where('username',$request->username)

        ->where('password',$request->password)->first();

              if($m){
              
                 return $m;
               }else{

                return "not";

               }

              

    
       }
   


  public function logout(){

      session()->flush();
        return redirect()->route('mlogin');
       
    }

   
}