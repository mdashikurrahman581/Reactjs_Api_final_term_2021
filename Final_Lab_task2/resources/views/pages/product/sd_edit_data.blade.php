<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
   
    <title>crud</title>
  </head>
  <body>
      <div class="container">
   <!--<button type="button" class="btn btn-success">Add Product</button>-->
   <a href = "{{url('owd/list')}}" class="btn btn-success my-3">View Products With Delivery Man</a>
    
</div>

@if(session('status'))
<h6 class="alert alert-success">{{session('status')}}</h6>
@endif 
<!--
@if(Session::has('msg'))
<p class="alart alart-success">{{Session::get('msg')}}</p>
@endif
-->

<form action="{{url('owd_update/'.$edit->id)}}" method="POST" enctype="multipart/form-data">

        
        <!--Cross Site Request Forgery    {{csrf_field()}} -->

       
        @csrf

        <div class="col-md-2 form-group">
            <span>Set a delivery man</span>
            <input type="text" name="d_name" value="{{$edit->d_name}}" class="form-control">
            @error('d_name')
                    <span class="text-danger">{{$message}}</span>
            @enderror
        
        </div>


        <div class="col-md-2 form-group">
            <span>Product Name</span>
            <input type="text" name="name" value="{{$edit->name}}" class="form-control">
            @error('name')
                    <span class="text-danger">{{$message}}</span>
            @enderror
        
        </div>


        <div class="col-md-2 form-group">
            <span>Product Id</span>
            <input type="text" name="p_id" value="{{$edit->p_id}}" class="form-control">
            @error('p_id')
                    <span class="text-danger">{{$message}}</span>
            @enderror
        
        </div>


       <div class="col-md-2 form-group">
            <span>Product Image</span>
            <input type="file" name="p_image" value="{{$edit->p_image}}" class="form-control">
            @error('p_image')
                    <span class="text-danger">{{$message}}</span>
            @enderror
        
        </div>



        <div class="col-md-2 form-group">
            <span>Product Unit Price</span>
            <input type="text" name="unit_price" value="{{$edit->unit_price}}" class="form-control">
            @error('unit_price')
                    <span class="text-danger">{{$message}}</span>
            @enderror
        
        </div>

        <div class="col-md-2 form-group">
            <span>Product Quantity</span>
            <input type="text" name="quantity" value="{{$edit->quantity}}" class="form-control">
            @error('quantity')
                    <span class="text-danger">{{$message}}</span>
            @enderror            
        </div>
        <div class="col-md-2 form-group">
            <span>Product Description</span>
            <input type="text" name="description" value="{{$edit->description}}" class="form-control">
            @error('description')
                    <span class="text-danger">{{$message}}</span>
            @enderror            
        </div>       
        
        <input type="submit" class="btn btn-success" value="Add Delivery Man">

    </form>
</body>
</html>