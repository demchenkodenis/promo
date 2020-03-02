<template>
    <div class="login-form">
        <form @submit.prevent="login" :class="loginForm">
            <br>
            <div class="form-group">
                <input type="tel" class="form-control" placeholder="Номер телефона" v-model="phone" masked="true" v-mask="'+7 (###) ###-##-##'">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" placeholder="Пароль" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary">Войти в личный кабинет</button>
        </form>
        <br>
        <p @click="showRestorePassword" class="res-pass">
            {{ rememberPass }}
        </p>
        <form @submit.prevent="restorePassword" :class="restoreFormVisibility">
            <div class="form-group">
                <input type="email" class="form-control" placeholder="Введите электронную почту" v-model="restorePasswordEmail">
            </div>
            <button type="submit" class="btn btn-primary">Восстановить пароль</button>
        </form>
        <div v-html="error"></div>
    </div>
</template>
<script>
import axios from 'axios'
import { mask } from 'vue-the-mask'
export default {
    directives: { mask },
    data() {
        return {
            phone: '',
            password: '',
            error: '',
            restorePasswordEmail: '',
            restoreFormVisibility: 'hide',
            loginForm: 'show',
            rememberPass: 'Я не помню пароль'
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
        },
        restorePassword() {
            axios({ url: 'https://maycrystal-promo.ru/api/restorePassword.php', restoreEmail: this.restorePasswordEmail, method: 'POST' })
                .then(resp => {
                    console.log(resp)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        showRestorePassword() {
            this.restoreFormVisibility = this.restoreFormVisibility === 'hide' ? 'show' : 'hide'
            this.loginForm = this.loginForm === 'show' ? 'hide' : 'show'
            this.rememberPass = this.loginForm === 'show' ? 'Я не помню пароль' : 'Мне не нужно восстанавливать пароль'
        }
    }
}
</script>
<style scoped>
.login-form {
    margin: 5px 30px 30px 30px;
}

ul {
    margin: 0;
    padding: 0;
}

.hide {
    display: none;
}

.show {
    display: block;
}

.res-pass {
    cursor: pointer;
}
</style>