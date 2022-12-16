<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('quantity');
            $table->integer('demand_increase');
            $table->integer('total_slot');
            $table->integer('slot_booked')->nullable();
            $table->dateTime('expiry_date');
            $table->dateTime('delivery_date');
            $table->string('image_thumbnail');
            $table->string('slot_per_person')->nullable();
            $table->boolean('is_in_season');
            $table->boolean('is_recommend')->default(false);
            $table->float('price');
            $table->float('old_price');
            $table->string('status')->nullable();
            $table->integer('quantity_remaining');
            $table->integer('initial_quantity');
            $table->string('unit');
            $table->string('category');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
