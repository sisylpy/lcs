<template>
    <section class="gmp-section gmp-mb-l">

        <div class="gmp-section-header">
            <div class="h-c-page">
                <div class="h-c-grid">
                    <div class="h-c-grid__col">
                        <h3 class="h-c-headline h-c-headline--one h-has-bottom-margin gmp-section-header--center">
                            精彩案例.
                        </h3>
                        <p class=" gmp-section-header--center">
                            使用过粒子产品的客户，有更多兴奋的经历可以和大家分享.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="resource-card-grid">
            <div class="h-c-page">
                <div class="glue-pagination h-c-carousel h-c-carousel--tile h-c-carousel--tile-small-only h-u-mt-std ng-isolate-scope glue-o-pagination">
                    <div class="h-c-carousel__wrap  ng-scope">
                        <ul class="resource-card-set glue-carousel"  style="width: auto;" id="resourceUl">
                            <li class="h-c-carousel__item resource-card">
                                <a href="/" class="h-c-tile h-c-tile--border h-c-tile--hoverable">
                                    <div class="h-c-tile__header">
                                        <img src="@/assets/img/resourse1.png" alt="" class="gmp-no-grab resource-card__image">
                                    </div>
                                    <div class="h-c-tile__body">
                                        <div class="h-c-eyebrow resource-card__eyebrow">
                                            7家连锁餐饮店
                                        </div>
                                        <h3 class="h-c-tile__headline">江户前寿司使用手机订货系统和ipad库房管理系统，使会计部门减少了3个成本核算岗位的工作.</h3>
                                        <ul class="h-c-tile__links resource-card__links">
                                            <li class="h-c-tile__link h-c-link gmp-link resource-card__link">
                                                查看更多
                                            </li>
                                        </ul>
                                    </div>
                                </a>

                            </li>
                            <li class="h-c-carousel__item resource-card">
                                <a href="/" class="h-c-tile h-c-tile--border h-c-tile--hoverable">
                                    <div class="h-c-tile__header">
                                        <img src="@/assets/img/bottom2.png" alt="" class="gmp-no-grab resource-card__image">
                                    </div>
                                    <div class="h-c-tile__body">
                                        <div class="h-c-eyebrow resource-card__eyebrow">
                                            零售和配送
                                        </div>
                                        <h3 class="h-c-tile__headline">长江蔬菜配送使用粒子特鲜送小程序，轻松完成每日20家客户的订货和配送工作.</h3>
                                        <ul class="h-c-tile__links resource-card__links">
                                            <li class="h-c-tile__link h-c-link gmp-link resource-card__link">
                                                查看更多
                                            </li>
                                        </ul>
                                    </div>
                                </a>

                            </li>
                            <li class="h-c-carousel__item resource-card">
                                <a href="/" class="h-c-tile h-c-tile--border h-c-tile--hoverable">
                                    <div class="h-c-tile__header">
                                        <img src="@/assets/img/person2.png" alt="" class="gmp-no-grab resource-card__image">
                                    </div>
                                    <div class="h-c-tile__body">
                                        <div class="h-c-eyebrow resource-card__eyebrow">
                                            海鲜订货
                                        </div>
                                        <h3 class="h-c-tile__headline">8号虾馆完成每日最早在海鲜市场的订货和采购工作.</h3>
                                        <ul class="h-c-tile__links resource-card__links">
                                            <li class="h-c-tile__link h-c-link gmp-link resource-card__link">
                                                查看更多
                                            </li>
                                        </ul>
                                    </div>
                                </a>

                            </li>
                            <div style="clear:both;"></div>


                        </ul>

                    </div>

                    <div class="h-c-carousel__navigation resource-card-grid__navigation ng-scope">
                        <ul class="glue-pagination-page-list ng-isolate-scope glue-o-pagination__page-list" role="tablist">
                            <li :class="{active:1 === activeIndex}"
                                class=" glue-o-pagination__button-container  glue-o-pagination__page-list-button-container ng-scope "
                                @click="showIndex(0)">
                                <button class="glue-o-pagination__button glue-o-pagination__page-list-button ng-binding ng-scope"></button>
                            </li>
                            <li :class="{active:2 === activeIndex}"
                                class="glue-o-pagination__button-container glue-o-pagination__page-list-button-container ng-scope"
                                @click="showIndex(1)">
                                <button class="glue-o-pagination__button glue-o-pagination__page-list-button ng-binding ng-scope"></button>
                            </li>
                            <li :class="{active:3 === activeIndex}"
                                class="glue-o-pagination__button-container glue-o-pagination__page-list-button-container ng-scope"
                                @click="showIndex(2)">
                                <button class="glue-o-pagination__button glue-o-pagination__page-list-button ng-binding ng-scope"
                                ></button>
                            </li>
                            <div style="clear:both;"></div>



                        </ul>

                    </div>
                </div>

                <div class="resource-card-grid__bottom-link">
                    <a href="/" class="h-c-link h-c-link--internal gmp-link">
                        See all resources
                    </a>
                </div>





            </div>

        </div>

    </section>
</template>

<script>
    export default {
        name: "HomeResourceCard",
        props:['clientWidth'],
        data() {
            return {
                activeIndex: 1,
            }
        },

        watch: {
            clientWidth: function (val) {
                this.clientWidth = val;
                this.changeFixed(this.clientWidth)
            },

        },
        methods: {
            showIndex(data) {
                var itemWidth = this.$('.resource-card').width();
                var moveWidth = "";

                moveWidth = - + data  * itemWidth ;
                moveWidth = Number(moveWidth) + Number(40 );
                if(data === 0){
                    moveWidth = 139
                }

                this.$('#resourceUl').css({
                    "transform": "translate3d(" + moveWidth + "px, 0px, 0px)",
                    "transition": "transform .4s"
                })

                this.activeIndex = data + 1;
            },
            changeFixed(data) {
                if (data < 601) {
                    var how = this.$('.resource-card').width() * 8 + 160;
                    this.$('#resourceUl').css({
                        'width': how + 'px',
                        "transform": "translate3d(139px, 0px,0px)",
                        "transition": "transform .4s, background .4s"
                    })
                }else{
                    this.$('#resourceUl').css({
                        'width': "auto",
                        "transform": "translate3d(0px, 0px,0px)",
                        "transition": "transform .4s, background .4s"
                    })
                }
            },
        }
    }
</script>

<style lang="less">


</style>