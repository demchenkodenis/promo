<template>
    <div class="drops">
        <h3 class="text-center start-action blue-color font-Pacifico">Наши победители:</h3>
        <u-animate-container>
            <u-animate name="fadeIn" delay="0s" duration="2s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>№ п/п</th>
                                        <th>Имя Фамилия</th>
                                        <th>Телефон</th>
                                        <th>Дата</th>
                                        <th>Видео</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in winners" :key="item.id">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ item.name }} {{ item.lastname }}</td>
                                        <td>{{ hidePhone[index] }}</td>
                                        <td>{{ item.start_time }}</td>
                                        <td><a :href="item.video" target="_blank">Видео</a></td>
                                    </tr>
                                    <tr>
                                        <td colspan="5">
                                            <p class="text-center">Розыгрыш состоится через:</p>
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
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </u-animate>
        </u-animate-container>
        <br><br><br>
        <Footer />
    </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
import { UAnimateContainer, UAnimate } from 'vue-wow'
export default {
    components: {
        Footer,
        UAnimateContainer,
        UAnimate,
    },
    data() {
        return {
            startTime: '',
            endTime: '',
            winners: []
        }
    },
    methods: {
        startCallBack: function (msg) {
            console.log(msg)
        },
          endCallBack: function (msg) {
            console.log(msg)
        }
    },
    mounted(){
        const self = this
        //данные победителей
        this.$http.get('/api/getWinners.php')
            .then(function(response){
                console.log(response)
                self.winners = response.data
            })
            .catch(function(error){
                console.log(error)
            })
        //данные таймера до начала акции
        this.$http.get('/api/getCountDown.php')
            .then(function(response){
                console.log(response)
                self.startTime = response.data.start_time
                self.endTime1 = response.data.end_time
            })
            .catch(function(error){
                console.log(error)
            })
    },
    computed: {
        hidePhone: function(){
            return this.winners.map(function(item){
                var str = item.phone[0] + item.phone[1] + item.phone[2] + item.phone[3] + '***' + item.phone[7] + item.phone[8] + '***' + item.phone[12] + item.phone[13] + item.phone[14] + item.phone[15] + item.phone[16]
                return str
            })
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.drops {
    margin-top: 50px;
    background-image: linear-gradient(180deg, #fff 0%, #e0f0ff 50%, #6b9dd0 100%);
    position: relative;
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
</style>