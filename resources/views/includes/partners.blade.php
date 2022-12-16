<!------ PARTNER & MEDIA SECTION-START ------>
<section class="media-wrapper  ml-2 mr-2 d-none d-lg-block">
    <div class="container">
        <div id="media-bg" class="followers-bg mb-5">
            <h4 class="text-center mb-4">Partners & Media</h4>
            <div class="owl-carousel owl-theme" id="media_partner">
                @if ($partners->count() > 0)
                    @foreach ($partners as $partner)
                    <div class="item">
                        <a href="#">  <img class="media-img" src="{{ asset('assets/images/'.$partner->image_thumbnail)}}" alt="{{$partner->name}}"> </a>
                    </div>
                    @endforeach
                @endif
            </div>
        </div>
    </div>
</section>
<!------ PARTNER & MEDIA SECTION-END ------>