<template>
    <div>
        <div id="lk">
            <div class="container">
                <div class="row" v-if="status == 1">
                    <div class="col-md-6 offset-md-3">
                        <div class="form-group">
                            <input class="form-control form-control-lg" type="text" placeholder="Зарегистрировать код" id="promocode" v-model="promo" @input="promo = $event.target.value.toUpperCase()" :maxlength="maxPromo">
                            <span class="help-block blue-color">Символ "Ø" соответствует цифре ноль.</span>
                            <div v-if="promo.length == 10 && isPromoValid == true">
                                <button class="btn btn-lg btn-primary btn-block" @click="enterPromoCode">Отправить</button>
                            </div>
                        </div>
                        <h3>{{ msg }}</h3>
                    </div>
                </div>
                <div class="row" v-if="status == 2">
                    <div class="col-md-12">
                        <h3 class="text-center">Аккаунт временно заблокирован. Обратитесь в службу поддержки.</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
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
                        <div class="card bg-light">
                            <div class="card-header color-blue">Данные аккаунта</div>
                            <div class="card-body">
                                <h5 class="card-title color-blue">{{ name }} {{ lastname }}</h5>
                                <p class="card-text"><i class="fas fa-envelope"></i> {{ email }}</p>
                                <p class="card-text"><i class="fas fa-phone"></i> {{ phone }}</p>
                                <p class="card-text"><i class="fas fa-calendar-alt"></i> {{ dateReg }}</p>
                                <button class="btn btn-primary" @click="logout">Выйти из личного кабинета <i class="fas fa-sign-out-alt"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div v-if="status == 0">
                            <h3 class="alert alert-info">Проверьте электронную почту и активируйте аккаунт!</h3>
                        </div>
                        <div v-else>
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Промокод</th>
                                        <th scope="col">Дата</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(code, index) in codes" :key="index">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ code.code }}</td>
                                        <td>{{ code.date_code }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
const axios = require('axios')
const promoCheckRegex = /^[A-Z0-9]+$/;
import { mask } from 'vue-the-mask'
import Footer from '@/components/Footer.vue'
export default {
    directives: { mask },
    components: {
        Footer
    },
    data() {
        return {
            name: '',
            lastname: '',
            email: '',
            phone: '',
            dateReg: '',
            status: '',
            codes: [],
            promo: '',
            maxPromo: 10,
            msg: '',
            startTime: '',
            endTime: '',
        }
    },
    methods: {
        logout: function() {
            this.$store.dispatch('logout')
                .then(() => {
                    this.$router.push('/')
                })
        },
        enterPromoCode() {
            const self = this
            axios.post('/api/enterPromo.php', {
                    lkuid: localStorage.getItem('lkuid'),
                    t: localStorage.getItem('t'),
                    promo: this.promo
                })
                .then(function(response) {
                    self.msg = response.data.msg
                    if(self.msg == 'Промокод успешно введен'){
                        self.$set(self.codes, self.codes.length, {date_code: response.data.date, code: response.data.promo})
                    }
                    self.promo = ''
                })
                .catch(function(error) {
                    console.log(error)
                });
        },
        startCallBack: function (msg) {
            console.log(msg)
        },
          endCallBack: function (msg) {
            console.log(msg)
        }
    },
    mounted() {
        const self = this
        this.$http.post('/api/secure.php', {
                lkuid: localStorage.getItem('lkuid'),
                t: localStorage.getItem('t')
            })
            .then(function(response) {
                self.name = response.data.name
                self.lastname = response.data.lastname
                self.email = response.data.email
                self.phone = response.data.phone
                self.status = response.data.status
                self.dateReg = response.data.date_registration
                self.codes = response.data.codes
            })
            .catch(function(error) {
                console.log(error)
            });
        this.$modal.hide('hello-world')
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
        isPromoValid() {
            return promoCheckRegex.test(this.promo)
        },
    },
}
</script>
<style scoped>
#countdown-main{
    display: flex;
    align-items: center;
    justify-content: center;
}

#countdown-main div{
    text-align: center;
    margin: 0 3px;
}

#lk {
    background-image: linear-gradient(180deg, #fff 0%, #e0f0ff 50%, #6b9dd0 100%);
    padding-bottom: 50px;
}
#promocode {
    text-align: center;
    font-size: 48px;
    margin: 30px 0;
    border: 3px solid #0e4194;
}
</style>