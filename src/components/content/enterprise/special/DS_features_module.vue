<template>
    <section class="gmp-section gmp-mb-std">
        <div class="features-module">
            <div class="h-c-page">
                <div class="h-c-grid features-module__row">
                    <div class="h-c-grid__col h-c-grid__col-l--4 h-c-grid__col-l--offset-1 h-c-grid__col-l--order-1 features-module__content--left">
                        <h3 class="h-c-headline h-c-headline--one h-has-bottom-margin">
                            Analytics Intelligence
                        </h3>
                        <p class="h-u-mb-std features-module__description">
                            Get fast answers to questions about your analytics data, uncover insights about how your
                            business is performing, and tap into sophisticated modeling capabilities.
                        </p>
                    </div>

                    <div class="h-c-grid__col h-c-grid__col-l--5 h-c-grid__col-l--offset-1 h-c-grid__col-l--order-2 features-module__content--right">
                        <div class="glue-zippy-set h-t-hercules ng-scope glue-is-mixed">
                            <div class="glue-zippy-toggle-all" data-g-action="expand all">
                                <span class="h-c-expansion-panels__toggle-text h-c-expansion-panels__toggle-text--expanded">
                               展开全部
                            </span>
                                <span class="h-c-expansion-panels__toggle-text h-c-expansion-panels__toggle-text--collapsed">
                                折叠全部
                            </span>
                                <svg xmlns="http://www.w3.org/2000/svg"   class="h-c-icon h-c-icon--18px h-c-expansion-panels__toggle-circle" >
                                    <polyline points="0,0 4,4 8,0" style=" stroke:#177166; stroke-width:2" @click="expendAll" />
                                </svg>
                            </div>

                            <ul class="h-c-expansion-panels__list">
                                <li class="glue-zippy glue-a-zippy--v-smooth-expand ng-isolate-scope glue-c-zippy ">
                                    <div class="glue-zippy-btn ng-isolate-scope glue-c-zippy__btn">
                                        <h4 class="h-c-expansion-panels__button-header">
                                            Answers to Your Questions
                                        </h4>

                                        <svg xmlns="http://www.w3.org/2000/svg"   class="h-c-icon--18px h-c-expansion-panels__button-arrow" @click="addExpend(1)">
                                            <polyline points="0,0 7,7 14,0" style="fill:white;stroke:#1a73e8;stroke-width:3" />
                                        </svg>

                                    </div>

                                    <div class="glue-zippy-content ng-isolate-scope glue-c-zippy__content">
                                        <div class="glue-c-zippy__collapse-region glue-collapse-expanded" id="zippy-1-content">
                                            <div class="glue-c-zippy__content-container">
                                                <p class="ng-scope">
                                                    Anyone on the team can ask questions about business metrics directly in-product, freeing analysts to spend their time on deeper research and discovery.
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </li>
                                <li class="glue-zippy glue-a-zippy--v-smooth-expand ng-isolate-scope glue-c-zippy ">
                                    <div class="glue-zippy-btn ng-isolate-scope glue-c-zippy__btn">
                                        <h4 class="h-c-expansion-panels__button-header">
                                            Answers to Your Questions
                                        </h4>

                                        <svg xmlns="http://www.w3.org/2000/svg"   class="h-c-icon--18px h-c-expansion-panels__button-arrow" @click="addExpend(2)">
                                            <polyline points="0,0 7,7 14,0" style="fill:white;stroke:#1a73e8;stroke-width:3" />
                                        </svg>

                                    </div>

                                    <div class="glue-zippy-content ng-isolate-scope glue-c-zippy__content">
                                        <div class="glue-c-zippy__collapse-region glue-collapse-expanded" id="zippy-2-content">
                                            <div class="glue-c-zippy__content-container">
                                                <p class="ng-scope">
                                                    Anyone on the team can ask questions about business metrics directly in-product, freeing analysts to spend their time on deeper research and discovery.
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </li>
                                <li class="glue-zippy glue-a-zippy--v-smooth-expand ng-isolate-scope glue-c-zippy ">
                                    <div class="glue-zippy-btn ng-isolate-scope glue-c-zippy__btn">
                                        <h4 class="h-c-expansion-panels__button-header">
                                            Answers to Your Questions
                                        </h4>

                                        <svg xmlns="http://www.w3.org/2000/svg"   class="h-c-icon--18px h-c-expansion-panels__button-arrow" @click="addExpend(3)">
                                            <polyline points="0,0 7,7 14,0" style="fill:white;stroke:#1a73e8;stroke-width:3" />
                                        </svg>

                                    </div>

                                    <div class="glue-zippy-content ng-isolate-scope glue-c-zippy__content">
                                        <div class="glue-c-zippy__collapse-region glue-collapse-expanded" id="zippy-3-content">
                                            <div class="glue-c-zippy__content-container">
                                                <p class="ng-scope">
                                                    Anyone on the team can ask questions about business metrics directly in-product, freeing analysts to spend their time on deeper research and discovery.
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </li>

                            </ul>


                        </div>


                    </div>
                </div>
            </div>

        </div>


    </section>
</template>

<script>
    export default {
        name: "ES_features_module",
        methods: {

            expendAll(){
                var expend = this.$('.glue-zippy-toggle-all').attr('data-g-action');
                var aaas =  this.$('.h-c-expansion-panels__button-arrow');
                if(expend === 'expand all'){
                    for(var i = 1; i < aaas.length +1 ; i++){
                        var aaa =  this.$('.h-c-expansion-panels__button-arrow')[i-1];
                        this.$(aaa).parent().parent().addClass('glue-is-expanded');
                        this.$('#zippy-'+i +'-content').css({
                            "max-height": "100%",
                        })
                    }
                    this.$('.glue-zippy-set').removeClass('glue-is-mixed').addClass('glue-is-expanded');
                    this.$('.glue-zippy-toggle-all').attr("data-g-action","collapse all")

                }else{
                    for(var j = 1; j < aaas.length +1 ; j++){
                        var aaa1 =  this.$('.h-c-expansion-panels__button-arrow')[j-1];
                        this.$(aaa1).parent().parent().removeClass('glue-is-expanded');
                        this.$('#zippy-'+ j +'-content').css({
                            "max-height": "0",
                        })
                    }
                    this.$('.glue-zippy-set').addClass('glue-is-mixed').removeClass('glue-is-expanded');
                    this.$('.glue-zippy-toggle-all').attr("data-g-action","expand all")
                }
            },

            addExpend(index) {
               var aaa =  this.$('.h-c-expansion-panels__button-arrow')[index-1];
               var fatherExpend = this.$(aaa).parent().parent().is('.glue-is-expanded');
               if(fatherExpend){
                   this.$('#zippy-'+index+'-content').css({
                       "max-height": "0",
                   })
                   this.$(aaa).parent().parent().removeClass('glue-is-expanded');
                   this.$('.glue-zippy-toggle-all').attr("data-g-action","expand all")
                   this.$('.glue-zippy-set').addClass('glue-is-mixed').removeClass('glue-is-expanded');

               }else{
                   this.$(aaa).parent().parent().addClass('glue-is-expanded');
                   this.$('#zippy-'+index+'-content').css({
                       "max-height": "100%",
                   })
               }

            }


        },
    }
</script>

<style lang="less">


</style>