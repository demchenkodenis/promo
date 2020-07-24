<template>
    <div class="text-center">
        <form class="form-signin" @submit.prevent="auth">
            <img class="mb-4" src="img/logo.png" alt="">
            <h1 class="h3 mb-3 font-weight-normal">Вход</h1>
            <input type="text" v-model="email" class="form-control" placeholder="Номер телефона" masked="true" v-mask="'8 (###) ###-##-##'" required>
            <input type="password" v-model="pass" class="form-control" placeholder="Пароль" required>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Войти</button>
            <br>
            <p :class="{ alert: error, 'alert-danger': error }">{{ error }}</p>
        </form>
    </div>
</template>
<script>
import { mask } from 'vue-the-mask'
export default {
	directives: { mask },
    data() {
        return {
            email: '',
            pass: '',
            error: ''
        }
    },
    methods: {
        auth() {
            const self = this
            this.$http.post('/api/authAdm.php', {
                    email: this.email,
                    password: this.pass
                })
                .then(function(res) {
                    if (res.data.status === 'ok') {
                        localStorage.setItem('uid', res.data.uid)
                        localStorage.setItem('t', res.data.t)
                        self.$router.push(res.data.url)
                    } else {
                        self.error = res.data.error
                    }
                })
                .catch(function(error) {
                    console.log(error)
                });
        },
    }
}
</script>
<style scoped>
.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 10% auto 0;
}

input {
    margin-bottom: 10px;
}
</style>