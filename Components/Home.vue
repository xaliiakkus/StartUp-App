<template >
    <div>
        <Navi/>
        <Hero/>
        <Content/>
        <Features/>
        <Teams/>
        <Blog/>
        <Newsleter/>
        <Footer/>
    </div>
</template>
<script>
import Navi from './Navi.vue';
import Hero from './Hero.vue';
import Content from './Content.vue';
import Features from './Features.vue';
import Teams from './Teams.vue';
import Blog from './Blog.vue';
import Newsleter from './Newsleter.vue';
import Footer from './Footer'
export default {
    components: {
    Hero,
    Navi,
    Content,
    Features,
    Teams,
    Blog,
    Newsleter,
    Footer
}
}
</script>
<style lang="">
    
</style>