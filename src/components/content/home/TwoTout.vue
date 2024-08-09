<template>
    <section class="gmp-section gmp-mb-l">
        <div class="two-column-tout">
            <div class="h-c-page">

                <div class="h-c-grid">
                    <div class="h-c-grid__col h-c-grid__col-xl--offset-1 h-c-grid__col-l--6
            h-c-grid__col-xl--5  h-c-grid__col--align-middle
            two-column-tout__content">
                        <h3 class="h-c-headline h-c-headline--one">
                            原料实时监控 精准管理
                        </h3>
                        <div class="h-u-mb-std two-column-tout__description">
<!--                            <p>门店 库房 采购部门岗位小程序.</p>-->
<!--                            <p class="">从原料采购到入库和制作，每个环节监控原料的成本与支出，使企业从缓慢的生存阶段步入发展阶段。</p>-->
                            <p class="">管理者可以随时查看库存情况，掌握原料的使用状态、剩余数量，以及新鲜度等关键信息，从而确保厨房的运营井然有序。能够对原料的采购、存储、使用等各环节进行精准的管理。通过数据驱动的方式，管理者可以根据实际需求进行补货，避免过多采购或浪费，并且优化库存周转率，从而提升整体经营效率。</p>
<!--                            <p class="">。</p>-->

                        </div>
                        <a  @click="toLevelType('/enterprise','总部管理端')"  class="h-c-link h-c-link--internal gmp-link">餐饮业、窗口售卖、中央厨房加工配送</a>
                    </div>

                    <div class="h-c-grid__col
          h-c-grid__col-l--6  h-c-grid__col--align-middle">
                        <div class="two-column-tout__image text-center">
                            <picture>
                                <img src="@/assets/img/sxgl.png" alt="" class="gmp-no-grab ">
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
        name: "TwoTout",
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