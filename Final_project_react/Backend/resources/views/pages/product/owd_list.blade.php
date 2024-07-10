@extends('layouts.app')
@section('dynamic_content')
@if(session('status'))
<h6 class="alert alert-success">{{session('status')}}</h6>
@endif 
@if(session('stat'))
<h6 class="alert alert-danger">{{session('stat')}}</h6>
@endif 
<table class="table table-bordered">
   <!-- <tr>
        <th>Products</th>
        <th>Image</th>
        <th>Actions</th>
    </tr>-->
    <div class="col-md-3">
     @foreach($products as $item)
        <div class="card" style="width: 11rem;">
          <img src="{{asset('uploads/products/'.$item->p_image)}}" class="card-img-top" alt="Card image cap"> 
            <div class="card-body">
            <h6>Product will be deliverd by</h6>
                 <p class="card-text text-center">{{ $item->delivery_man}}
                 
                 </p>
            </div>
        </div>
        
     @endforeach
    </div>
    <br>
    {{$products->links()}}
  
@endsection
