<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\LoginController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {return view('welcome');});

/////////login
Route::get('/login',[LoginController::class,'login'])->name('mlogin');
Route::post('/login',[LoginController::class,'loginSubmit'])->name('mlogin');
Route::get('/logout',[LoginController::class,'logout'])->name('mlogout');

/*Product routes starts*/
Route::get('Products/list',[ProductController::class,'list'])->name('products.list')->middleware('LoggedInManager');
Route::get('Products/addproduct',[ProductController::class,'addproduct'])->name('products.addproduct')->middleware('LoggedInManager');
Route::post('Products/addproduct',[ProductController::class,'storeproduct'])->name('products.storeproduct')->middleware('LoggedInManager');
Route::get('/edit/{id}',[ProductController::class,'editData'])->name('products.edit')->middleware('LoggedInManager');
Route::post('/update/{id}',[ProductController::class,'updateData'])->name('update')->middleware('LoggedInManager');
Route::get('/delete/{id}',[ProductController::class,'deleteData'])->name('delete')->middleware('LoggedInManager');
/*Product routes end*/
/* orderlist */
Route::get('order/list',[ProductController::class,'orderlist'])->name('order.list')->middleware('LoggedInManager');
Route::get('/sd_edit/{id}',[ProductController::class,'sd_editData'])->name('products.sd_edit')->middleware('LoggedInManager');
Route::post('/owd_update/{id}',[ProductController::class,'owd_updateData'])->name('products.owd_update')->middleware('LoggedInManager');
//
Route::get('owd/list',[ProductController::class,'owdList'])->name('owd.list')->middleware('LoggedInManager');