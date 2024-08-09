<template>

    <main class="gmp-page gmp-page--no-newsletter">
        <DS_subpagehero />
        <DS_two_column_text />
        <DS_two_column_fullbleed />

    </main>

</template>


<script>
    import DS_subpagehero from "../../../components/content/enterprise/benefit/DS_subpagehero";
    import DS_two_column_text from "../../../components/content/enterprise/benefit/DS_two_column_text";
    import DS_two_column_fullbleed from "../../../components/content/enterprise/benefit/DS_two_column_fullbleed";


    export default {
        name: 'DS_Benefit',
        components:{
            DS_subpagehero,
            DS_two_column_text,
            DS_two_column_fullbleed,

        }

    }


</script>

<style>



</style>