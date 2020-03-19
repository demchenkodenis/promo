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
                            <h3 class="text-center start-action blue-color font-Pacifico">До начала первого розыгрыша осталось:</h3>
                            <p class="text-center">
                                <Countdown deadline="May 18, 2020"></Countdown>
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div v-if="isLoggedIn && status == 1">
                                <EnterPromo />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 col-lg-6">
                            <u-animate-container>
                                <u-animate name="bounceInDown" delay="0s" duration="2s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                                    <p class="font-Pacifico tagline blue-color f-size-36">
                                        с 1 апреля по 18 октября 2020 года участвуй в акции <br> от «Майской хрустальной»™ и
                                        получи возможность выиграть смартфон iPhone X
                                    </p>
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
            <!-- <img src="img/iphonexr.png" alt="" id="iphonexr" :style="{ left: iphonexrLeftPosition + 'px', transform: 'rotate(' + iphonexrRotate + 'deg)' }">
            <div>
                <h3 id="prize" :style="{ opacity: opacityPrize }">Выиграй меня!!!</h3>
            </div> -->
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
                    <!-- <div class="col-md-12 steps">
                        <u-animate-container>
                            <u-animate name="zoomIn" delay="0s" duration="2s" :iteration="1" :offset="300" animateClass="animated" :begin="false">
                                <img src="img/steps.png" alt="" id="steps" class="steps-img">
                            </u-animate>
                        </u-animate-container>
                    </div> -->
                    <div class="col-md-3 levels">
                        <u-animate-container>
                            <u-animate name="bounceInLeft" delay="1s" duration=".5s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                                <div class="level-img">
                                    <span>1</span>
                                    <img src="img/bottles2.png" class="img-responsive" alt="">
                                    <img src="img/yellow-arrow.png" alt="">
                                </div>
                                <div class="level-text">
                                    <h2 class="text-center blue-color">Купи</h2>
                                    <p class="text-center">продукцию «Майская хрустальная»™ в промоупаковке</p>
                                </div>
                            </u-animate>
                        </u-animate-container>
                    </div>
                    <div class="col-md-3 levels">
                        <u-animate-container>
                            <u-animate name="bounceInLeft" delay="2s" duration=".5s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                                <div class="level-img">
                                    <span>2</span>
                                    <img src="img/prize.png" class="img-responsive" alt="">
                                    <img src="img/yellow-arrow.png" alt="">
                                </div>
                                <div class="level-text">
                                    <h2 class="text-center blue-color">Найди</h2>
                                    <p class="text-center">десятизначный код под крышкой</p>
                                </div>
                            </u-animate>
                        </u-animate-container>
                    </div>
                    <div class="col-md-3 levels">
                        <u-animate-container>
                            <u-animate name="bounceInLeft" delay="3s" duration=".5s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                                <div class="level-img">
                                    <span>3</span>
                                    <img src="img/reg.png" class="img-responsive" alt="">
                                    <img src="img/yellow-arrow.png" alt="">
                                </div>
                                <div class="level-text">
                                    <h2 class="text-center blue-color">Зарегистрируй</h2>
                                    <p class="text-center">код на сайте</p>
                                </div>
                            </u-animate>
                        </u-animate-container>
                    </div>
                    <div class="col-md-3 levels">
                        <u-animate-container>
                            <u-animate name="bounceInRight" delay="4s" duration=".5s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                                <div class="level-img">
                                    <span>4</span>
                                    <img src="img/iphones2.png" class="img-responsive" alt="">
                                </div>
                                <div class="level-text">
                                    <h2 class="text-center blue-color">Получи</h2>
                                    <p class="text-center">возможность выиграть один из двенадцати смартфонов <br> iPhone XR</p>
                                </div>
                            </u-animate>
                        </u-animate-container>
                    </div>
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
            iphonexrLeftPosition: -500,
            iphonexrRotate: 0,
            opacityPrize: 0,
            status: ''
        }
    },
    computed: {
        isLoggedIn: function() { return this.$store.getters.isLoggedIn }
    },
    mounted: function() {
        window.addEventListener('scroll', this.rotateIphone);
        const self = this
        this.$http.post('/api/secure.php', {
                lkuid: localStorage.getItem('lkuid'),
                t: localStorage.getItem('t')
            })
            .then(function(response) {
                self.status = response.data.status
            })
            .catch(function(error) {
                console.log(error)
            });
    },
    methods: {
        show() {
            this.$modal.show('hello-world');
        },
        hide() {
            this.$modal.hide('hello-world');
        },
        rotateIphone() {
            if (window.scrollY >= 500 && window.scrollY <= 900) {
                this.iphonexrLeftPosition = -50
                this.iphonexrRotate = 27
                this.opacityPrize = 1
            } else {
                this.iphonexrLeftPosition = -500
                this.iphonexrRotate = 0
                this.opacityPrize = 0
            }
        }
    }
}
</script>
<style scoped>
.img-responsive {
    max-width: 88%;
}

/* section first */

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
    position: relative;
}

.tagline:after {
    position: absolute;
    bottom: 19px;
    content: 'R';
    font-weight: 900;
    font-size: 12px;
    padding: 0px 5px;
    border: 2px solid #0e4194;
    border-radius: 5px;
    vertical-align: middle;
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

/*#gradient {
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(242, 242, 242, 1) 100%);
    height: 70px;
}
*/
/* section second */
#second {
    /*background: url('/img/leaves-pattern.png') repeat;*/
    background-image: linear-gradient(180deg, #fff 0%, #e0f0ff 50%, #6b9dd0 100%);
    position: relative;
}

#second #iphonexr {
    position: absolute;
    transition: all 1s;
    top: 150px;
}

#second #prize {
    position: absolute;
    top: 80px;
    left: 100px;
    padding: 10px;
    /*border: 1px solid #0e4194;*/
    border-radius: 5px;
    color: #0e4194;
    transition: all 1s;
    background: yellow;
}

.levels {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.level-img {
    position: relative;
    height: 250px;
    display: flex;
    align-items: center;
}

.level-img span {
    display: block;
    position: absolute;
    background: yellow;
    width: 50px;
    height: 50px;
    text-align: center;
    border-radius: 50%;
    top: 0;
    right: 0;
    font-size: 36px;
    color: #0e4194;
}

.level-text {
    margin-top: 20px;
    min-height: 150px;
}

#second .steps {
    display: flex;
    justify-content: center;
}

#steps {
    max-width: 100%;
}

.my-card {
    position: absolute;
    left: 40%;
    top: -20px;
    border-radius: 50%;
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
@media (min-width: @screen-lg-min) {}
</style>