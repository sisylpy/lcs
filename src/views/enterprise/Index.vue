<template>

    <main class="gmp-page gmp-page--no-newsletter">

        <EI_heroLanding />
        <DS_highLights :clientWidth="clientWidth"/>
        <DS_homeColorBar />
        <DS_twoTout />
        <DS_highLightsTwo :clientWidth="clientWidth"/>
        <DS_twoToutBottom />
        <div>Enterprise</div>
    </main>

</template>


<script>
    import EI_heroLanding from "../../components/content/enterprise/index/EI_heroLanding";
    import DS_highLights from "../../components/content/enterprise/overView/DS_highLights";
    import DS_homeColorBar from "../../components/content/enterprise/overView/DS_homeColorBar";
    import DS_twoTout from "../../components/content/enterprise/overView/DS_twoTout";
    import DS_highLightsTwo from "../../components/content/enterprise/overView/DS_highLightsTwo";
    import DS_twoToutBottom from "../../components/content/enterprise/overView/DS_twoToutBottom";


    export default {
        name: 'Enterprise',
        components: {
            EI_heroLanding,
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
            let that = this;
            this.clientWidth = `${document.documentElement.clientWidth}`          //document.body.clientWidth;
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
