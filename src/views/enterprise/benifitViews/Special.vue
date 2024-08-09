<template>

    <main class="gmp-page gmp-page--no-newsletter">

        <DS_two_column_fullbleed />
        <DS_features_module />


    </main>

</template>


<script>
    import DS_two_column_fullbleed from "../../../components/content/enterprise/special/DS_two_column_fullbleed";
    import DS_features_module from "../../../components/content/enterprise/special/DS_features_module";

    export default {
        name: 'Special',
        components:{
            DS_two_column_fullbleed,
            DS_features_module,

        }


    }


</script>

<style>
    .h-c-header--product-initiative .h-c-header__bar {
        height: 112px;
    }

    .h-c-header--corporate-initiative .h-c-header__bar:before, .h-c-header--product-initiative .h-c-header__bar:before {
        background: #dadce0;
        content: '';
        height: 1px;
        left: 0;
        position: absolute;
        right: 0;
        top: 56px;
    }

    .h-c-header--product-initiative .h-c-header__hamburger.h-c-header__hamburger--first-tier {
        display: none;
    }


    .h-c-header--product-initiative .h-c-header__lockup {
        height: 50%;
    }

    .h-c-header__bar .h-c-header__initiative-logo {
        clear: none;
        height: 50%;
    }

    .h-c-header__initiative-logo {
        clear: left;
        display: table;
        float: left;
        height: 56px;
        margin-left: 16px;
        padding: 4px 0;
    }

    .h-c-header__initiative-logo-link {
        display: table-cell;
        vertical-align: middle;
    }

    .h-c-header__initiative-logo-text {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        color: #5f6368;
        font-family: "Product Sans", Arial, Helvetica, sans-serif;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
    }

    .h-c-header__drawer-initiative-logo {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        clear: left;
        display: table;
        float: left;
        height: 50%;
        margin-left: 16px;
    }

    .h-c-header__drawer-initiative-logo-link {
        display: table-cell;
        padding-top: 2px;
        vertical-align: middle;
    }

    .h-c-header__drawer-initiative-logo-text {
        color: #5f6368;
        font-family: "Product Sans", Arial, Helvetica, sans-serif;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
    }

    .h-c-header__drawer-nav-li-link.h-is-active {
        background: #f1f3f4;
    }

    .h-c-header__drawer-nav-li-link.h-is-active {
        color: #000;
    }


</style>