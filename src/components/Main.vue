<template>
    <div id="main">
        <section id="first">
            <img src="img/clouds1.png" alt="" id="clouds">
            <img src="img/sun1.png" alt="" id="sun">
            <div id="wave">
                <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270">
                    <path d="M-314,267 C105,364 400,100 812,379" fill="none" stroke="white" stroke-width="120" stroke-linecap="round" />
                </svg>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 offset-md-3">
                            <h3 class="text-center start-action blue-color font-Pacifico">До начала акции осталось:</h3>
                            <p class="text-center">
                                <Countdown deadline="May 18, 2020"></Countdown>
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
                        <div class="col-md-12 col-lg-6">
                            <u-animate-container>
                                <u-animate name="bounceInDown" delay="0s" duration="2s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                                    <p class="font-Pacifico tagline blue-color"><span class="f-size-24">С 1 апреля по 18 октября 2020 года</span><br><span class="f-size-42">Купи продукцию "Майская Хрустальная" и участвуй в розыгрыше 12-ти смартфонов IPhone XR!</span></p>
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
            <div id="second-bg"></div>
            <img src="img/iphonexr.png" alt="" id="iphonexr" :style="{ left: iphonexrLeftPosition + 'px', transform: 'rotate(' + iphonexrRotate + 'deg)' }">
            <div>
                <h3 id="prize" :style="{ opacity: opacityPrize }">Выиграй меня!!!</h3>
            </div>
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
            </div>
            <div class="blue-bg" id="save-probe">
                <u-animate-container>
                    <u-animate name="zoomIn" delay="0s" duration="2s" :iteration="1" :offset="50" animateClass="animated" :begin="false">
                        <h4>сохраняй крышку с кодом до окончания акции</h4>
                    </u-animate>
                </u-animate-container>
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
            iphonexrLeftPosition: -220,
            iphonexrRotate: 0,
            opacityPrize: 0
        }
    },
    computed: {
        isLoggedIn: function() { return this.$store.getters.isLoggedIn }
    },
    mounted: function() {
        window.addEventListener('scroll', this.rotateIphone);
    },
    methods: {
        show() {
            this.$modal.show('hello-world');
        },
        hide() {
            this.$modal.hide('hello-world');
        },
        rotateIphone() {
            if(window.scrollY >= 500 && window.scrollY <= 900){
                this.iphonexrLeftPosition = 0
                this.iphonexrRotate = 48
                this.opacityPrize = 1
            }else{
                this.iphonexrLeftPosition = -220
                this.iphonexrRotate = 0
                this.opacityPrize = 0
            }
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
    /*background: url('/img/forest2.png') right bottom no-repeat;*/
    /*background-image: linear-gradient(155deg, #fff 0%, #e0f0ff 50%, #6b9dd0 100%);*/
    background: rgb(2,0,36);
background: linear-gradient(360deg, rgba(2,0,36,1) 0%, rgba(107,157,208,1) 0%, rgba(255,255,255,1) 100%);
    position: relative;
}

#second #iphonexr{
    position: absolute;
    transition: all 1s;
    top: 150px;
}
#second #prize{
    position: absolute;
    top: 100px;
    left: 100px;
    padding: 10px;
    border: 1px solid #0e4194;
    border-radius: 5px;
    color: #0e4194;
    transition: all 1s;
}
#second .steps {
    display: flex;
    justify-content: center;
}

#steps {
    max-width: 100%;
}


#save-probe {
    margin-top: 45px;
    padding: 1px 0;
}

#save-probe h4 {
    text-align: center;
    text-transform: uppercase;
    color: #f6f6f6;
    margin: 3px 0;
    display: block;
}

@media screen and (max-width: 960px) {

    #clouds,
    #sun,
    #second #iphonexr,
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

/* Small devices (tablets, 768px and up) */
@media (min-width: @screen-sm-min) { 
    #clouds,
    #sun,
    #second #iphonexr,
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
        font-size: 2rem;
    }
}

/* Medium devices (desktops, 992px and up) */
@media (min-width: @screen-md-min) { 
    #clouds,
    #sun,
    #second #iphonexr,
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
        font-size: 2rem;
    }

}
/* Medium devices (desktops, 992px and up) */
@media (min-width: @screen-md-min) { 
    #clouds,
    #sun,
    #second #iphonexr,
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
        font-size: 2rem;
    }

}

/* Large devices (large desktops, 1200px and up) */
@media (min-width: @screen-lg-min) {

}
</style>