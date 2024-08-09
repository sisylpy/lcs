<template>
    <footer class="h-c-footer h-c-footer--robust h-has-social">
        <section class="h-c-footer__upper">
            <section class="h-c-social">
                <div class="h-c-social__group">
                    <p class="h-c-social__title h-c-social__title--inline">
                        Follow us
                    </p>
                    <ul class="h-c-social__list h-no-bullet">
                        <li class="h-c-social__item">
                            <a href="/" class="h-c-social__link">
                                <img src="@/assets/img/menu.png" alt="" class="h-c-icon h-c-icon--20px h-c-icon--social h-c-icon--no-padding">
                            </a>

                        </li>
                        <li class="h-c-social__item">
                            <a href="/" class="h-c-social__link">
                                <img src="@/assets/img/menu.png" alt="" class="h-c-icon h-c-icon--20px h-c-icon--social h-c-icon--no-padding">
                            </a>

                        </li>
                        <li class="h-c-social__item">
                            <a href="/" class="h-c-social__link">
                                <img src="@/assets/img/menu.png" alt="" class="h-c-icon h-c-icon--20px h-c-icon--social h-c-icon--no-padding">
                            </a>
                        </li>

                    </ul>

                </div>

            </section>

        </section>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="less">
    @import "/myless/variables";

    .h-c-footer__upper {
        margin: 0 auto;
        padding: 30px 16px 0;
        @media (min-width: @screen-600-min) {
            display: flex;
            flex-wrap: wrap;
            max-width: 1344px;
            padding: 30px 32px 0;
        }
    }

    .h-c-social {
        max-width: 100%;
        @media (min-width: @screen-600-min) {
            flex: 1 0 auto;
            display: flex;
            flex-wrap: wrap;
        }
    }

    .h-c-footer .h-c-social {
        margin: -10px 0 20px;
    }

    .h-c-social__group {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin: 0;
        @media (min-width: @screen-600-min) {
            flex-wrap: nowrap;
            padding-right: 70px;
        }
    }


    .h-c-social__title {
        color: #202124;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        font-family: "Google Sans",Roboto,Arial,Helvetica,sans-serif;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: .75px;
    }

    .h-c-social__title.h-c-social__title--inline {
        line-height: 3.14286;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        margin-right: 24px;
        @media (min-width: @screen-600-min) {
              margin-right: 32px;
        }
    }

    ul.h-no-bullet {
        margin-left: 0;
    }
    .h-c-footer .h-c-social__list {
        margin: 0 -10px;
    }

    .h-c-social__item {
        flex: 0 0 auto;
        float: left;
        height: 44px;
        margin: 0 10px 0 0;
        width: 44px;
    }

    .h-c-social__item .h-c-social__link {
        border-radius: 50%;
        display: block;
        height: 44px;
        padding: 10px;
        width: 44px;
    }







</style>