<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="form-group">
                    <input class="form-control form-control-lg" type="text" placeholder="Зарегистрировать код" id="promocode" v-model="promo" @input="promo = $event.target.value.toUpperCase()" :maxlength="maxPromo">
                    <div v-if="promo.length == 10 && isPromoValid == true">
                        <button class="btn btn-lg btn-primary btn-block" @click="enterPromoCode">Отправить</button>
                    </div>
                </div>
                <h3>{{ msg }}</h3>
            </div>
        </div>
    </div>
</template>
<script>
const axios = require('axios')
const promoCheckRegex = /^[A-Z0-9]+$/;
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
            axios.post('/api/enterPromo.php', {
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
    },
    computed: {
        isPromoValid() {
            return promoCheckRegex.test(this.promo)
        },
    },
}
</script>
<style scoped>
#promocode {
    text-align: center;
    font-size: 48px;
    margin: 30px 0;
    border: 3px solid #0e4194;
}
</style>