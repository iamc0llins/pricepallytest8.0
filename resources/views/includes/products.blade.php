<!------ FOOD-ITEMS-WEB-VIEW-SECTION-START ------>
<section class="food-items-bg  d-none d-lg-block webfoodTab-view">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-lg-5">
                <ul class="nav nav-tabs foodtabs" id="foodTab" role="tablist">
                    <li class="nav-item ">
                        <a class="nav-link active" id="" data-toggle="tab" href="#pally" role="tab" aria-controls="pally" aria-selected="true">Shop</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="recommended-tab" data-toggle="tab" href="#recommended" role="tab" aria-controls="recommended" aria-selected="false">Pally</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pre-orders-tab" data-toggle="tab" href="#pre-orders" role="tab" aria-controls="pre-orders" aria-selected="false">Recommended</a>
                    </li>
                </ul>
            </div>
            <div class="col-md-12 col-lg-7">
                <form class="form-inline select-bg float-right">
                    <div class="form-group mb-0">
                        <select class="form-control border-right-0">
                            <option>Categories</option>
                            <option>Soup & stew ingredients</option>
                            <option>Foodstuffs</option>
                            <option>Meat, Poultry & Seafood</option>
                        </select>
                    </div>
                    <div class="form-group mb-0">
                        <select class="form-control  border-right-0">
                            <option>Sub Categories</option>
                            <option>Grains</option>
                            <option>Tubers & Roots
                            </option>
                        </select>
                    </div>
                    <div class="form-group mb-0">
                        <select class="form-control">
                            <option>Sort By: Price (Low to High)</option>
                            <option>Price (Low to High)</option>
                            <option>Price (High to Low)</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
        <hr class="border-bottom">
        <div class="row ">
            <div class="col-lg-12">
                <div class="tab-content main" id="foodTabContent">
                    <div class="tab-pane fade show active " id="pally" role="tabpanel" aria-labelledby="pally-tab">
                        
                        <h6 class="inner-head">{{$shop_products->count()??0}} Available Deals</h6>
                        <div class="">
                            <div class="row">
                                @if ($shop_products->count() > 0)
                                    @foreach ($shop_products as $shop_product)
                                    <div class="col-md-6 col-lg-3">
                                        <div class="pally-inner ">
                                            <div class="products-img-wrapper  mb-3 pointer">
                                                <a href="#">
                                                    <div class="heart-icon">
                                                        <span class="material-icons">
                                                            favorite_border
                                                        </span>
                                                    </div>
                                                    <img class=" product-img mb-3" src="{{ asset('assets/images/'.$shop_product->image_thumbnail) }}" alt="{{ $shop_product->name }}">
                                                </a>
                                            </div>

                                            <div class="pally-content">
                                                <a href="#" class="inner-head">
                                                    <h5 class="mb-2">{{ $shop_product->name . '('.$shop_product->quantity.')' }}</h5>
                                                </a>
                                                <a href="#" class="red-bg"><span class="material-icons-outlined">
                                                        arrow_right_alt
                                                    </span>{{ $shop_product->demand_increase }}% | <span class="{{ $shop_product->is_in_season?'clr-gr': '' }}">In Season</span></a>
                                                <h5 class="mb-2 mt-2 font-weight-bold simhead">₦{{ number_format($shop_product->price) }} <small>per
                                                        slot ({{ $shop_product->slot_per_person }})</small></h5>
                                                <h6 class="mb-2">Time left: {{ $shop_product->time_left}}</h6>
                                                <ul class="list-unstyled pallylist-bg mb-2">
                                                    @for ($i = 0; $i < $shop_product->slot_booked; $i++)
                                                        <li class="d-inline-block pally-left">
                                                            <img class="list-img" src="assets/images/list-img1.jpg" alt="list-img1">
                                                        </li>
                                                    @endfor
                                                    <li class="d-inline-block">
                                                        <small>{{ $shop_product->total_slot - $shop_product->slot_booked }} slots left</small>
                                                    </li>
                                                </ul>
                                                <a href="#">
                                                    <button type="button" class="brown-btn  text-uppercase btn-effects pally-slot-btn">BUY SLOT</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    @endforeach
                                @endif
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade recommended-bg" id="recommended" role="tabpanel" aria-labelledby="recommended-tab">
                        <h6 class="inner-head mb-3 mt-3">{{$pally_products->count()??0}} Available Deals</h6>
                        <div class="">
                            <div class="row">
                                @if ($pally_products->count() > 0)
                                    @foreach ($pally_products as $pally_product)
                                        <div class="col-md-6 col-lg-3">
                                            <div class="pally-inner ">
                                                <div class="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div class="heart-icon">
                                                            <span class="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img class="mb-3 product-img" src="{{ asset('assets/images/'.$pally_product->image_thumbnail) }}" alt="{{ $pally_product->name }}">
                                                    </a>
                                                </div>

                                                <div class="pally-content">
                                                    <a href="#" class="inner-head">
                                                        <h5 class="mb-2">{{ $pally_product->name . '('.$pally_product->quantity.')' }}</h5>
                                                    </a>
                                                    <a href="#" class="green-bg"><span class="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>{{ $pally_product->demand_increase }}% | <span class="{{ !$pally_product->is_in_season?'clr-red': '' }}">In Season</span></a>
                                                    <h5 class="mb-2 mt-2 font-weight-bold simhead">₦{{number_format($pally_product->price)}}
                                                        <s>(₦{{number_format($pally_product->old_price)}})</s>
                                                    </h5>
                                                    <section class='rating-widget'>
                                                        <div class="no-ratings"><p>No ratings yet</p></div>
                                                        <!-- <div class="rating-main pro-detail-star" data-vote="0">
                                                            <div class="mainstar hidden">
                                                                <span class="full" data-value="0"></span>
                                                                <span class="half" data-value="0"></span>
                                                            </div>
                                                            <div class="star">
                                                                <span class="full" data-value="1"></span>
                                                                <span class="half" data-value="0.5"></span>
                                                                <span class="selected"></span>

                                                            </div>
                                                            <div class="star">
                                                                <span class="full" data-value="2"></span>
                                                                <span class="half" data-value="1.5"></span>
                                                                <span class="selected"></span>

                                                            </div>

                                                            <div class="star">
                                                                <span class="full" data-value="3"></span>
                                                                <span class="half" data-value="2.5"></span>
                                                                <span class="selected"></span>
                                                            </div>

                                                            <div class="star">
                                                                <span class="full" data-value="4"></span>
                                                                <span class="half" data-value="3.5"></span>
                                                                <span class="selected"></span>
                                                            </div>

                                                            <div class="star">
                                                                <span class="full" data-value="5"></span>
                                                                <span class="half" data-value="4.5"></span>
                                                                <span class="selected"></span>
                                                            </div>
                                                        </div> -->
                                                        <div class='success-box'>
                                                            <div class='text-message'></div>
                                                        </div>
                                                    </section>
                                                    <a href="#">
                                                        <button type="button" class="brown-btn  text-uppercase btn-effects ">SELECT ORDER TYPE</button>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                    @endforeach
                                @endif
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade preorder-bg" id="pre-orders" role="tabpanel" aria-labelledby="pre-orders-tab">
                        <h6 class="inner-head mb-3 mt-3">{{$recommended_products->count()??0}} Available Deals</h6>
                        <div class="">
                            <div class="row">
                                @if ($recommended_products->count() > 0)
                                    @foreach ($recommended_products as $recommended_product)
                                        <div class="col-md-6 col-lg-3">
                                            <div class="pally-inner">
                                                <div class="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div class="heart-icon">
                                                            <span class="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img class="mb-3 product-img" src="{{ asset('assets/images/'.$recommended_product->image_thumbnail) }}" alt="{{ $recommended_product->name }}">
                                                    </a>
                                                </div>

                                                <div class="pally-content">
                                                    <a href="#" class="inner-head">
                                                        <h5 class="mb-2">{{ $recommended_product->name . '('.$recommended_product->quantity.')' }}</h5>
                                                    </a>
                                                    <a href="#" class="red-bg"><span class="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>{{ $recommended_product->demand_increase }}% | <span class="{{ $recommended_product->is_in_season?'clr-gr': '' }}">In Season</span></a>
                                                    <h6 class="mb-2 mt-2 font-weight-bold simhead">₦{{number_format($recommended_product->price)}} per kg</h6>
                                                    <p class="text-red mb-2">{{ (!$recommended_product->quantity_remaining == 0)? $recommended_product->quantity_remaining.$recommended_product->unit. ' of ' . $recommended_product->initial_quantity.$recommended_product->unit.' left' : 'CLOSED'}}</p>
                                                    <div class="preorder-progress stat-bar mb-2">
                                                        <span class="stat-bar-rating" role="stat-bar" style="width: {{ceil(100 - (($recommended_product->quantity_remaining / $recommended_product->initial_quantity) * 100))}}%;"></span>
                                                    </div>
                                                    <p class="mb-2 dgrey-clr">Delivery Date: {{$recommended_product->delivery_date->format('M d, Y')}}</p>
                                                    <a href="#">
                                                        <button type="button" class="brown-btn  text-uppercase btn-effects " data-toggle="modal" data-target="#preorderModal">Book
                                                            Now</button>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                    @endforeach
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
                <div class="load-bg text-center mb-5 d-none d-lg-block">
                    <a href="#">
                        <button typ="button" class="load-more text-uppercase ">
                            Load more items
                        </button>
                    </a>
                </div>
            </div>
        </div>

    </div>
</section>
<!------ FOOD-ITEMS-WEB-VIEW-SECTION-START ------>
<!------ FOOD-ITEMS-MOBILE-SECTION-START ------>
<div class="fixed-food">
    <section class="food-items-bg  d-block d-lg-none mobilefoodTab-view">
        <div class="tabs-fixed">
            <div class="container ">
                <div class="d-flex">
                    <div class=" justify-content-start">
                    </div>
                    <div class=" ml-auto justify-content-end">
                        <p class="mb-0" data-toggle="modal" data-target="#fillter-modal"> <span class="material-icons align-top pr-2">
                                filter_list
                            </span class="align-top">Filter</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-lg-5">
                        <ul class="nav nav-tabs foodtabs" id="foodTab" role="tablist">
                            <li class="nav-item ">
                                <a class="nav-link active" id="" data-toggle="tab" href="#mobile-pally"
                                    role="tab" aria-controls="mobilepally" aria-selected="true">Shop</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="mobile-recommended-tab" data-toggle="tab"
                                    href="#mobile-recommended" role="tab" aria-controls="mobile-recommended"
                                    aria-selected="false">Pally</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="mobile-pre-orders-tab" data-toggle="tab"
                                    href="#mobile-pre-orders" role="tab" aria-controls="mobile-pre-orders"
                                    aria-selected="false">Recommended</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-12 col-lg-7">
                        <ul class="list-unstyled mb-0 select-bg float-right d-none d-lg-block">
                            <li class="d-inline-block">
                                <div class="form-group mb-0">
                                    <select class="form-control">
                                        <option>Categories</option>
                                        <option>Soup & stew ingredients</option>
                                        <option>Foodstuffs</option>
                                        <option>Meat, Poultry & Seafood</option>
                                    </select>
                                </div>
                            </li>
                            <li class="d-inline-block">
                                <div class="form-group mb-0">
                                    <select class="form-control">
                                        <option>Sub Categories</option>
                                        <option>Grains
                                        </option>
                                        <option>Tubers & Roots
                                        </option>
                                    </select>
                                </div>
                            </li>
                            <li class="d-inline-block">
                                <div class="form-group mb-0">
                                    <select class="form-control">
                                        <option>Sort By: Price (Low to High)</option>
                                        <option>Price (Low to High)</option>
                                        <option>Price (High to Low)</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr class="border-bottom">
            </div>
        </div>

        <div class="food-bg product_list">
            <div class="container">
                <div class="row ">
                    <div class="col-lg-12">
                        <div class="tab-content mobiletabcontent" id="foodTabContent">
                            <div class="tab-pane fade show active pally-bg" id="mobile-pally" role="tabpanel"
                                aria-labelledby="mobile-pally-tab">
                                <h6 class="inner-head mb-3 mt-3">{{$shop_products->count()??0}} Available Deals</h6>
                                @if ($shop_products->count() > 0)
                                    @foreach ($shop_products as $shop_product)
                                        <div class="d-flex mobile-product">
                                            <div class=" justify-content-start">
                                                <div class="pally-inner">
                                                    <div class="products-img-wrapper  mb-2 pointer">
                                                        <a href="product_detail.html">
                                                            <div class="heart-icon">
                                                                <span class="material-icons">
                                                                    favorite_border
                                                                </span>
                                                            </div>
                                                            <img class="product-img" src="{{ asset('assets/images/M'.$shop_product->image_thumbnail) }}" alt="{{ $shop_product->name }}">
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class=" ml-2 justify-content-end">
                                                <div class="pally-content">
                                                    <a href="#" class="inner-head">
                                                        <h5 class="mb-2">{{ $shop_product->name . '('.$shop_product->quantity.')' }}</h5>
                                                    </a>
                                                    <a href="#" class="red-bg"><span class="material-icons-outlined">
                                                                                        arrow_right_alt
                                                                                    </span>{{ $shop_product->demand_increase }}% | <span class="{{ $shop_product->is_in_season?'clr-gr': '' }}" >In Season</span></a>
                                                    <h5 class="mb-2 mt-2 font-weight-bold simhead">₦{{ number_format($shop_product->price) }} <small>per
                                                                                        slot ({{ $shop_product->slot_per_person }})</small></h5>
                                                    <h6 class="mb-2">Time left: 68:50:52</h6>
                                                    <ul class="list-unstyled pallylist-bg mb-2">
                                                        @for ($i = 0; $i < $shop_product->slot_booked; $i++)
                                                            <li class="d-inline-block pally-left">
                                                                <img class="list-img" src="assets/images/list-img1.jpg" alt="list-img1">
                                                            </li>
                                                        @endfor
                                                        <li class="d-inline-block">
                                                            <small>{{ $shop_product->total_slot - $shop_product->slot_booked }} slots left</small>
                                                        </li>
                                                    </ul>
                                                    <a href="#">
                                                        <button type="button" class="brown-btn  text-uppercase btn-effects pally-slot-btn">BUY
                                                                                        SLOT</button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach
                                @endif
                            </div>
                            <div class="tab-pane fade recommended-bg" id="mobile-recommended" role="tabpanel" aria-labelledby="mobile-recommended-tab">
                                <h6 class="inner-head mb-3 mt-3">{{$pally_products->count()??0}} Available Deals</h6>
                                @if ($pally_products->count() > 0)
                                    @foreach ($pally_products as $pally_product)
                                        <div class="d-flex mobile-product">
                                            <div class=" justify-content-start">
                                                <div class="pally-inner">
                                                    <div class="products-img-wrapper  mb-2 pointer">
                                                        <a href="#">
                                                            <div class="heart-icon">
                                                                <span class="material-icons">
                                                                                                favorite_border
                                                                                            </span>
                                                            </div>
                                                            <img class="product-img" src="{{ asset('assets/images/M'.$pally_product->image_thumbnail) }}" alt="{{ $pally_product->name }}">
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class=" ml-2 justify-content-end">
                                                <div class="pally-content">
                                                    <a href="#" class="inner-head">
                                                        <h5 class="mb-2">{{ $pally_product->name . '('.$pally_product->quantity.')' }}</h5>
                                                    </a>
                                                    <a href="#" class="green-bg"><span class="material-icons-outlined">
                                                                                        arrow_right_alt
                                                                                    </span>{{ $pally_product->demand_increase }}% | <span class="{{ !$pally_product->is_in_season?'clr-red': '' }}">In Season</span></a>
                                                    <h5 class="mb-2 mt-2 font-weight-bold simhead">₦{{number_format($pally_product->price)}}
                                                        <s>(₦{{number_format($pally_product->old_price)}})</s>
                                                    </h5>
                                                    <section class='rating-widget mb-2'>
                                                        <div class="no-ratings"><p>No ratings yet</p></div>
                                                        <!-- <div class="rating-main pro-detail-star" data-vote="0">
                                                            <div class="mainstar hidden">
                                                                <span class="full" data-value="0"></span>
                                                                <span class="half" data-value="0"></span>
                                                            </div>
                                                            <div class="star">
                                                                <span class="full" data-value="1"></span>
                                                                <span class="half" data-value="0.5"></span>
                                                                <span class="selected"></span>

                                                            </div>
                                                            <div class="star">
                                                                <span class="full" data-value="2"></span>
                                                                <span class="half" data-value="1.5"></span>
                                                                <span class="selected"></span>

                                                            </div>

                                                            <div class="star">
                                                                <span class="full" data-value="3"></span>
                                                                <span class="half" data-value="2.5"></span>
                                                                <span class="selected"></span>
                                                            </div>

                                                            <div class="star">
                                                                <span class="full" data-value="4"></span>
                                                                <span class="half" data-value="3.5"></span>
                                                                <span class="selected"></span>
                                                            </div>

                                                            <div class="star">
                                                                <span class="full" data-value="5"></span>
                                                                <span class="half" data-value="4.5"></span>
                                                                <span class="selected"></span>
                                                            </div>
                                                        </div> -->
                                                        <!-- <div class='success-box'>
                                                            <div class='text-message'>(4.5/5.0)</div>
                                                        </div> -->
                                                    </section>
                                                    <a href="#">
                                                        <button type="button" class="brown-btn  text-uppercase btn-effects ">SELECT ORDER
                                                                                        TYPE</button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach
                                @endif
                            </div>
                            <div class="tab-pane fade preorder-bg" id="mobile-pre-orders" role="tabpanel" aria-labelledby="mobile-pre-orders-tab">
                                <h6 class="inner-head mb-3 mt-3">{{$recommended_products->count()??0}} Available Deals</h6>
                                <div class="">
                                    @if ($recommended_products->count() > 0)
                                        @foreach ($recommended_products as $recommended_product)
                                            <div class="d-flex mobile-product">
                                                <div class=" justify-content-start">
                                                    <div class="pally-inner">
                                                        <div class="products-img-wrapper  mb-2 pointer">
                                                            <a href="#">
                                                                <div class="heart-icon">
                                                                    <span class="material-icons">
                                                                                                    favorite_border
                                                                                                </span>
                                                                </div>
                                                                <img class="mb-3 product-img" src="{{ asset('assets/images/M'.$recommended_product->image_thumbnail) }}" alt="{{ $recommended_product->name }}">
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class=" ml-2 justify-content-end">
                                                    <div class="pally-content">

                                                        <a href="#" class="inner-head">
                                                            <h5 class="mb-2">{{ $recommended_product->name . '('.$recommended_product->quantity.')' }}</h5>
                                                        </a>
                                                        <a href="#" class="red-bg"><span class="material-icons-outlined">arrow_right_alt</span>{{ $recommended_product->demand_increase }}% | <span class="{{ $recommended_product->is_in_season?'clr-gr': '' }}">In Season</span></a>
                                                        <h6 class="mb-2 mt-2 font-weight-bold simhead">₦{{number_format($recommended_product->price)}} per kg
                                                        </h6>
                                                        <p class="text-red mb-2">{{ (!$recommended_product->quantity_remaining == 0)? $recommended_product->quantity_remaining.$recommended_product->unit. ' of ' . $recommended_product->initial_quantity.$recommended_product->unit.' left' : 'CLOSED'}}</p>
                                                        <div class="preorder-progress stat-bar mb-2">
                                                            <span class="stat-bar-rating" role="stat-bar" style="width: {{ceil(100 - (($recommended_product->quantity_remaining / $recommended_product->initial_quantity) * 100))}}%;">80%</span>
                                                        </div>
                                                        <p class="mb-2 dgrey-clr">Delivery Date: {{$recommended_product->delivery_date->format('M d, Y')}}</p>
                                                        <a href="#">
                                                            <button type="button" class="brown-btn  text-uppercase btn-effects " data-toggle="modal" data-target="#booknowModal">Book
                                                                                            Now</button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        @endforeach
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="load-bg text-center mb-5 d-none d-lg-block">
                            <a href="#">
                                <button typ="button" class="load-more text-uppercase ">Load more items</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<!------ FOOD-ITEMS-MOBILE-SECTION-START ------>