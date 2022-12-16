<!DOCTYPE html>
<html lang="en">

<head>
    <title>Lagos Grocery Store | Affordable foodstuff Shopping at Pricepally</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="{{asset('assets/images/favicon.png')}}" />
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/owl.carousel.min.css')}}">
    <link href="{{asset('assets/css/bootstrap.min.css')}}" rel="stylesheet">
    <link rel='stylesheet' href="{{asset('assets/fonts/material_fonts.css')}}">
    <link rel='stylesheet' href="{{asset('assets/css/owl.carousel.min.css')}}">
    <link href="{{asset('assets/css/style.css')}}" rel="stylesheet">
    <link href="{{asset('assets/fonts/font-awesome.min.css')}}" rel="stylesheet" media="all">

</head>

<body>
    <main>
        @include('layouts.header')
        @yield('content')
        @include('layouts.footer')
    </main>

    <script src="{{asset('assets/js/jquery.min.js')}}"></script>
    <script src="{{asset('assets/js/popper.min.js')}}"></script>
    <script src="{{asset('assets/js/owl.carousel.min.js')}}"></script>
    <script src="{{asset('assets/js/bootstrap.min.js')}}"></script>
    <script src="{{asset('assets/js/script.js')}}"></script>
    <script src="{{asset('assets/js/multislider.js')}}"></script>
    <script src="{{asset('assets/js/multislider.min.js')}}"></script>

    <script>
        
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:2.5
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        })

    </script>

</body>

</html>