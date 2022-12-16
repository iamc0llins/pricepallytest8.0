@extends('layouts.app')

@section('content')
    @include('includes.hero')
    @include('includes.category-slider')
    @include('includes.products')
    @include('includes.partners')
    @include('includes.download-app')
    @include('includes.features')
    @include('includes.modals')
    
    @include('includes.mobile-loader')
    @include('includes.mobile-footer')

@endsection
