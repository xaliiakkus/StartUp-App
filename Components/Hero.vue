<template>
  <main class="container flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div class=" flex-1 pt-36 padding-x">
        <h1 class="xl:text-[50px] sm:text-[64px] text-[50px] font-extrabold">The<p class=" text-blue-600">template </p> your startup
          needed </h1>
          <p class=" text-[15px] text-black-100 font-light mt-5">A startup or start-up is a company or project undertaken by an entrepreneur to seek,
            develop, and validate a scalable business model.</p>
            <div class="flex flex-1 gap-8">
              <button class="button-left">
                  <p class="text-button py-1 text-white"> Let's discuss</p>
                </button>
              <button class="button-right">
                  <p class="text-button py-1"> Learn more</p>
                </button>
          </div>
      </div>
      <div class="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div class="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <img fill class=" object-contain" src="../assets/images/hero.svg" alt="Hero Image">
        </div>
      </div>
      <div class=" absolute top-[165px] left-[760px]  bg-blue-200 rounded-full bg-repeat-round -z-10 w-[500px] h-[500px] overflow-hidden"/>
      <div class=" absolute top-[594px] left-[1307px]  bg-orange-500 rounded-full bg-repeat-round -z-10 w-[28px] h-[28px] overflow-hidden"/>
      <div class=" absolute top-[155px] left-[789px]  bg-orange-400 rounded-full bg-repeat-round -z-10 w-[35px] h-[35px] overflow-hidden"/>
      <div class=" absolute top-[800px] right-[1307px]  bg-[#7B53FF] rounded-full bg-repeat-round -z-10 w-[32px] h-[32px] overflow-hidden"/>
      <div class=" absolute top-[825px] left-[1307px]  bg-[#FFB300] rounded-full bg-repeat-round -z-10 w-[41px] h-[41px] overflow-hidden"/>
  </main>
</template>
<script>
export default {

}
</script>
<style>
@media (max-width:768px) {
    .hero{
        width: auto;
        height: auto;
    }
    .hero-image {
        flex: 1;
    max-width: 35%;
    display: flex;
    position: fixed;
    left: 620px;
    }
}
.hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px;
}
.img-svg{
  max-width: 750px;
  z-index: 1;
  position: relative;
}
.hero-image {
    flex: 1;
    max-width: 450px;
    z-index: 0;
    position: static;
    background-color: rgb(59, 171, 223);
    border-radius: 100%;
}
.hero-text {
    display: block;
    padding: auto;
}

.button-right {
    position: relative;
    width: 150px;
    height: 45px;
    overflow: hidden;
    border : 2px solid;
    border-radius: 40px;
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
  }
  
  .button-right::after {
    content: "";
    position: absolute;
    inset: 4px;
    border-top-right-radius: 80px 80px;
  }
  
.button-left {
  position: relative;
  width: 150px;
  height: 45px;
  overflow: hidden;
  border: none;
  border-radius: 40px;
  background-color: #356DFF;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border-bottom-left-radius: 1px;
  cursor: pointer;
  }
  
  .button-left::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 200px;
    margin-top: -92px;
    background: linear-gradient(#d400d4);
  }
  
  .text-button {
    position: relative;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    padding-bottom: 1em;
    z-index: 1;
  }
</style>