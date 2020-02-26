<template>
    <div id="main">
        <section id="first">
            <div id="wave">
                <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270">
                    <path d="M-314,267 C105,364 400,100 812,379" fill="none" stroke="white" stroke-width="120" stroke-linecap="round" />
                </svg>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 offset-md-3">
                            <h3 class="text-center start-action blue-color font-Pacifico">До начала акции осталось:</h3>
                            <p class="text-center">
                                <Countdown deadline="April 1, 2020"></Countdown>
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div v-if="isLoggedIn">
                                <EnterPromo />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <u-animate-container>
                                <u-animate name="bounceInDown" delay="0s" duration="2s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                                    <p class="font-Pacifico tagline blue-color"><span class="f-size-24">С 1 апреля по 18 октября 2020 года</span><br><span class="f-size-42">Купи продукцию <br> "Майская Хрустальная" и участвуй в розыгрыше 12-ти смартфонов IPhone XR!</span></p>
                                    <p id="reg">
                                        <span class="red-arrow bounce-3" v-if="!isLoggedIn"></span>
                                        <button class="btn btn-primary btn-lg" @click="show" v-if="!isLoggedIn">Стать участником розыгрыша</button>
                                        <span class="red-arrow-2 bounce-4" v-if="!isLoggedIn"></span>
                                    </p>
                                </u-animate>
                            </u-animate-container>
                        </div>
                        <div class="col-md-6">
                            <u-animate-container>
                                <u-animate name="bounceInDown" delay="1s" duration="2s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                                    <img src="img/bottles.png" id="bottles" alt="">
                                </u-animate>
                            </u-animate-container>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="second">
            <div class="oval">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <u-animate-container>
                                <u-animate name="pulse" delay="1s" duration=".5s" :iteration="1000" :offset="0" animateClass="animated" :begin="false">
                                    <h2 class="text-center font-Pacifico f-size-42 blue-color margin-60">Как принять участие в акции?</h2>
                                </u-animate>
                            </u-animate-container>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 steps">
                            <u-animate-container>
                                <u-animate name="zoomIn" delay="0s" duration="2s" :iteration="1" :offset="300" animateClass="animated" :begin="false">
                                    <img src="img/steps.png" alt="" id="steps" class="steps-img">
                                </u-animate>
                            </u-animate-container>
                        </div>
                    </div>
                    <!-- <div class="row">
                        <div class="col-md-12">
                            <div class="step-text">Покупайте картофельную соломку Grizzon с 1 февраля по 30 апреля 2020 года </div>
                            <div class="step-right">Покупайте картофельную соломку Grizzon с 1 февраля по 30 апреля 2020 года</div>
                        </div>
                    </div> -->
                </div>
                <div class="blue-bg" id="save-probe">
                    <u-animate-container>
                        <u-animate name="zoomIn" delay="0s" duration="2s" :iteration="1" :offset="50" animateClass="animated" :begin="false">
                            <h2>сохраняйте крышку с кодом до окончания акции!</h2>
                        </u-animate>
                    </u-animate-container>
                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>
<script>
import { mask } from 'vue-the-mask'
import { UAnimateContainer, UAnimate } from 'vue-wow'
import EnterPromo from '@/components/EnterPromo.vue'
import Footer from '@/components/Footer.vue'
import Countdown from 'vuejs-countdown'

const images = document.querySelectorAll(".steps-img");
const range = 40;
const calcValue = (a, b) => (a/b*range-range/2).toFixed(1)
let timeout;
document.addEventListener('mousemove', ({x, y}) => {
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }
    
  timeout = window.requestAnimationFrame(() => {
    const yValue = calcValue(y, window.innerHeight);
    const xValue = calcValue(x, window.innerWidth);

    [].forEach.call(images, (image) => {
      image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
    });

    })
}, false);

export default {
    directives: { mask },
    components: {
        EnterPromo,
        Countdown,
        Footer,
        UAnimateContainer,
        UAnimate
    },
    data() {
        return {

        }
    },
    computed: {
        isLoggedIn: function() { return this.$store.getters.isLoggedIn }
    },
    mounted: function() {

    },
    methods: {
        show() {
            this.$modal.show('hello-world');
        },
        hide() {
            this.$modal.hide('hello-world');
        }
    }
}
</script>
<style scoped>
/* section first */
#first {
   margin-bottom: 110px;
}

#bottles {
    transition: transform .2s;
    width: 100%;
    height: 100%;
}

#bottles:hover {
    transform: scale(1.1);
}

.tagline {
    margin: 10vh auto 50px;
    z-index: 2;
}

svg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: auto;
}

.start-action {
    margin-top: 50px;
}

#wave {
    position: relative;
    height: 600px;
    background: #0b345d;
    background-image: linear-gradient(155deg, #6b9dd0 0%, #e0f0ff 50%, #f6f6f6 100%);
    color: #222;
}

#reg {
    display: flex;
}

.red-arrow {
    display: inline-block;
    width: 89px;
    height: 48px;
    background: url('/img/red-arrow.png') center center no-repeat;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}

.bounce-3 {
    animation-name: bounce-3;
    animation-timing-function: ease-in-out;
}

@keyframes bounce-3 {
    0% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(-100px);
    }

    100% {
        transform: translateX(0);
    }
}

.red-arrow-2 {
    display: inline-block;
    width: 89px;
    height: 48px;
    background: url('/img/red-arrow-2.png') center center no-repeat;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}

.bounce-4 {
    animation-name: bounce-4;
    animation-timing-function: ease-in-out;
}

@keyframes bounce-4 {
    0% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(100px);
    }

    100% {
        transform: translateX(0);
    }
}


/* section second */
#second {
    background: url('/img/geo.png') repeat;
    /*background: linear-gradient(0deg, rgba(14,65,148,1) 0%, rgba(255,255,255,1) 100%);*/
    position: relative;
}

#second .steps {
    display: flex;
    justify-content: center;
}

#steps {
    max-width: 100%;
}

.steps-img{
    position: relative;
}


.step-text{
    width: 300px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #ffec8d;
    padding: 15px 10px;
    font-family: Roboto;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.22;
    letter-spacing: .25px;
    color: #00370d;
    text-align: left;
    position: relative;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
.step-text:after {
    content: "";
    background: -webkit-gradient(linear,left top,right bottom,color-stop(49.5%,rgba(0,0,0,0)),color-stop(50.025%,#ffec8d)) top/100% 50.025% no-repeat,-webkit-gradient(linear,left bottom,right top,color-stop(49.5%,rgba(0,0,0,0)),color-stop(50.025%,#ffec8d)) bottom/100% 51% no-repeat;
    background: -o-linear-gradient(left top,rgba(0,0,0,0) 49.5%,#ffec8d 50.025%) top/100% 50.025% no-repeat,-o-linear-gradient(left bottom,rgba(0,0,0,0) 49.5%,#ffec8d 50.025%) bottom/100% 51% no-repeat;
    background: linear-gradient(to right bottom,rgba(0,0,0,0) 49.5%,#ffec8d 50.025%) top/100% 50.025% no-repeat,linear-gradient(to right top,rgba(0,0,0,0) 49.5%,#ffec8d 50.025%) bottom/100% 51% no-repeat;
    position: absolute;
    top: 0;
    left: -40px;
    right: 2px;
    width: 40px;
    height: 100%;
}
.step-right{
    width: 300px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #ffec8d;
    padding: 15px 10px;
    font-family: Roboto;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.22;
    letter-spacing: .25px;
    color: #00370d;
    text-align: left;
    position: relative;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}

.step-right:after{
    right: 40px;
    left: auto;
    background: -webkit-gradient(linear,right top,left bottom,color-stop(49.5%,rgba(0,0,0,0)),color-stop(50.025%,#ffec8d)) top/100% 50.025% no-repeat,-webkit-gradient(linear,right bottom,left top,color-stop(49.5%,rgba(0,0,0,0)),color-stop(50.025%,#ffec8d)) bottom/100% 51% no-repeat;
    background: -o-linear-gradient(right top,rgba(0,0,0,0) 49.5%,#ffec8d 50.025%) top/100% 50.025% no-repeat,-o-linear-gradient(right bottom,rgba(0,0,0,0) 49.5%,#ffec8d 50.025%) bottom/100% 51% no-repeat;
    background: linear-gradient(to left bottom,rgba(0,0,0,0) 49.5%,#ffec8d 50.025%) top/100% 50.025% no-repeat,linear-gradient(to left top,rgba(0,0,0,0) 49.5%,#ffec8d 50.025%) bottom/100% 51% no-repeat;
    content: "";
    background: -webkit-gradient(linear,left top,right bottom,color-stop(49.5%,rgba(0,0,0,0)),color-stop(50.025%,#ffec8d)) top/100% 50.025% no-repeat,-webkit-gradient(linear,left bottom,right top,color-stop(49.5%,rgba(0,0,0,0)),color-stop(50.025%,#ffec8d)) bottom/100% 51% no-repeat;
    background: -o-linear-gradient(left top,rgba(0,0,0,0) 49.5%,#ffec8d 50.025%) top/100% 50.025% no-repeat,-o-linear-gradient(left bottom,rgba(0,0,0,0) 49.5%,#ffec8d 50.025%) bottom/100% 51% no-repeat;
    background: linear-gradient(to right bottom,rgba(0,0,0,0) 49.5%,#ffec8d 50.025%) top/100% 50.025% no-repeat,linear-gradient(to right top,rgba(0,0,0,0) 49.5%,#ffec8d 50.025%) bottom/100% 51% no-repeat;
    position: absolute;
    top: 0;
    right: -40px;
    width: 40px;
    height: 100%;
    transform: rotate(180deg);
}

#save-probe {
    margin-top: 45px;
    padding: 1px 0;
}

#save-probe h2 {
    text-align: center;
    text-transform: uppercase;
    color: #f6f6f6;
    margin: 10px 0;
    display: block;
}

@media screen and (max-width: 960px) {

    #flower1,
    #flower2,
    #bottles,
    .red-arrow,
    .red-arrow-2 {
        display: none;
    }

    #first,
    #second {
        height: inherit;
    }

    #main p,
    #main p span {
        font-size: 18px;
    }
}
</style>