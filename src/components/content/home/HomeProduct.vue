<template>
    <section class="gmp-section gmp-mb-xl">
        <div class="gmp-section-header ">
            <div class="h-c-page">
                <div class="h-c-grid">
                    <div class="h-c-grid__col">
                        <h3 class="h-c-headline h-c-headline--one gmp-section-header--center">
                            提供了一个全面、集成和自动化的解决方案
                        </h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="h-c-page">
            <div class="product-tout product-tout--narrow">
                <div class="product-tout__content">

                    <div class="product-tout__icon">
                        <picture>
                            <img src="@/assets/img/4a.png" alt="" class="">
                        </picture>
                    </div>
                    <div class="product-tout__copy">
                        <h4 class="h-c-headline product-tout__headline">
                            直营连锁餐饮公司
                        </h4>
                        <p class="h-c-headline h-c-headline--four">
                            确保各门店的操作一致性，提高整个连锁的管理效率。
                        </p>
                    </div>
                    <div class="product-tout__link">
                        <a @click="toLevelOne('/enterprise/directStore','餐饮直营连锁')" class="h-c-link h-c-link--internal gmp-link">
                            查看更多直营连锁餐饮
                        </a>
                    </div>
                </div>

                <div class="product-tout__image">
                    <img src="@/assets/img/zhiyingMain.png" alt="" class="gmp-no-grab ">
                </div>
            </div>
        </div>

        <div class="product-card-grid">
            <div class="h-c-page">
                <div class="glue-pagination h-c-carousel h-c-carousel--tile h-c-carousel--tile-small-only h-u-mt-std ng-isolate-scope glue-o-pagination">
                    <div class="h-c-carousel__wrap product-card-grid__wrap--narrow ng-scope">
                        <ul class="glue-carousel" id="proUl" style="width: auto;">
                            <li class="h-c-carousel__item product-card product-card--hide-for-large">
                                <a @click="toLevelOne('/enterprise/directStore','餐饮直营连锁')"  class="h-c-tile h-c-tile--border h-c-tile--hoverable h-c-tile--small-height">
                                    <div class="h-c-tile__header h-c-tile__header--icon product-card__header">
                                        <picture>
                                            <img src="@/assets/img/a-bianzu6.png" alt=""
                                                 class="gmp-product-icon gmp-product-icon--fixed">
                                        </picture>
                                    </div>

                                    <div class="h-c-tile__body">
                                        <h4 class="h-c-tile__headline product-card__headline">
                                            直营连锁餐饮公司
                                        </h4>
                                        <p class="h-c-tile__description">
                                            确保各门店的操作一致性，提高整个连锁的管理效率.
                                        </p>

                                        <ul class="h-c-tile__links">
                                            <li class="h-c-tile__link">
                                                <img src="@/assets/img/menu.png" alt=""
                                                     class="h-c-tile__link h-c-tile__link--arrow">
                                            </li>
                                        </ul>
                                    </div>

                                </a>
                            </li>
                            <li class="h-c-carousel__item product-card ">
                                <a @click="toLevelOne('/enterprise/franchiseStore','加盟连锁企业')"  class="h-c-tile h-c-tile--border h-c-tile--hoverable h-c-tile--small-height">
                                    <div class="h-c-tile__header h-c-tile__header--icon product-card__header">
                                        <picture>
                                            <img src="@/assets/img/a-bianzu48.png" alt=""
                                                 class="gmp-product-icon gmp-product-icon--fixed">
                                        </picture>
                                    </div>

                                    <div class="h-c-tile__body">
                                        <h4 class="h-c-tile__headline product-card__headline">
                                            加盟连锁企业
                                        </h4>
                                        <p class="h-c-tile__description">
                                            帮助加盟者轻松遵循品牌标准，同时能够根据各自市场的需求进行适当调整.
                                        </p>

                                        <ul class="h-c-tile__links">
                                            <li class="h-c-tile__link">
                                                <img src="@/assets/img/menu.png" alt=""
                                                     class="h-c-tile__link h-c-tile__link--arrow">
                                            </li>
                                        </ul>
                                    </div>
                                </a>
                            </li>

                            <li class="h-c-carousel__item product-card ">
                                <a @click="toLevelOne('/enterprise/windowStore','食品售卖窗口')"  class="h-c-tile h-c-tile--border h-c-tile--hoverable h-c-tile--small-height">
                                    <div class="h-c-tile__header h-c-tile__header--icon product-card__header">
                                        <picture>
                                            <img src="@/assets/img/a-bianzu48.png" alt=""
                                                 class="gmp-product-icon gmp-product-icon--fixed">
                                        </picture>
                                    </div>

                                    <div class="h-c-tile__body">
                                        <h4 class="h-c-tile__headline product-card__headline">
                                            食品售卖窗口
                                        </h4>
                                        <p class="h-c-tile__description">
                                            集中进行采购的部门员工完成每日原料的订货，采购和配送任务.
                                        </p>

                                        <ul class="h-c-tile__links">
                                            <li class="h-c-tile__link">
                                                <img src="@/assets/img/menu.png" alt=""
                                                     class="h-c-tile__link h-c-tile__link--arrow">
                                            </li>
                                        </ul>
                                    </div>
                                </a>
                            </li>

                            <li class="h-c-carousel__item product-card ">
                                <a @click="toLevelOne('/enterprise/centralKitchen','中央厨房配送')"  class="h-c-tile h-c-tile--border h-c-tile--hoverable h-c-tile--small-height">
                                    <div class="h-c-tile__header h-c-tile__header--icon product-card__header">
                                        <picture>
                                            <img src="@/assets/img/20a.png" alt=""
                                                 class="gmp-product-icon gmp-product-icon--fixed">
                                        </picture>
                                    </div>

                                    <div class="h-c-tile__body">
                                        <h4 class="h-c-tile__headline product-card__headline">
                                           中央厨房配送
                                        </h4>
                                        <p class="h-c-tile__description">
                                            连锁门店经理对下面部门对订货和库存成本.
                                        </p>
                                        <ul class="h-c-tile__links">
                                            <li class="h-c-tile__link">
                                                <img src="@/assets/img/menu.png" alt=""
                                                     class="h-c-tile__link h-c-tile__link--arrow">
                                            </li>
                                        </ul>
                                    </div>
                                </a>
                            </li>
                            <li class="h-c-carousel__item product-card ">
                                <a @click="toLevelOne('/enterprise/windowStore','私域会员下单')"  class="h-c-tile h-c-tile--border h-c-tile--hoverable h-c-tile--small-height">
                                    <div class="h-c-tile__header h-c-tile__header--icon product-card__header">
                                        <picture>
                                            <img src="@/assets/img/28a.png" alt=""
                                                 class="gmp-product-icon gmp-product-icon--fixed">
                                        </picture>
                                    </div>

                                    <div class="h-c-tile__body">
                                        <h4 class="h-c-tile__headline product-card__headline">
                                            私域会员下单
                                        </h4>
                                        <p class="h-c-tile__description">
                                            门店负责订货员工只需花几分钟就可以完成第二天订货工作.
                                        </p>

                                        <ul class="h-c-tile__links">
                                            <li class="h-c-tile__link">
                                                <img src="@/assets/img/menu.png" alt=""
                                                     class="h-c-tile__link h-c-tile__link--arrow">
                                            </li>
                                        </ul>
                                    </div>
                                </a>
                            </li>

                            <li class="h-c-carousel__item product-card ">
                                <a href="/" class="h-c-tile h-c-tile--border h-c-tile--hoverable h-c-tile--small-height">
                                    <div class="h-c-tile__header h-c-tile__header--icon product-card__header">
                                        <picture>
                                            <img src="@/assets/img/29a.png" alt=""
                                                 class="gmp-product-icon gmp-product-icon--fixed">
                                        </picture>
                                    </div>

                                    <div class="h-c-tile__body">
                                        <h4 class="h-c-tile__headline product-card__headline">
                                           批发市场专业配送商
                                        </h4>
                                        <p class="h-c-tile__description">
                                            库房商品管理，建立货架商品，库存和出库任务点击即可完成。
                                        </p>

                                        <ul class="h-c-tile__links">
                                            <li class="h-c-tile__link">
                                                <img src="@/assets/img/menu.png" alt=""
                                                     class="h-c-tile__link h-c-tile__link--arrow">
                                            </li>
                                        </ul>
                                    </div>
                                </a>
                            </li>
                            <li class="h-c-carousel__item product-card ">
                                <a href="/" class="h-c-tile h-c-tile--border h-c-tile--hoverable h-c-tile--small-height">
                                    <div class="h-c-tile__header h-c-tile__header--icon product-card__header">
                                        <picture>
                                            <img src="@/assets/img/3a.png" alt=""
                                                 class="gmp-product-icon gmp-product-icon--fixed">
                                        </picture>
                                    </div>

                                    <div class="h-c-tile__body">
                                        <h4 class="h-c-tile__headline product-card__headline">
                                           专类商品配送
                                        </h4>
                                        <p class="h-c-tile__description">
                                            生鲜配送商用一步手机即可完成客户的订货、称重、送货、结账等工作.
                                        </p>

                                        <ul class="h-c-tile__links">
                                            <li class="h-c-tile__link">
                                                <img src="@/assets/img/menu.png" alt=""
                                                     class="h-c-tile__link h-c-tile__link--arrow">
                                            </li>
                                        </ul>
                                    </div>

                                </a>
                            </li>
                            <li class="h-c-carousel__item product-card ">
                                <a href="/" class="h-c-tile h-c-tile--border h-c-tile--hoverable h-c-tile--small-height">
                                    <div class="h-c-tile__header h-c-tile__header--icon product-card__header">
                                        <picture>
                                            <img src="@/assets/img/2a.png" alt=""
                                                 class="gmp-product-icon gmp-product-icon--fixed">
                                        </picture>
                                    </div>

                                    <div class="h-c-tile__body">
                                        <h4 class="h-c-tile__headline product-card__headline">
                                           生鲜配送平台
                                        </h4>
                                        <p class="h-c-tile__description">
                                            大配送量的数据可通过pc端更强大的功能完成.
                                        </p>

                                        <ul class="h-c-tile__links">
                                            <li class="h-c-tile__link">
                                                <img src="@/assets/img/menu.png" alt=""
                                                     class="h-c-tile__link h-c-tile__link--arrow">

                                            </li>

                                        </ul>

                                    </div>

                                </a>
                            </li>


                            <div style="clear:both;"></div>
                        </ul>

                    </div>

                    <div class="h-c-carousel__navigation product-card-grid__navigation ng-scope">
                        <ul class="glue-pagination-page-list ng-isolate-scope glue-o-pagination__page-list">
                            <li :class="{active:0 === activeIndex}"
                                class=" glue-o-pagination__button-container  glue-o-pagination__page-list-button-container ng-scope "
                                @click="showIndex(0)">
                                <button class="glue-o-pagination__button glue-o-pagination__page-list-button ng-binding ng-scope"></button>
                            </li>
                            <li :class="{active:1 === activeIndex}"
                                class="glue-o-pagination__button-container glue-o-pagination__page-list-button-container ng-scope"
                                @click="showIndex(1)">
                                <button class="glue-o-pagination__button glue-o-pagination__page-list-button ng-binding ng-scope"></button>
                            </li>
                            <li :class="{active:2 === activeIndex}"
                                class="glue-o-pagination__button-container glue-o-pagination__page-list-button-container ng-scope"
                                @click="showIndex(2)">
                                <button class="glue-o-pagination__button glue-o-pagination__page-list-button ng-binding ng-scope"
                                        ></button>
                            </li>
                            <li :class="{active:3 === activeIndex}"
                                class="glue-o-pagination__button-container glue-o-pagination__page-list-button-container ng-scope"
                                @click="showIndex(3)">
                                <button class="glue-o-pagination__button glue-o-pagination__page-list-button ng-binding ng-scope"
                                        ></button>
                            </li>
                            <li :class="{active:4 === activeIndex}"
                                class="glue-o-pagination__button-container glue-o-pagination__page-list-button-container ng-scope"
                                @click="showIndex(4)">
                                <button class="glue-o-pagination__button glue-o-pagination__page-list-button ng-binding ng-scope"
                                        ></button>
                            </li>
                            <li :class="{active:5 === activeIndex}"
                                class="glue-o-pagination__button-container glue-o-pagination__page-list-button-container ng-scope"
                                @click="showIndex(5)">
                                <button class="glue-o-pagination__button glue-o-pagination__page-list-button ng-binding ng-scope"
                                       ></button>
                            </li>
                            <li :class="{active:6 === activeIndex}"
                                class="glue-o-pagination__button-container glue-o-pagination__page-list-button-container ng-scope"
                                @click="showIndex(6)">
                                <button class="glue-o-pagination__button glue-o-pagination__page-list-button ng-binding ng-scope"
                                        ></button>
                            </li>
                            <li :class="{active:7 === activeIndex}"
                                class="glue-o-pagination__button-container glue-o-pagination__page-list-button-container ng-scope"
                                @click="showIndex(7)">
                                <button class="glue-o-pagination__button glue-o-pagination__page-list-button ng-binding ng-scope"
                                        ></button>
                            </li>

                            <div style="clear:both;"></div>

                        </ul>

                    </div>

                </div>


            </div>
        </div>

    </section>
</template>

<script>
    export default {
        name: "HomeProduct",
        props:['clientWidth'],
        data() {
            return {
                activeIndex: 0,
            }
        },
        mounted() {


        },

        watch: {
            clientWidth: function (val) {
                // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
                this.clientWidth = val
                this.changeFixed(this.clientWidth)
            },


        },
        methods: {
            showIndex(data) {
                var itemWidth = this.$('.h-c-carousel__item').width();
                var moveWidth = "";

                moveWidth = - + data  * itemWidth ;
                moveWidth = Number(moveWidth) + Number(40 );
                if(data === 0){
                    moveWidth = 139
                }

                this.$('#proUl').css({
                    "transform": "translate3d(" + moveWidth + "px, 0px, 0px)",
                    "transition": "transform .4s"
                })

                this.activeIndex = data;
            },

            changeFixed(data) {
                console.log("changefiexe" + data)
                if (data < 601) {
                    var how = this.$('.h-c-carousel__item').width() * 8 + 160;
                    console.log("xiaoyu 600");

                    this.$('#proUl').css({
                        'width': how + 'px',
                        "transform": "translate3d(139px, 0px,0px)",
                        "transition": "transform .4s, background .4s"
                    })
                }else{
                    console.log(">>>>>> 600");

                    this.$('#proUl').css({
                        'width': "auto",
                        "transform": "translate3d(0px, 0px,0px)",
                        "transition": "transform .4s, background .4s"
                    })
                }
            },


            toLevelOne(data, hanzi) {
                console.log("data=====", data, "hanzi", hanzi);
                this.$router.push(data)
                this.isShowDrawer = false;
                this.$('body').removeClass('h-is-showing-drawer');

                this.$('.h-c-header__drawer-nav-list').remove()
                this.$('.h-c-header').addClass('h-c-header--product-initiative').removeClass('h-c-header--product-marketing-one-tier');

                var hasAdd = this.$('.h-c-header__initiative-logo');
                if (hasAdd.length === 0) {
                    var data1 = `<div class="h-c-header__initiative-logo">
                                    <a   class="h-c-header__initiative-logo-link">
                                        <span class="h-c-header__initiative-logo-text">`+ hanzi +`</span>
                                    </a>
                                 </div>`
                    this.$('.h-c-header__bar').append(data1);

                    var data2 = `<div class="h-c-header__drawer-initiative-logo">
                                     <div class="h-c-header__drawer-initiative-logo-link">
                                        <span class="h-c-header__drawer-initiative-logo-text">`+ hanzi +`</span>
                                     </div>
                                 </div>`;
                    this.$('.h-c-header__drawer-bar').append(data2)
                }


                var data3 = `<ul class="h-c-header__drawer-nav-list">
                                <li class="h-c-header__drawer-nav-li">
                                    <a  class="h-c-header__drawer-nav-li-link h-is-active " to-where="`+data+`">概览</a>
                                </li>
                                <li class="h-c-header__drawer-nav-li">
                                    <a  class="h-c-header__drawer-nav-li-link "  to-where="`+ data +`/DS_Benefit">好处</a>
                                </li>
                                <li class="h-c-header__drawer-nav-li">
                                    <a  class="h-c-header__drawer-nav-li-link"  to-where="`+ data +`/special">特点</a>
                                </li>
                              </ul>`;
                this.$('.h-c-header__drawer-nav').append(data3)


                let that = this;
                var x = document.querySelectorAll('.h-c-header__drawer-nav-li-link');
                for (var i = 0; i < x.length; i++) {
                    x[i].addEventListener('click', function () {
                        that.toEnterprisePage(this.getAttribute('to-where'))
                    })
                }
            },
            toEnterprisePage(data){
                this.$router.push(data)
                this.$('body').removeClass('h-is-showing-drawer');
                var lis = this.$('.h-c-header__drawer-nav-li-link');
                for(var i = 0;i < lis.length; i ++){
                    var toWhere = this.$(lis[i]).attr('to-where');
                    console.log("toWhere===" + toWhere);
                    if(toWhere === data){
                        this.$(lis[i]).addClass('h-is-active');
                    }else {
                        this.$(lis[i]).removeClass('h-is-active')
                    }
                }
            },



        }
    }
</script>

<style lang="less">




</style>