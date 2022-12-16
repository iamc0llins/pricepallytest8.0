<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;

class PartnerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $partners = [
            [
                'name' => 'Green Tech',
                'image_thumbnail' => 'media-img1.png',
            ],
            [
                'name' => 'School',
                'image_thumbnail' => 'media-img2.png',
            ],
            [
                'name' => 'Reuters',
                'image_thumbnail' => 'media-img3.png',
            ],
            [
                'name' => 'Green Tech',
                'image_thumbnail' => 'media-img1.png',
            ],
            [
                'name' => 'School',
                'image_thumbnail' => 'media-img2.png',
            ],
            [
                'name' => 'Reuters',
                'image_thumbnail' => 'media-img3.png',
            ],
            
        ];

        foreach($partners as $partner)
            Db::table('partners')->insert($partner);
    }
}
