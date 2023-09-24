<template>
      <div
        class="p-6 container md:w-2/3 xl:w-auto mx-auto flex flex-col xl:items-stretch justify-between xl:flex-row"
      >
        <div
          class="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center"
        >
          <img
            src="../assets/images/rocket.svg"
            alt="Envelope with a newsletter"
            role="img"
            class=" w-[500px] h-[500px] relative bottom-[130px]"
          />
        </div>
        <div class="w-full xl:w-1/2 xl:pl-40 xl:py-0">
          <h1
            class="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-4 text-center xl:text-left md:mt-0 mt-4"
          >
          Fire up your <span class="text-[#356DFF]">Rocket</span> !
          </h1> 
          <p
            class="text-base leading-normal text-gray-600 text-center xl:text-left"
          >
          Startups typically begin by a founder (solo-founder) or co-founders who 
          </p>
          <div class="flex items-stretch mt-12">
            <button class="button-left">
                <p class="text-button py-1 text-white"> Let's discuss</p>
              </button>
          </div>
        </div>
      </div>
  </template>
  
  <script>
  export default {
    name: "MyComponent",
  };
  </script> 