<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;
use App\Models\Partners;

class HomeController extends Controller
{
    //
    public function index() {

        $shop_products = Products::where('category','shop')->get();
        $pally_products = Products::where('category','pally')->get();
        $recommended_products = Products::where('is_recommend',true)->get();

        $partners = Partners::get();

        return view('home2')
        ->with('shop_products', $shop_products)
        ->with('pally_products', $pally_products)
        ->with('recommended_products', $recommended_products)
        ->with('partners', $partners);
    }
}
