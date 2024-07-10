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
                 <p class="card-text text-center">{{$item->name}}
                  <br><a href="{{url('/edit/'.$item->id)}}" class="btn btn-primary my-1" style="color:white">Edit</a>
                   
                 <a href="{{url('/delete/'.$item->id)}}"  onclick ="return confirm( 'Are you sure to delete the product?')"class="btn btn-danger my-1 " style="color:white">Delete</a><br>
                 </p>
            </div>
        </div>
        
     @endforeach
    </div>
    <br>
    {{$products->links()}}
     <!-- 
    @foreach($products as $item)
    <tr>
        <td>{{$item->name}}</td>
        <td><img src="{{$item->image}}" width="50px" height="50px"></td>
        <td><a href="" class="btn btn-primary" style="color:white">Edit</a>
        <a href="" class="btn btn-success" style="color:white">Add Products</a>
        <a href="" class="btn btn-danger" style="color:white">Delete</a></td>


        
    </tr>
    @endforeach
 
</table>-->
@endsection
