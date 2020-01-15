<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="form-group">
                    <input class="form-control form-control-lg" type="text" placeholder="Введите промокод" id="promocode" v-model="promo" @input="promo = $event.target.value.toUpperCase()" :maxlength="maxPromo">
                    <button class="btn btn-lg btn-primary" @click="enterPromoCode" :disabled="promo.length < 10">Отправить</button>
                </div>
                <h3>{{ msg }}</h3>
            </div>
        </div>
    </div>
</template>
<script>
const axios = require('axios')
import { mask } from 'vue-the-mask'
export default {
    directives: { mask },
    data() {
        return {
            promo: '',
            maxPromo: 10,
            msg: ''
        }
    },
    methods: {
        enterPromoCode() {
            const self = this
            axios.post('https://denisdemchenko.ru/project/promo/api/enterPromo.php', {
                    lkuid: localStorage.getItem('lkuid'),
                    t: localStorage.getItem('t'),
                    promo: this.promo
                })
                .then(function(response) {
                    console.log(response)
                    self.msg = response.data.msg
                })
                .catch(function(error) {
                    console.log(error)
                });
        }
    }
}
</script>
<style scoped>
#promocode {
    text-align: center;
    font-size: 48px;
    margin: 30px 0;
}
</style>