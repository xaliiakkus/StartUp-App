<template>
    <main class="py-16">
        <div
            class="flex flex-1 justify-center items-center bg-[#ff910054] w-[18%] h-[5%] left-[790px] absolute rounded-full  py-6">
            <h1 class="text-[25px]  text-[#FF9100]">
                BLOG
            </h1>
        </div>
        <h1 class=" text-center py-16 text-[50px]"><span class="text-[#356DFF]">Knowledge </span>Hup</h1>
        <div class="container  flex space-x-10 justify-center items-center">
            <div class="blog-card">
                <img src="../assets/images/Busines.svg" alt="Blog Image">
                <h3 class="blog-title">How A Website Growths
                    your Business</h3>
                <div class="blog-meta">
                    <span class="meta-item">7 min read · September 12</span>
                </div>
                <a class="read-more text-[#00C254]" href="#">Business &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</a>
                <button
                    class="rounded-full border relative left-14 border-rose-600 p-3 transition hover:bg-[#0B0D39] hover:text-white">
                    <svg class="h-5 w-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                </button>
            </div>
            <div class="blog-card">
                <img src="../assets/images/Brinding.svg" alt="Blog Image">
                <h3 class="blog-title">How A Website Growths
                    your Business</h3>
                <div class="blog-meta">
                    <span class="meta-item">7 min read · September 12</span>
                </div>
                <a class="read-more text-[#00C254]" href="#">Brinding &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</a>
                <button
                    class="rounded-full border relative left-14 border-rose-600 p-3 transition bg-[#356DFF] hover:text-white">
                    <svg class="h-5 w-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                </button>
            </div>
            <div class="blog-card">
                <img src="../assets/images/ProductDesing.svg" alt="Blog Image">
                <h3 class="blog-title">How A Website Growths
                    your Business</h3>
                <div class="blog-meta">
                    <span class="meta-item">7 min read · September 12</span>
                </div>
                <a class="read-more text-[#00C254]" href="#">Product Desing</a>
                <button
                    class="rounded-full border relative left-14 border-rose-600 p-3 transition hover:bg-[#0B0D39] hover:text-white">
                    <svg class="h-5 w-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                </button>
            </div>

        </div>
        <div class="flex justify-center">
            <button class="button-right">
                <p class="text-button py-1"> Learn more</p>
            </button>
        </div>
        <div
            class=" absolute top-[370%] left-[40px]  bg-orange-600 rounded-full bg-repeat-round w-[28px] h-[28px] overflow-hidden" />
        <div
            class=" absolute top-[350%] left-[200px]  bg-[#356DFF] rounded-full bg-repeat-round  w-[35px] h-[35px] overflow-hidden" />
        <div
            class=" absolute top-[380%] right-[40px]  bg-[#FFB300] rounded-full bg-repeat-round w-[28px] h-[28px] overflow-hidden" />
        <div
            class=" absolute top-[428%] right-[190px]  bg-[#7EC68F] rounded-full bg-repeat-round  w-[47px] h-[47px] overflow-hidden" />
        <div
            class=" absolute top-[400%] left-[500px]  bg-[#FFB300] rounded-full bg-repeat-round w-[68px] h-[68px] overflow-hidden" />
        <div
            class=" absolute top-[445%] left-[800px]  bg-[#F65529] rounded-full bg-repeat-round  w-[35px] h-[35px] overflow-hidden" />
    </main>
</template>
<script >

export default {
    name: "MyComponent",
};
</script>
<style scoped>
.blog-card {
    width: 300px;

    border-radius: 8px;
    margin: 20px;
    padding: 20px;
}

.blog-card img {
    width: 100%;
    border-radius: 8px;
}

.blog-title {
    font-size: 18px;
    margin-top: 10px;
}

.blog-description {
    color: #555;
}

.blog-meta {
    margin-top: 10px;
}

.meta-item {
    display: block;
    font-size: 12px;
    color: #888;
}

.read-more {
    display: inline-block;
    background-color: white;
    color: black;
    padding: 8px 20px;
    text-decoration: none;
    border-radius: 4px;
    margin-top: 1px;
    bottom: 230px;
    position: relative;
    margin: 9px;
}</style>