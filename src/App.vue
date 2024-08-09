<template>
  <div id="app" ref="homePage">
    <Nav />

    <router-view ></router-view>

    <Footer />
  </div>
</template>

<script>
  import Nav from "./Nav";
  import Footer from "./Footer";
  export default {
    name: "App",
    components: {
      Nav,
      Footer
    },
    data() {
      return {

        scrollVal:""

      }
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },

    watch: {
      scrollVal: function (newVal) {
        this.scrollVal = newVal;
      },
    },
    methods: {
      changeFixed(clientHeight) {                        //动态修改样式
        this.$refs.homePage.style.height = clientHeight + 'px';
      },
      handleScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (  scrollTop > 560) {
          if(this.scrollVal > scrollTop){
            this.$('.gmp-header').removeClass('h-is-wholly-scrolled')
          }else{
            this.$('.gmp-header').addClass('h-is-wholly-scrolled')
          }
        }
        else {
          this.$('.gmp-header').removeClass('h-is-wholly-scrolled')
        }
        this.scrollVal = scrollTop;

      },
    }

  }
</script>

<style lang="less">

  #app {
    height: 100%;
  }

</style>
