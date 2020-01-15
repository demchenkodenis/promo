<template>
    <div>
        <form @submit.prevent="login">
            <br>
            <div class="form-group">
                <input type="tel" class="form-control" placeholder="Номер телефона" v-model="phone" masked="true" v-mask="'+7 (###) ###-##-##'">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" placeholder="Пароль" v-model="password">
            </div>
            <button type="submit" class="btn btn-success">Войти в личный кабинет</button>
        </form>
        <div v-html="error"></div>
    </div>
</template>
<script>
import { mask } from 'vue-the-mask'
export default {
    directives: { mask },
    data() {
        return {
            phone: '',
            password: '',
            error: ''
        }
    },
    methods: {
        login() {
            let data = {
                phone: this.phone,
                password: this.password
            }
            this.$store.dispatch('login', data)
                .then(() => this.$router.push('/secure'))
                .catch(err => console.log(err))
        }
    }
}
</script>
<style scoped>
form{
    margin: 30px;
}
</style>