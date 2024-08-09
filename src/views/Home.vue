<template>
    <main class="gmp-page gmp-page--no-newsletter">
        <HeroLanding/>
        <TwoTout />
        <TwoToutReverse />
        <TwoToutSiyu />
        <HomeColorBar />
        <HomeProduct :clientWidth="clientWidth"/>
        <HomeResourceCard :clientWidth="clientWidth" />
        <HomePhotoTout />

    </main>
</template>

<script>
    import HeroLanding from "../components/content/home/HeroLanding";
    import TwoToutSiyu from "../components/content/home/TwoToutSiyu";
    import TwoTout from "../components/content/home/TwoTout";
    import TwoToutReverse from "../components/content/home/TwoToutReverse";
    import HomeColorBar from "../components/content/home/HomeColorBar";
    import HomeProduct from "../components/content/home/HomeProduct";
    import HomeResourceCard from "../components/content/home/HomeResourceCard";
    import HomePhotoTout from "../components/content/home/HomePhotoTout";

    export default {
        name: 'Home',
        components: {
            HeroLanding,
            TwoTout,
            TwoToutReverse,
            TwoToutSiyu,
            HomeColorBar,
            HomeProduct,
            HomeResourceCard,
            HomePhotoTout
        },

        data() {
            return {
                clientWidth: "",
            }
        },

        mounted() {
            this.clientWidth = `${document.documentElement.clientWidth}`          //document.body.clientWidth;
            const that = this
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth
                    that.clientWidth = window.screenWidth
                })()
            }
        },

        watch: {
            clientWidth: function (val) {
                this.clientWidth = val
                console.log("Home" + this.clientWidth)
            }

        },


        methods: {


        },


    }
</script>


<style lang="less">


    .ccc {

        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12), inset 0 -1px 0 0 #dadce0;
    }







</style>