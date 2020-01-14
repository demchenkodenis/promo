<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="form-group">
                    <input class="form-control form-control-lg" type="text" placeholder="Введите промокод" id="promocode" v-model="promo" @input="promo = $event.target.value.toUpperCase()" :maxlength="maxPromo">
					<button class="btn btn-lg btn-primary">Отправить</button>
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
            axios('/users')
        }
    },
    filters: {
        capitalize: function(value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#promocode {
    text-align: center;
    font-size: 48px;
    margin: 30px 0;
}
</style>