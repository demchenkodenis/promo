<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="form-group">
                    <input class="form-control form-control-lg" type="text" placeholder="Введите промокод" id="promocode" v-model="promo" @input="promo = $event.target.value.toUpperCase()" :maxlength="maxPromo">
					<button class="btn btn-lg btn-primary" @click="enterPromoCode">Отправить</button>
                </div>
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
            maxPromo: 10
        }
    },
    methods: {
        enterPromoCode() {
            axios.post('https://denisdemchenko.ru/project/promo/api/enterPromo.php', {
                    lkuid: localStorage.getItem('lkuid'),
                    t: localStorage.getItem('t'),
                    promo: this.promo
                })
                .then(function(response) {
                    console.log(response)
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