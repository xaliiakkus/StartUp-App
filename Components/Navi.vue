<template>
    <header class=" container flex justify-center shadow-md rounded-full">
        <div class=" flex items-center justify-between space-x-16">
            <a href="#" class=" text-6xl font-bold  ">
                <img src="../assets/images/nav.svg" />
            </a>
            <nav class="flex justify-between flex-1">
                <div class="flex items-center text-lg space-x-8">
                    <a href="#" class=" text-[#0B0D39]">Home</a>
                    <a href="#" class=" text-[#0B0D39]  flex gap-2">Solutions <img
                            src="../assets/images/dropdonw.svg" /></a>
                    <a href="#" class=" text-[#0B0D39]  flex gap-2">Services <img
                            src="../assets/images/dropdonw.svg" /></a>
                    <a href="#" class=" text-[#0B0D39]">About</a>
                    <a href="#" class=" text-[#0B0D39] ">Feedback</a>
                </div>

                <div class="flex items-center space-x-8">
                    <div class=" px-4 mx-4 py-1">
                        <div class=" flex px-3 gap-4">
                            <button class="w-[167px] h-[58px] rounded-full border border-sky-200"> Download App</button>
                            <button class="w-[167px] h-[58px] bg-[#0B0D39] rounded-full text-white">Let's Discuss</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>
<script>
export default {
 name:"Navi"
}
</script>