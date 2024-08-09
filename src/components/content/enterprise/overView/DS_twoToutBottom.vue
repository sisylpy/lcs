<template>
    <section class="gmp-section gmp-mb-l">
        <div class="two-column-tout">
            <div class="h-c-page">

                <div class="h-c-grid">
                    <div class="h-c-grid__col h-c-grid__col-xl--offset-1 h-c-grid__col-l--6
            h-c-grid__col-xl--5  h-c-grid__col--align-middle
            two-column-tout__content">
                        <h3 class="h-c-headline h-c-headline--one">
                            Mumzworld reaches a 300% return on ad spend with Google Analytics.
                        </h3>
                        <div class="h-u-mb-std two-column-tout__description">
                            <p>Mumzworld used Analytics to gain insight into their return on advertising investment and make sense of their retail data to improve product availability. The result was a 300% return on ad spend.</p>
                        </div>
                        <a  @click="toLevelType('/enterprise','总部管理端')" class="h-c-link h-c-link--internal gmp-link">查看连锁企业成本管理解决方案</a>
                    </div>

                    <div class="h-c-grid__col
          h-c-grid__col-l--6  h-c-grid__col--align-middle">
                        <div class="two-column-tout__image text-center">
                            <picture>
                                <img src="@/assets/img/right.png" alt="" class="gmp-no-grab ">
                            </picture>
                        </div>
                    </div>

                </div>
            </div>


        </div>

    </section>
</template>

<script>
    export default {
        name: "EO_twoToutBottom",
        methods:{
            toLevelType(data){
                this.$router.push(data)
                this.isShowDrawer = false;
                this.$('body').removeClass('h-is-showing-drawer');

            },
        }
    }
</script>

<style lang="less">


</style>