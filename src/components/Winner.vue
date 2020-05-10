<template>
    <div>
        <section id="first">
            <img src="img/clouds1.png" alt="" id="clouds">
            <img src="img/sun1.png" alt="" id="sun">
            <div id="wave">
                <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270">
                    <path d="M-314,267 C105,364 400,100 812,379" fill="none" stroke="white" stroke-width="120" stroke-linecap="round" />
                </svg>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h2 class="text-center">{{ currDate }}</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <p class="text-center"><button class="btn btn-primary btn-lg" @click="getWinner">НАЧАТЬ РОЗЫГРЫШ</button></p>
                            <div v-if="spinner">
                                <h2 class="text-center">Поиск победителя</h2>
                            </div>
                            <div v-if="spinner" style="display: flex;justify-content: center; flex-grow: 1;">
                                <flower-spinner :animation-duration="5000" :size="96" color="#ff1d5e" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div id="boxes">
                                <sequential-entrance delay="5000" fromLeft>
                                    <div class="box" v-for="symbol in win" :key="symbol">{{symbol}}</div>
                                </sequential-entrance>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <h3 class="text-center">{{ text }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { FlowerSpinner } from 'epic-spinners'
export default {
    components: {
        FlowerSpinner
    },
    data() {
        return {
            currDate: '',
            win: '',
            spinner: false,
            text: '',

        }
    },
    methods: {
        currentDate() {
            var d = new Date()
            var day = d.getDate()
            var month = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]
            var year = d.getFullYear()
            this.currDate = day + " " + month[d.getMonth()] + " " + year + 'г.'
        },
        winner() {
            var code = "F81JF73JS9"
            this.win = code.split('')
        },
        getWinner() {
            this.spinner = true
            setTimeout(() => this.spinner = false, 54000)
            setTimeout(() => this.text = 'Победитель Лариса Крыжановская', 55000)
            setTimeout(this.winner, 5000)
        }

    },
    mounted() {
        this.currentDate()
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
svg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: auto;
}

#wave {
    position: relative;
    background: #0b345d;
    background-image: linear-gradient(155deg, #6b9dd0 0%, #e0f0ff 50%, #f6f6f6 100%);
    color: #222;
    height: 500px;
}

#clouds {
    position: absolute;
    top: 100px;
    left: 0;
    max-width: 100%;
    z-index: 1;
}

#sun {
    position: absolute;
    top: 65px;
    right: 10px;
    max-width: 100%;
    z-index: 1;
}

#wave h3,
#wave p {
    position: relative;
    z-index: 5;
}

#boxes>span {
    display: flex;
    justify-content: center;
}

.box {
    border-radius: 10px;
    background-color: #0e4194;
    width: 100px;
    height: 100px;
    margin: 1rem;
    text-align: center;
    color: #fff;
    font-size: 4.5rem;
}

p,
h2,
h3 {
    color: #0e4194;
}

h2 {
    margin: 30px auto;
}
</style>