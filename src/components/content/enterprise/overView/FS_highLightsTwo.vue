<template>
    <section class="gmp-section gmp-mb-l">
        <div class="highlights-module">
            <div class="h-c-page">
                <div class="h-c-grid highlights-module__sticky-wrapper">
                    <div class="h-c-grid__col h-c-grid__col-l--6">
                        <div class="highlights-module__sticky-el">
                            <img src="@/assets/img/highlights.jpeg" class="gmp-no-grab highlights-module__image-desktop"
                                 alt="">
                        </div>
                    </div>

                    <div class="h-c-grid__col h-c-grid__col-l--5 highlights-module__content">
                        <h3 class="h-c-headline h-c-headline--one h-has-bottom-margin">
                            FS_highLightsTwo如何核算成本.
                        </h3>
                        <p></p>
                        <picture>
                            <img src="@/assets/img/highlights.jpeg" alt=""
                                 class="gmp-no-grab highlights-module__image-mobile">
                        </picture>

                        <div class="highlights-module__listing">
                            <ul class="highlights-module__highlights">

                                <li class="highlights-module__highlight">
                                    <picture>
                                        <img src="@/assets/img/1a.png" alt=""
                                             class="gmp-circle-icon gmp-circle-icon--yellow highlights-module__icon">
                                    </picture>
                                    <h4 class="h-c-headline h-c-headline--four h-has-bottom-margin">
                                        门店和库房成本管理
                                    </h4>
                                    <p>可灵活随时核算门店的上期结余，进货总额，库存总额，制作成本，废弃成本，损耗成本.</p>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>


                <div class="highlights-module__carousel highlights-module__carousel--horizontal">

                    <div class="glue-pagination h-c-carousel h-c-carousel--simple ng-isolate-scope glue-o-pagination">

                        <div class="h-c-carousel__wrap ng-scope">
                            <ul class="glue-carousel glue-is-ready" id="highlightsTwoUl"
                                style="width: auto; transform: none">
                                <li class="h-c-carousel__item">
                                    <picture>
                                        <img src="@/assets/img/1a.png" alt=""
                                             class="gmp-circle-icon gmp-circle-icon--yellow highlights-module__icon">
                                    </picture>
                                    <h4 class="h-c-headline h-c-headline--four highlights-module__subhead">
                                        1 Build a complete picture.
                                    </h4>
                                    <div class="highlights-module__description">
                                        <p>Understand your site and app users to better evaluate the performance of your
                                            marketing, content, products, and more.</p>
                                    </div>

                                </li>
                                <li class="h-c-carousel__item">
                                    <picture>
                                        <img src="@/assets/img/1a.png" alt=""
                                             class="gmp-circle-icon gmp-circle-icon--yellow highlights-module__icon">
                                    </picture>
                                    <h4 class="h-c-headline h-c-headline--four highlights-module__subhead">
                                        2 Build a complete picture.
                                    </h4>
                                    <div class="highlights-module__description">
                                        <p>Understand your site and app users to better evaluate the performance of your
                                            marketing, content, products, and more.</p>
                                    </div>

                                </li>
                                <li class="h-c-carousel__item">
                                    <picture>
                                        <img src="@/assets/img/1a.png" alt=""
                                             class="gmp-circle-icon gmp-circle-icon--yellow highlights-module__icon">
                                    </picture>
                                    <h4 class="h-c-headline h-c-headline--four highlights-module__subhead">
                                        3 Build a complete picture.
                                    </h4>
                                    <div class="highlights-module__description">
                                        <p>Understand your site and app users to better evaluate the performance of your
                                            marketing, content, products, and more.</p>
                                    </div>

                                </li>
                                <li class="h-c-carousel__item">
                                    <picture>
                                        <img src="@/assets/img/1a.png" alt=""
                                             class="gmp-circle-icon gmp-circle-icon--yellow highlights-module__icon">
                                    </picture>
                                    <h4 class="h-c-headline h-c-headline--four highlights-module__subhead">
                                        4 Build a complete picture.
                                    </h4>
                                    <div class="highlights-module__description">
                                        <p>Understand your site and app users to better evaluate the performance of your
                                            marketing, content, products, and more.</p>
                                    </div>

                                </li>


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


                                <div style="clear:both;"></div>

                            </ul>

                        </div>

                    </div>

                    <div class="highlights-module__cta highlights-module__cta--mobile">
                        <a href="/" class="h-c-link gmp-link">
                            See all benefits
                        </a>
                    </div>

                </div>

            </div>

        </div>

    </section>
</template>

<script>
    export default {
        name: "FS_highLightsTwo",
        props: ['clientWidth'],
        data() {
            return {
                activeIndex: 0,
                itemWidth: ""
            }
        },

        watch: {
            clientWidth: function (val) {
                this.clientWidth = val
                this.changeFixed(this.clientWidth)
            },
        },


        methods: {
            showIndex(data) {

                if(this.clientWidth < 600){
                    var itemWidth1 = this.$('.h-c-carousel').width();
                    var moveWidth1 = "";

                    moveWidth1 = - + data * itemWidth1;
                    console.log("1=====" + moveWidth1)
                    moveWidth1 = Number(moveWidth1) + Number(20)
                    console.log("2======" + moveWidth1);
                    this.$('#highlightsTwoUl').css({
                        "transform": "translate3d(" + moveWidth1 + "px, 0px, 0px)",
                        "transition": "transform .4s"
                    })
                }else{
                    var itemWidth = this.$('.h-c-carousel').width();
                    var moveWidth = "";
                    moveWidth = - + data * itemWidth;
                    moveWidth = Number(moveWidth);
                    this.$('#highlightsTwoUl').css({
                        "transform": "translate3d(" + moveWidth + "px, 0px, 0px)",
                        "transition": "transform .4s"
                    })
                }

                this.activeIndex = data;
            },


            changeFixed(data) {
                this.activeIndex = 0;

                var itemWidth = this.$('.h-c-carousel').width();
                var items = this.$('.h-c-carousel__item');
                var how = this.clientWidth * 5;
                for (var j = 0; j < items.length; j++) {
                    this.$(items[j]).css({
                        'width': itemWidth + 'px',
                        "min-width": "149px"
                    })
                }
                if (data < 1024) {
                    if (data < 600) {

                        if (this.activeIndex === 0) {
                            this.$('#highlightsTwoUl').css({
                                'width': how + 'px',
                                "transform": "translate3d(20px, 0px,0px)",
                            })
                        } else {
                            var how1 = (Number(this.clientWidth) - Number(20)) * 5;
                            console.log("dayu600 < 1024")
                            this.$('#highlightsTwoUl').css({
                                'width': how1 + 'px',
                                "transform": "translate3d(20px, 0px,0px)",
                            })
                        }

                    } else{
                        this.$('#highlightsTwoUl').css({
                            'width': how + 'px',
                            "transform": "translate3d(0px, 0px,0px)",
                        })

                    }


                } else {
                    this.$('#highlightsTwoUl').css({
                        'width': "auto",
                        "transform": "translate3d(0px, 0px,0px)",
                    })
                }
            },
        }


    }
</script>

<style lang="less">




</style>