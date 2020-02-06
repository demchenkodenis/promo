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
                            <h3 class="text-center start-action blue">До начала акции осталось:</h3>
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
                            <p class="font-Pacifico tagline blue"><span class="f-size-24">С 1 апреля по 18 октября 2020 года. </span><br><span class="f-size-42">Купи продукцию <br> "Майская Хрустальная" и участвуй в розыгрыше 12-ти смартфонов IPhone XR!</span></p>
                            <p id="reg">
                                <span class="red-arrow bounce-3"></span>
                                <button class="btn btn-info btn-lg" data-toggle="modal" data-target="#regModal" v-if="!isLoggedIn">Стать участником розыгрыша</button>
                                <span class="red-arrow-2 bounce-4"></span>
                            </p>
                        </div>
                        <div class="col-md-6">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <img src="img/flower1.png" alt="" id="flower1">
        <img src="img/flower2.png" alt="" id="flower2">
        <section id="second">
            <!-- <div id="splash"></div> -->
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="text-center font-Pacifico f-size-42 blue margin-15">Как участвовать?</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 steps">
                        <img src="img/steps.png" alt="">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { mask } from 'vue-the-mask'
import EnterPromo from '@/components/EnterPromo.vue'
import Countdown from 'vuejs-countdown'
export default {
    directives: { mask },
    components: {
        EnterPromo,
        Countdown
    },
    data() {
        return {

        }
    },
    computed: {
        isLoggedIn: function() { return this.$store.getters.isLoggedIn }
    },
    mounted: function() {

    }
}
</script>
<style scoped>
/* other styles */
.margin-15{
    margin: 15px 0;
}
.margin-30{
    margin: 30px 0;
}
.f-size-24 {
    font-size: 24px;
}
.f-size-18 {
    font-size: 18px;
}

.f-size-42 {
    font-size: 42px;
}

.font-Pacifico {
    font-family: 'Pacifico', cursive;
}

.blue {
    color: #0e4194;
}

#main #flower1 {
    position: absolute;
    top: 150px;
    left: 0;
    max-width: 100%;
}

#main #flower2 {
    position: absolute;
    top: 0;
    right: 0;
    max-width: 100%;
}

/* section first */
#first {
    height: 100vh;
}

.tagline {
    margin: 10vh auto;
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
    height: 500px;
    background: #0b345d;
    background-image: linear-gradient(155deg, #6b9dd0 0%, #e0f0ff 50%, #f6f6f6 100%);
    color: #222;
}
#reg{
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
    height: 100vh;
    background: url('/img/drops-1.png') top center no-repeat;
}

#second .steps{
    display: flex;
    justify-content: center;
}
</style>