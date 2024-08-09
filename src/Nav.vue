<template>
    <div class="hercules-header h-c-header  gmp-header h-c-header--product-marketing-one-tier">

        <div class="h-c-header__bar">
            <div class="h-c-header__hamburger h-c-header__hamburger--first-tier"
                 :class="menuLevel === 1 ? 'h-is-active' : ''">
                <div class="h-c-header__hamburger-wrapper">
                    <button type="button" @click="showDrawer"
                            class="h-js-header__hamburger-link h-c-header__hamburger-link">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" class="h-c-header__hamburger-img
            h-c-header__hamburger-img--standard">
                            <rect x="0" y="5" width="24" height="1"
                                  style="fill:#5f6368;stroke-width:1;stroke:#5f6368"/>
                            <rect x="0" y="11" width="24" height="1"
                                  style="fill:#5f6368;stroke-width:1;stroke:#5f6368"/>
                            <rect x="0" y="17" width="24" height="1"
                                  style="fill:#5f6368;stroke-width:1;stroke:#5f6368"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div class="h-c-header__lockup">
                <div class="h-c-header__company-logo">
                    <a href="/" class="h-c-header__company-logo-link">
                        <span class="blue one">粒</span>
                        <span class="blue two">子</span>
                        <span class="blue three">联</span>
                        <span class="blue four">采</span>
                    </a>
                </div>
                <div class="h-c-header__product-logo">
                    <a href="/" class="h-c-header__product-logo-link">
                        <span class="h-c-header__product-logo-text gmp-logo-text">小程序集合</span>
                    </a>
                </div>
            </div>
            <div class="h-c-header__hamburger h-c-header__hamburger--second-tier">
                <div class="h-c-header__hamburger-wrapper">
                    <button type="button" @click="showDrawer"
                            class="h-js-header__hamburger-link h-c-header__hamburger-link">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" class="h-c-header__hamburger-img
            h-c-header__hamburger-img--standard">
                            <rect x="0" y="5" width="24" height="1"
                                  style="fill:#5f6368;stroke-width:1;stroke:#5f6368"/>
                            <rect x="0" y="11" width="24" height="1"
                                  style="fill:#5f6368;stroke-width:1;stroke:#5f6368"/>
                            <rect x="0" y="17" width="24" height="1"
                                  style="fill:#5f6368;stroke-width:1;stroke:#5f6368"/>
                        </svg>
                    </button>
                </div>

            </div>

        </div>

        <div id="h-js-header__drawer" class="h-c-header__drawer" :class="isShowDrawer ? 'h-is-visible' : ''"
             role="navigation">

            <div class="h-c-header__drawer-content">
                <div class="h-c-header__drawer-bar h-c-header__drawer-bar--inline">
                    <div class="h-c-header__drawer-lockup">
                        <div class="h-c-header__drawer-company-logo">
                            <div class="h-c-header__drawer-company-logo-link">
                                <a href="/" class="">
                                    <span class="blue one">粒</span>
                                    <span class="blue two">子</span>
                                    <span class="blue three">联</span>
                                    <span class="blue four">采</span>
                                </a>
                            </div>
                        </div>

                        <div class="h-c-header__drawer-product-logo">
                            <div class="h-c-header__drawer-product-logo-link">
                                <span class="h-c-header__drawer-product-logo-text h-c-header__drawer-product-logo-text--gmp">
                                    <a href="/" class="h-c-header__product-logo-link">
                                        <span class="h-c-header__product-logo-text gmp-logo-text">
                                            小程序集合
                                        </span>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <nav class="h-c-header__drawer-nav">
                    <ul class="h-c-header__drawer-nav-list">
                        <!--  for university supermarket -->
                        <li class="h-c-header__drawer-nav-li">
                            <a  @click="toLevelType('/enterprise','总部管理端')"    class="h-c-header__drawer-nav-li-link">
                                私域会员
                            </a>
                            <ul class="h-c-header__drawer-nested-nav-list">
                                <li class="h-c-header__drawer-nested-nav-li">
                                    <a @click="toLevelOne('/enterprise/office','总部管理端')" class="h-c-header__drawer-nested-nav-li-link">
                                        下单拼单小程序
                                    </a>
                                </li>

                            </ul>
                        </li>

                        <!--  for small business  -->
                        <li class="h-c-header__drawer-nav-li">
                            <a  @click="toLevelType('/enterprise','总部管理端')"    class="h-c-header__drawer-nav-li-link">
                                时鲜管理
                            </a>
                            <ul class="h-c-header__drawer-nested-nav-list">
                                <li class="h-c-header__drawer-nested-nav-li">
                                    <a @click="toLevelOne('/enterprise/directStore','餐饮直营连锁')" class="h-c-header__drawer-nested-nav-li-link">
                                        餐饮直营连锁
                                    </a>
                                </li>
                                <li class="h-c-header__drawer-nested-nav-li">
                                    <a @click="toLevelOne('/enterprise/franchiseStore','餐饮加盟连锁')"
                                       class="h-c-header__drawer-nested-nav-li-link">
                                        餐饮加盟连锁
                                    </a>
                                </li>
                                <li class="h-c-header__drawer-nested-nav-li">
                                    <a @click="toLevelOne('/enterprise/windowStore','食品售卖窗口')" class="h-c-header__drawer-nested-nav-li-link">
                                        食品售卖窗口
                                    </a>
                                </li>
                                <li class="h-c-header__drawer-nested-nav-li">
                                    <a @click="toLevelOne('/enterprise/centralKitchen','中央厨房配送')" class="h-c-header__drawer-nested-nav-li-link">
                                        中央厨房配送
                                    </a>
                                </li>
<!--                                <li class="h-c-header__drawer-nested-nav-li">-->
<!--                                    <a @click="toLevelOne('order','门店订货端')" class="h-c-header__drawer-nested-nav-li-link">-->
<!--                                        门店订货端-->
<!--                                    </a>-->
<!--                                </li>-->
                            </ul>
                        </li>

                        <!--  for enterprises  -->
                        <li class="h-c-header__drawer-nav-li">
                            <a href="/" class="h-c-header__drawer-nav-li-link">
                                生鲜批发配送
                            </a>
                            <ul class="h-c-header__drawer-nested-nav-list">

                                <li class="h-c-header__drawer-nested-nav-li">
                                    <a href="/" class="h-c-header__drawer-nested-nav-li-link">
                                        批发市场专业配送商
                                    </a>
                                </li>
                                <li class="h-c-header__drawer-nested-nav-li">
                                    <a href="/" class="h-c-header__drawer-nested-nav-li-link">
                                        专类商品配送
                                    </a>
                                </li>
                                <li class="h-c-header__drawer-nested-nav-li">
                                    <a href="/" class="h-c-header__drawer-nested-nav-li-link">
                                        生鲜配送平台
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <!--                         source   -->
<!--                        <li class="h-c-header__drawer-nav-li">-->
<!--                            <a href="/" class="h-c-header__drawer-nav-li-link">-->
<!--                                社区超市生鲜店铺配送方案-->
<!--                            </a>-->
<!--                            <ul class="h-c-header__drawer-nested-nav-list">-->
<!--                                <li class="h-c-header__drawer-nested-nav-li">-->
<!--                                    <a href="/" class="h-c-header__drawer-nested-nav-li-link">-->
<!--                                        适合业务-->
<!--                                    </a>-->
<!--                                </li>-->
<!--                                <li class="h-c-header__drawer-nested-nav-li">-->
<!--                                    <a href="/" class="h-c-header__drawer-nested-nav-li-link">-->
<!--                                        特点-->
<!--                                    </a>-->
<!--                                </li>-->
<!--                                <li class="h-c-header__drawer-nested-nav-li">-->
<!--                                    <a href="/" class="h-c-header__drawer-nested-nav-li-link">-->
<!--                                        如何开始-->
<!--                                    </a>-->
<!--                                </li>-->
<!--                            </ul>-->
<!--                        </li>-->

                        <!--                        Blog -->
                        <li class="h-c-header__drawer-nav-li">
                            <a href="/" class="h-c-header__drawer-nav-li-link">
                                Blog
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>

            <div class="h-c-header__drawer-cta">
                <ul class="h-c-header__drawer-cta-list">
                    <li class="h-c-header__drawer-cta-li h-c-header__drawer-cta-li--secondary">
                        <a href="/" class="h-c-header__drawer-cta-li-link h-c-header__drawer-cta-li-link--secondary">
                            Partners
                        </a>
                    </li>
                    <li class="h-c-header__drawer-cta-li h-c-header__drawer-cta-li--secondary">
                        <a href="/" class="h-c-header__drawer-cta-li-link h-c-header__drawer-cta-li-link--secondary">
                            Support
                        </a>
                    </li>

                </ul>

            </div>

        </div>

        <div id="h-js-header__drawer-backdrop" @click="hideMask" class="h-c-header__drawer-backdrop"
        ></div>


    </div>

</template>

<script>
    export default {
        name: "Nav",
        data() {
            return {
                menuLevel: 1,
                isShowDrawer: false,

            }
        },

        methods: {

            toLevelType(data){
                this.$router.push(data)
                this.isShowDrawer = false;
                this.$('body').removeClass('h-is-showing-drawer');

            },
            toLevelOne(data, hanzi) {
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

            hideMask() {
                this.isShowDrawer = false;
                this.$('body').removeClass('h-is-showing-drawer');
            },
            showDrawer() {
                this.isShowDrawer = true;
                this.$('body').addClass('h-is-showing-drawer');
            },


        },

    }
</script>

<style lang="less">
    @import "../myless/variables";

    .blue {
        font-family: "Product Sans", Arial, Helvetica, sans-serif;
        font-size: 22px;
        font-style: normal;
        font-weight: 500;
    }

    .one {
        color: #1a73e8;
    }

    .two {
        color: indianred;
    }

    .three {
        color: #34a853;
    }

    .four {
        color: #fbbc04;
    }


    .h-c-header.h-c-header--product-initiative {
        height: 112px;
    }

    .h-c-header--product-initiative .h-c-header__bar {
        height: 112px;
    }

    .h-c-header.h-c-header--product-marketing-one-tier {
        height: 56px;

        .h-c-header__bar {
            height: 56px;

            .h-c-header__lockup {
                margin-left: 14px;
                height: 100%;
            }
        }
    }


    /* 头部 */
    .h-c-header {
        transition-property: height;
        transition-duration: 0.4s;
        transition-delay: 0s;
        transition-timing-function: ease;
    }

    /* 头部bar*/
    .h-c-header__bar {
        background: #fff;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12), inset 0 -1px 0 0 #dadce0;
        left: 0;
        right: 0;
        top: 0;
        transform: translate3d(0, 0, 0);
        transition: transform .4s, background .4s;
        z-index: 100;
    }

    .hercules-header .h-c-header__bar {
        position: fixed;
    }

    .h-c-header--product-marketing-one-tier.h-is-wholly-scrolled .h-c-header__bar {
        transform: translate3d(0, -56px, 0)

    }

    .h-c-header--product-initiative.h-is-wholly-scrolled .h-c-header__bar {
        transform: translate3d(0, -112px, 0)

    }


    /* 头部第一个元素 */
    .h-c-header__hamburger {
        float: left;
        width: 56px;
        display: none;
    }

    .h-c-header__hamburger.h-c-header__hamburger--first-tier {
        display: table;
    }

    .h-c-header__hamburger.h-c-header__hamburger--first-tier {
        height: 100%;

    }

    .h-c-header__hamburger-wrapper {
        display: table-cell;
        height: 100%;
        padding: 6px;
        vertical-align: middle;
    }

    .h-c-header__hamburger-link {
        -webkit-appearance: button;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        background: 0 0;
        border: 0;
        border-radius: 50%;
        color: inherit;
        display: block;
        font: inherit;
        height: 100%;
        line-height: normal;
        margin: 0;
        overflow: visible;
        padding: 0;
        position: relative;
        width: 100%;
    }

    .h-c-header__hamburger-img {
        margin: 0 auto;
        height: 24px;
        width: 24px;
    }

    .h-c-header__hamburger-img.h-c-header__hamburger-img--standard {
        display: block;
    }

    /*    */
    .h-c-header__lockup {
        float: left;
        height: 56px;
        margin-left: 16px;
        position: relative;
    }

    .h-c-header__company-logo {
        display: table;
        float: left;
        height: 100%;
        padding: 4px 0;
    }

    .h-c-header__company-logo-link {
        display: table-cell;
        padding-top: 4px;
        vertical-align: middle;
    }

    .h-c-header__product-logo {
        display: table;
        float: left;
        height: 100%;
        margin-left: 3px;
        padding: 4px 0;
    }

    .h-c-header__product-logo-link {
        display: table-cell;
        padding-top: 1px;
        vertical-align: middle;
    }

    .h-c-header__product-logo-text {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        color: #5f6368;
        font-family: "Product Sans", Arial, Helvetica, sans-serif;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
    }

    /* second tier */

    .h-c-header--product-initiative .h-c-header__hamburger.h-c-header__hamburger--second-tier {
        display: table;
    }

    .h-c-header__hamburger.h-c-header__hamburger--second-tier {
        clear: left;
        height: 50%;
    }

    /*   */
    .h-c-header__drawer {
        background: #ffffff;
        border: 0 solid red;
        bottom: 0;
        left: 0;
        max-width: 320px;
        position: fixed;
        right: 56px;
        top: 0;
        transform: translate3d(-100%, 0, 0);
        transition: .35s cubic-bezier(.24, 1, .32, 1);
        visibility: hidden;
        z-index: 102;
    }

    .h-c-header__drawer.h-is-visible {
        visibility: visible;
    }

    .h-is-showing-drawer .h-c-header__drawer {
        box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.12);
        transform: translate3d(0, 0, 0);
    }

    .h-c-header__drawer-backdrop {
        background: rgba(0, 0, 0, .4);
        bottom: 0;
        left: 0;
        opacity: 0;
        position: fixed;
        right: 0;
        top: 0;
        transition: opacity .2s cubic-bezier(.4, 0, .2, 1);
        visibility: hidden;
        z-index: 101;
    }

    .h-is-showing-drawer .h-c-header__drawer-backdrop {
        opacity: 1;
        visibility: visible;
    }

    /*    */
    .h-c-header__drawer-content {
        bottom: 136px;
        left: 0;
        overflow-y: auto;
        position: absolute;
        right: 0;
        top: 0;
    }

    .h-c-header--product-marketing-one-tier .h-c-header__drawer-bar, .h-c-header--product-marketing-two-tier .h-c-header__drawer-bar {
        height: 56px;
    }

    .h-c-header__drawer-bar {
        box-shadow: inset 0 -1px 0 0 #dadce0;
        position: relative;
    }

    /* second tier show  */
    .h-c-header--product-initiative .h-c-header__drawer-bar {
        height: 112px;
    }


    .h-c-header--product-initiative .h-c-header__drawer-bar:before {
        background: #dadce0;
        bottom: 55px;
        content: '';
        height: 1px;
        left: 0;
        position: absolute;
        right: 0;
    }


    .h-c-header--product-marketing-one-tier .h-c-header__drawer-lockup, .h-c-header--product-marketing-two-tier .h-c-header__drawer-lockup {
        height: 100%;
    }

    .h-c-header__drawer-lockup {
        float: left;
        margin-left: 16px;
    }

    .h-c-header__drawer-company-logo {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        display: table;
        float: left;
        height: 100%;
    }

    .h-c-header__drawer-company-logo-link {
        display: table-cell;
        /*padding-top: 4px;*/
        vertical-align: middle;
    }

    .h-c-header__drawer-product-logo {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        display: table;
        float: left;
        height: 100%;
        margin-left: 2px;
    }

    .h-c-header__drawer-product-logo-link {
        display: table-cell;
        padding-top: 0;
        vertical-align: middle;
    }

    .h-c-header__drawer-lockup:after {
        content: "";
        display: table;
        clear: both;
    }

    .h-c-header__drawer-bar:after {
        content: "";
        display: table;
        clear: both;
    }


    /*  nav */
    .h-c-header__drawer-nav {
        padding-bottom: 20px;
        padding-top: 20px;
    }

    nav {
        display: block;
    }

    .h-c-header__drawer-nav-list {
        list-style: none;
        margin-bottom: 0;
        margin-left: 0;
    }

    .h-c-header__drawer-nav-li {
        display: table;
        width: 100%;
    }

    .h-c-header__drawer-nav-li-link {
        color: #5f6368;
        display: table-cell;
        font-family: "Google Sans", Roboto, Arial, Helvetica, sans-serif;
        font-size: 14px;
        font-weight: 400;
        height: 48px;
        letter-spacing: .25px;
        padding-left: 16px;
        padding-right: 16px;
        vertical-align: middle;
        width: 100%;
    }

    .h-c-header__drawer-nested-nav-list {
        display: table-row;
        list-style: none;
        margin-bottom: 0;
        margin-left: 0;
    }

    .h-c-header__drawer-nested-nav-li {
        display: table;
        width: 100%;
    }

    .h-c-header__drawer-nested-nav-li-link {
        color: #5f6368;
        display: table-cell;
        font-family: "Google Sans", Roboto, Arial, Helvetica, sans-serif;
        font-size: 14px;
        font-weight: 400;
        height: 48px;
        letter-spacing: .25px;
        padding-right: 32px;
        padding-left: 32px;
        vertical-align: middle;
        width: 100%;
    }


    /*    last   */
    .h-c-header__drawer-cta {
        bottom: 0;
        box-shadow: inset 0 1px 0 0 #dadce0;
        height: 136px;
        left: 0;
        padding-bottom: 24px;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 8px;
        position: absolute;
        right: 0;
    }

    .h-c-header__drawer-cta-list {
        list-style: none;
        margin-bottom: 0;
        margin-left: 0;
    }

    .h-c-header__drawer-cta-li:first-child {
        margin-top: 0;
    }

    .h-c-header__drawer-cta-li {
        display: table;
        margin-top: 8px;
        width: 100%;
    }

    .h-c-header__cta-li .h-c-header__cta-li-link, .gmp-header .h-c-header__drawer-cta-li .h-c-header__drawer-cta-li-link {
        cursor: pointer;
        font-weight: 500;
    }

    .h-c-header__drawer-cta-li-link {
        display: table-cell;
        font-family: "Google Sans", Roboto, Arial, Helvetica, sans-serif;
        font-size: 14px;
        font-weight: 400;
        height: 48px;
        letter-spacing: .75px;
        text-align: center;
        vertical-align: middle;
    }

    .h-c-header__drawer-cta-li-link.h-c-header__drawer-cta-li-link--secondary {
        color: #1a73e8;
    }

    .h-c-header--product-marketing-one-tier .h-c-header__hamburger.h-c-header__hamburger--second-tier {
        display: none;
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

    .h-c-header--corporate-initiative .h-c-header__drawer-lockup, .h-c-header--product-initiative .h-c-header__drawer-lockup {
        height: 50%;
    }


</style>