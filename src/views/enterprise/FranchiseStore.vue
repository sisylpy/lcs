<template>

    <main class="gmp-page gmp-page--no-newsletter">

        <FS_scondHero />
        <FS_highLights :clientWidth="clientWidth"/>
        <FS_homeColorBar />
        <FS_twoTout />
        <FS_highLightsTwo :clientWidth="clientWidth"/>
        <FS_twoToutBottom />

        <div>FranchiseStore</div>

    </main>

</template>


<script>
    import FS_scondHero from "../../components/content/enterprise/overView/FS_scondHero";
    import FS_highLights from "../../components/content/enterprise/overView/FS_highLights";
    import FS_homeColorBar from "../../components/content/enterprise/overView/FS_homeColorBar";
    import FS_twoTout from "../../components/content/enterprise/overView/FS_twoTout";
    import FS_highLightsTwo from "../../components/content/enterprise/overView/FS_highLightsTwo";
    import FS_twoToutBottom from "../../components/content/enterprise/overView/FS_twoToutBottom";


    export default {
        name: 'FranchiseStore',
        components: {
            FS_scondHero,
            FS_highLights,
            FS_homeColorBar,
            FS_twoTout,
            FS_highLightsTwo,
            FS_twoToutBottom,
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
