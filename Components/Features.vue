<template>
    <main>
        <div class=" py-32 overflow-hidden bg-white  sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8 top-[800px]">
                <div
                    class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div class="lg:pr-8 lg:pt-4 top-1/3 relative">
                        <div class="lg:max-w-lg">
                            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From <span
                                    class="text-[#356DFF]">design</span> to
                                code and back.</p>
                            <p class="mt-6 text-lg leading-8 text-gray-600">Startups typically begin by a founder
                                (solo-founder) or co-founders who have a way to solve a problem. The founder of a startup
                                will begin market validation .</p>
                            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                <div class="relative pl-9">
                                    <button class="button-left bg-[#0B0D39]">
                                        <p class="text-button py-1 text-white"> Let's discuss</p>
                                    </button>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <img src="../assets/images/features.svg" alt="Product screenshot"
                        class="w-[820px] h-[698px] max-w-none rounded-xl  ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0">
                </div>
            </div>
        </div>
        <div
            class=" absolute top-[1650px] left-[257px]  bg-orange-500 rounded-full bg-repeat-round z-10 w-[31px] h-[31px] overflow-hidden" />
        <div
            class=" absolute top-[1800px] left-[1780px]  bg-[#356DFF] rounded-full bg-repeat-round z-10 w-[35px] h-[35px] overflow-hidden" />
        <div
            class=" absolute top-[2200px] left-[999px]  bg-[#FFB300] rounded-full bg-repeat-round z-10 w-[38px] h-[38px] overflow-hidden" />
        <div
            class=" absolute top-[2630px] left-[50px]  bg-[#7EC68F] rounded-full bg-repeat-round z-10 w-[50px] h-[50px] overflow-hidden" />
        <div
            class="flex flex-1 justify-center items-center bg-[#ff910054] w-[18%] h-[5%] left-[790px] absolute rounded-full  py-6">
            <h1 class="text-[25px]  text-[#FF9100]">
                Testimonials
            </h1>
        </div>
        <div class="py-16">
            <h1 class=" text-center  text-[50px]"><span class="text-[#356DFF]">Trusted</span> by 100's<br />of client</h1>
            <div class="mx-auto flex  justify-center ">
                <div class="px-6 flex items-center flex-no-wrap">
                    <div class="w-12 h-12 bg-cover bg-center rounded-md">
                        <img src="../assets/images/user.svg" alt=""
                            class="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow" />
                    </div>
                    <div class="w-12 h-12 bg-cover rounded-md -ml-2">
                        <img src="../assets/images/user1.svg" alt=""
                            class="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow" />
                    </div>
                    <div class="w-12 h-12 bg-cover rounded-md bg-center -ml-2">
                        <img src="../assets/images/user2.svg" alt=""
                            class="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {

}
</script>
<style>
.button-left {
    position: relative;
    width: 150px;
    height: 45px;
    overflow: hidden;
    border: none;
    border-radius: 40px;
    background-color: #0B0D39;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border-bottom-left-radius: 1px;
    cursor: pointer;
}


.text-button {
    position: relative;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    padding-bottom: 1em;
    z-index: 1;
}</style>