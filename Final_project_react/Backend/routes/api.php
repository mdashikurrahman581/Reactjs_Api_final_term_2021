<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductAPIController;
use App\Http\Controllers\LoginController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/*Product routes starts*/
Route::get('products/list', [ProductAPIController::class,'list']);
Route::post('products/addproduct', [ProductAPIController::class,'addproduct']);
Route::post('products/addproductt',[ProductAPIController::class,'storeproduct']);
Route::get('/edit',[ProductAPIController::class,'editData']);
Route::post('/update',[ProductAPIController::class,'updateData']);
Route::post('/delete',[ProductAPIController::class,'deleteData']);

/*Product routes end*/

/* orderlist */
Route::get('order/list',[ProductAPIController::class,'orderlist']);
Route::get('sd_edit',[ProductAPIController::class,'sd_editData']);
//Route::post('owd_update',[ProductAPIController::class,'owd_updateData']);
Route::get('owd/list',[ProductAPIController::class,'owdList']);
//login

Route::post('/login',[LoginController::class,'loginSubmit']);
Route::get('/logout',[LoginController::class,'logout']);