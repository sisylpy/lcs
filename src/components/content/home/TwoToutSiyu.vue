<template>
    <section class="gmp-section gmp-mb-l">
        <div class="two-column-tout">
            <div class="h-c-page">

                <div class="h-c-grid">
                    <div class="h-c-grid__col h-c-grid__col-xl--offset-1 h-c-grid__col-l--6
            h-c-grid__col-xl--5  h-c-grid__col--align-middle
            two-column-tout__content">
                        <h3 class="h-c-headline h-c-headline--one">
                            私域会员
                        </h3>
                        <div class="h-u-mb-std two-column-tout__description">
                            <p class="">解决小客户的会员管理能力差和内容运营能力薄弱的问题，通过丰富的优惠券和会员卡活动，企业可以轻松开展各种促销活动，吸引更多新用户，并保持老用户的活跃度。这种灵活的营销工具，帮助企业更好地开展市场推广。直接在微信内与客户沟通，无需通过第三方平台再次付费进行广告投放。</p>

                        </div>
                        <a  @click="toLevelType('/enterprise','总部管理端')"  class="h-c-link h-c-link--internal gmp-link">下单拼单</a>
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