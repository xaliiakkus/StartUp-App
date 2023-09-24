<template>
    <section>
        <div class="mx-auto max-w-[1340px] px-4 py-0 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
            <div class="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
                <div ref="keenSlider" class="keen-slider">
                    <div class="keen-slider__slide flex flex-1">
                        <blockquote class="flex justify-center bg-white p-6  sm:p-8 lg:p-12">
                            <div class="w-[350px] h-[250px] shadow-md rounded-xl px-4">
                                <h5>Super Helpful !!!!</h5>
                                <span class="text-xs"> There’s no other program that walks you through exactly what you need
                                    to know to start an online store fast, written by someone who has built several 7-figure
                                    ecommerce businesses from scratch. </span>
                                <div class="grid grid-rows-3 grid-flow-col gap-0">
                                    <div class="row-span-3 "> <img src="../assets/images/user.svg" alt=""
                                            class="h-[35px] w-[35px] overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow" />
                                    </div>
                                    <div class="col-span-1">
                                        <h6 class="right-[100px]">Anna Gates</h6>
                                    </div>
                                    <div class="row-span-1 col-span-5 "><span class="text-gray-300 text-sm">Web Desinger</span> </div>
                                </div>
                            </div>
                        </blockquote>
                        <blockquote class="flex justify-center bg-white p-6  sm:p-8 lg:p-12">
                            <div class="w-[350px] h-[250px] shadow-md rounded-xl px-4">
                                <h5>Awesome !!!!</h5>
                                <span class="text-xs">There’s no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch.  </span>
                                <div class="grid grid-rows-3 grid-flow-col gap-0">
                                    <div class="row-span-3 "> <img src="../assets/images/user1.svg" alt=""
                                            class="h-[35px] w-[35px] overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow" />
                                    </div>
                                    <div class="col-span-1">
                                        <h6 class="right-[100px]">Anna Gates</h6>
                                    </div>
                                    <div class="row-span-1 col-span-5 "><span class="text-gray-300 text-sm">Web Desinger</span> </div>
                                </div>
                            </div>
                        </blockquote>
                        <blockquote class="flex justify-center bg-white p-6  sm:p-8 lg:p-12">
                            <div class="w-[350px] h-[250px] shadow-md  rounded-xl px-4">
                                <h5>Great Support !!!!</h5>
                                <span class="text-xs"> There’s no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch.  </span>
                                <div class="grid grid-rows-3 grid-flow-col gap-0">
                                    <div class="row-span-3 "> <img src="../assets/images/user3.svg" alt=""
                                            class="h-[35px] w-[35px] overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow" />
                                    </div>
                                    <div class="col-span-1">
                                        <h6 class="right-[100px]">Anna Gates</h6>
                                    </div>
                                    <div class="row-span-1 col-span-5 "><span class="text-gray-300 text-sm">Web Desinger</span> </div>
                                </div>
                            </div>
                        </blockquote>
                        <blockquote class="flex justify-center bg-white p-6  sm:p-8 lg:p-12">
                            <div class="w-[350px] h-[250px] shadow-md rounded-xl px-4">
                                <h5>Great Support !!!!</h5>
                                <span class="text-xs"> There’s no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch.  </span>
                                <div class="grid grid-rows-3 grid-flow-col gap-0">
                                    <div class="row-span-3 "> <img src="../assets/images/user4.svg" alt=""
                                            class="h-[35px] w-[35px] overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow" />
                                    </div>
                                    <div class="col-span-1">
                                        <h6 class="right-[100px]">Anna Gates</h6>
                                    </div>
                                    <div class="row-span-1 col-span-5 "><span class="text-gray-300 text-sm">Web Desinger</span> </div>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-0 flex gap-4 justify-center lg:mt-0">
            <button aria-label="Previous slide" id="keen-slider-previous"
                class="rounded-full border border-[#0B0D39] p-3 text-rose-600 transition hover:bg-[#0B0D39] hover:text-white"
                @click="keenSlider.prev()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="h-5 w-5 rtl:rotate-180">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            <button aria-label="Next slide" id="keen-slider-next"
                class="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-[#0B0D39] hover:text-white"
                @click="keenSlider.next()">
                <svg class="h-5 w-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                </svg>
            </button>
        </div>
    </section>
</template>
  
<script>
import KeenSlider from 'keen-slider'
export default {
    data() {
        return {
            keenSlider: null,
        }
    },
    mounted() {
        this.keenSlider = new KeenSlider(this.$refs.keenSlider, {
            loop: true,
            slidesPerView: 1.25,
            spacing: 16,
            breakpoints: {
                '(min-width: 1024px)': {
                    slidesPerView: 2.5,
                    spacing: 32,
                },
            },
        })

        const keenSliderPrevious = document.getElementById('keen-slider-previous')
        const keenSliderNext = document.getElementById('keen-slider-next')

        keenSliderPrevious.addEventListener('click', () => this.keenSlider.prev())
        keenSliderNext.addEventListener('click', () => this.keenSlider.next())
    },
}
</script>
  
<style scoped>/* CSS still goes here */</style>