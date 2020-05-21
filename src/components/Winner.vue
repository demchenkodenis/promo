<template>
    <div>
        <section id="first">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="text-center">{{ currDate }}</h2>
                    </div>
                    <p>
                                                <vue-countdown-timer
                                                    @start_callback="startCallBack('event started')"
                                                    @end_callback="endCallBack('event ended')"
                                                    :start-time="startTime"
                                                    :end-time="endTime"
                                                    :interval="1000"
                                                    :start-label="''"
                                                    :end-label="''"
                                                    label-position="begin"
                                                    :end-text="'Event ended!'"
                                                    :day-txt="'дней'"
                                                    :hour-txt="'часов'"
                                                    :minutes-txt="'минут'"
                                                    :seconds-txt="'секунд'">
                                                <template slot="start-label" slot-scope="scope">
                                                <span style="color: red" v-if="scope.props.startLabel !== '' && scope.props.tips && scope.props.labelPosition === 'begin'">{{scope.props.startLabel}}:</span>
                                                <span style="color: blue" v-if="scope.props.endLabel !== '' && !scope.props.tips && scope.props.labelPosition === 'begin'">{{scope.props.endLabel}}:</span>
                                                </template>

                                                <template slot="countdown" slot-scope="scope">
                                                <div id="countdown-main">
                                                    <div>
                                                        <p class="f-size-36 ">{{scope.props.days}}</p>
                                                        <p>{{scope.props.dayTxt}}</p>
                                                    </div>
                                                    <div>
                                                        <p class="f-size-36 ">: {{scope.props.hours}}</p>
                                                        <p>{{scope.props.hourTxt}}</p>
                                                    </div>
                                                    <div>
                                                        <p class="f-size-36 ">: {{scope.props.minutes}}</p>
                                                        <p>{{scope.props.minutesTxt}}</p>
                                                    </div>
                                                    <div>
                                                        <p class="f-size-36 ">: {{scope.props.seconds}}</p>
                                                        <p>{{scope.props.secondsTxt}}</p>
                                                    </div>
                                                </div>
                                                </template>

                                                <template slot="end-label" slot-scope="scope">
                                                <span style="color: red" v-if="scope.props.startLabel !== '' && scope.props.tips && scope.props.labelPosition === 'end'">{{scope.props.startLabel}}:</span>
                                                <span style="color: blue" v-if="scope.props.endLabel !== '' && !scope.props.tips && scope.props.labelPosition === 'end'">{{scope.props.endLabel}}:</span>
                                                </template>

                                                <template slot="end-text" slot-scope="scope">
                                                <span style="color: green">{{ scope.props.endText}}</span>
                                                </template>
                                                </vue-countdown-timer>
                                            </p>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <p class="text-center"><button class="btn btn-primary btn-lg" disabled @click="getWinner">НАЧАТЬ РОЗЫГРЫШ</button></p>
                        <div v-if="spinner">
                            <h2 class="text-center">Определение победителя</h2>
                        </div>
                        <!-- <h3 class="text-center" v-if="count_users">На первом этапе розыгрыша участвует {{ count_users }} человек</h3> -->
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
                        <h3 class="text-center">{{ winnerText }}</h3>
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
            startTime: '',
            endTime: '',
            currDate: '',
            win: '',
            spinner: false,
            userName: [],
            winnerText: '',
            count_users: ''
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
            const self = this
            this.$http.get('/api/recognizeUser.php')
                .then(function(response) {
                    console.log(response)
                    self.userName = response.data.winner
                    self.userCode = response.data.code.code
                    self.count_users = response.data.count_users
                    self.win = self.userCode.split('')
                })
                .catch(function(error) {
                    console.log(error)
                });
            console.log(this.userName + ' ' + this.win)
        },
        getWinner() {
            this.spinner = true
            setTimeout(() => this.spinner = false, 54000)
            setTimeout(() => this.winnerText = 'Победитель ' + this.userName.name + ' ' + this.userName.lastname, 55000)
            setTimeout(this.winner, 5000)
        },
        startCallBack: function (msg) {
            console.log(msg)
        },
          endCallBack: function (msg) {
            console.log(msg)
        }

    },
    mounted() {
        this.currentDate()
        this.$http.get('/api/getCountDown.php')
            .then(function(response) {
                console.log(response)
                self.startTime = response.data.start_time
                self.endTime1 = response.data.end_time
            })
            .catch(function(error) {
                console.log(error)
            })
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#first {
    background: url(/img/winner_bg.jpg) center center no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
}

#countdown-main{
    display: flex;
    align-items: center;
    justify-content: center;
}

#countdown-main div{
    text-align: center;
    margin: 0 3px;
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