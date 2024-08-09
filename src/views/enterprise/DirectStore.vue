<template>

    <main class="gmp-page gmp-page--no-newsletter">

        <DS_scondHero />
        <DS_highLights :clientWidth="clientWidth"/>
        <DS_homeColorBar />
        <DS_twoTout />
        <DS_highLightsTwo :clientWidth="clientWidth"/>
        <DS_twoToutBottom />


        <div>office</div>


    </main>

</template>


<script>
    import DS_scondHero from "../../components/content/enterprise/overView/DS_scondHero";
    import DS_highLights from "../../components/content/enterprise/overView/DS_highLights";
    import DS_homeColorBar from "../../components/content/enterprise/overView/DS_homeColorBar";
    import DS_twoTout from "../../components/content/enterprise/overView/DS_twoTout";
    import DS_highLightsTwo from "../../components/content/enterprise/overView/DS_highLightsTwo";
    import DS_twoToutBottom from "../../components/content/enterprise/overView/DS_twoToutBottom";


    export default {
        name: 'DirectStore',
        components: {
            DS_scondHero,
            DS_highLights,
            DS_homeColorBar,
            DS_twoTout,
            DS_highLightsTwo,
            DS_twoToutBottom,
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
        methods: {

        }

    }
</script>

<style>


</style>
