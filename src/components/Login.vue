<template>
    <div class="login-form">
        <form @submit.prevent="login" :class="loginForm">
            <br>
            <div class="input-group">
                <div class="input-group-prepend">
                    <label class="input-group-text">
                        <span class="input-group-addon"><i class="fas fa-phone"></i></span>
                    </label>
                </div>
                <input type="tel" class="form-control" placeholder="Номер телефона" v-model="phone" masked="true" v-mask="'8 (###) ###-##-##'">
            </div>
            <div class="input-group">
                 <div class="input-group-prepend">
                    <label class="input-group-text">
                        <span class="input-group-addon"><i class="fas fa-lock"></i></span>
                    </label>
                </div>
                <input type="password" class="form-control" placeholder="Пароль" v-model="password">
            </div>
            <div v-if="errorLog" class="alert alert-dismissible alert-danger">{{ errorLog }}</div>
            <button type="submit" class="btn btn-primary btn-block">Войти в личный кабинет</button>
        </form>
        <br>
        <form @submit.prevent="restorePassword" :class="restoreFormVisibility">
            <div class="form-group">
                <input type="email" class="form-control" placeholder="Введите электронную почту" v-model="restorePasswordEmail">
            </div>
            <button type="submit" class="btn btn-primary btn-block">Восстановить пароль</button>
            <br>
            <p>{{ msgRestorePass }}</p>
        </form>
        <p @click="showRestorePassword" class="res-pass">
            {{ rememberPass }}
        </p>
    </div>
</template>
<script>
import axios from 'axios'
import { mask } from 'vue-the-mask'
import { mapGetters } from 'vuex'
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
            rememberPass: 'Я не помню пароль',
            msgRestorePass: ''
        }
    },
    methods: {
        login() {
            let data = {
                phone: this.phone,
                password: this.password
            }
            this.$store.dispatch('login', data)
                .then(
                    () => this.$router.push('/secure')
                )
                .catch(err => console.log(err))
        },
        restorePassword() {
            var self = this
            axios.post('/api/restorePassword.php', {
                restoreEmail: this.restorePasswordEmail
            })
            .then(function (response) {
                self.msgRestorePass = response.data.msg
                if(self.msgRestorePass == 'Новый пароль отправлен вам на указанную почту'){
                    setTimeout(() => {
                        self.loginForm = 'show'
                        self.restoreFormVisibility = 'hide'
                    }, 5000)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        showRestorePassword() {
            this.restoreFormVisibility = this.restoreFormVisibility === 'hide' ? 'show' : 'hide'
            this.loginForm = this.loginForm === 'show' ? 'hide' : 'show'
            this.rememberPass = this.loginForm === 'show' ? 'Я не помню пароль' : 'Мне не нужно восстанавливать пароль'
        }
    },
    computed: mapGetters(['errorLog']),
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
.input-group{
    margin-bottom: 10px;
}
</style>