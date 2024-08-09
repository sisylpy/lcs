<template>
    <section class="gmp-section gmp-mb-l">
        <div class="two-column-tout">
            <div class="h-c-page">

                <div class="h-c-grid">
                    <div class="h-c-grid__col h-c-grid__col-xl--offset-1 h-c-grid__col-l--6
            h-c-grid__col-xl--5  h-c-grid__col--align-middle
            two-column-tout__content">
                        <h3 class="h-c-headline h-c-headline--one">
                            EO_twoTout连锁企业成本管理
                        </h3>
                        <div class="h-u-mb-std two-column-tout__description">
<!--                            <p>门店 库房 采购部门岗位小程序.</p>-->
                            <p class="">适合管理模式简单的企业，配置企业采购商品目录，5分钟后就可以订货下单，使每一位员工轻松玩转每日工作。</p>
                        </div>
                        <a  @click="toLevelType('/enterprise','总部管理端')"   class="h-c-link h-c-link--internal gmp-link">查看连锁企业成本管理解决方案</a>
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
        name: "EO_twoTout",
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
