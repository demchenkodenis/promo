<template>
    <div id="app">
        <div class="modal fade" id="regModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Регистрация / Личный кабинет</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#home">Регистрация</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#profile">Личный кабинет</a>
                            </li>
                        </ul>
                        <div id="myTabContent" class="tab-content">
                            <div class="tab-pane fade show active" id="home">
                                <p v-if="errors.length">
                                    <br>
                                    <b>Пожалуйста исправьте указанные ошибки:</b>
                                    <ul class="errors">
                                        <li v-for="error in errors" :key="error" class="alert alert-dismissible alert-danger">{{ error }}</li>
                                    </ul>
                                </p>
                                <p v-if="errorsRegistr.length">
                                    <br>
                                    <b>Пожалуйста исправьте указанные ошибки:</b>
                                    <ul class="errors">
                                        <li v-for="errorRegistr in errorsRegistr" :key="errorRegistr" class="alert alert-dismissible alert-danger">{{ errorRegistr }}</li>
                                    </ul>
                                </p>
                                <form @submit.prevent="register">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Введите имя" v-model="name">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Введите фамилию" v-model="lastname">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Населенный пункт" v-model="city">
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" placeholder="Электронная почта" v-model="email">
                                    </div>
                                    <div class="form-group">
                                        <input type="tel" class="form-control" placeholder="Номер телефона" v-model="phone" masked="true" v-mask="'+7 (###) ###-##-##'">
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Придумайте пароль для входа в личный кабинет" v-model="password">
                                    </div>
                                    <div class="form-check disabled">
                                        <input class="form-check-input" type="checkbox" value="" disabled="" checked="">
                                        <a href="#">«Я согласен(а) c правилами Акции»</a>
                                    </div>
                                    <div class="form-check disabled">
                                        <input class="form-check-input" type="checkbox" value="" disabled="" checked="">
                                        <a href="#">«Я согласен(а) с пользовательским соглашением и согласен(а) на обработку персональных данных»</a>
                                    </div>
                                    <div class="form-check disabled">
                                        <input class="form-check-input" type="checkbox" value="" disabled="" checked="">
                                        <a href="#">«Я подтверждаю, что достиг 18-летнего возраста»</a>
                                    </div>
                                    <br>
                                    <button type="submit" class="btn btn-success">Зарегистрироваться</button>
                                </form>
                                <div v-html="noError"></div>
                            </div>
                            <div class="tab-pane fade" id="profile">
                                <form @submit.prevent="auth">
                                    <br>
                                    <div class="form-group">
                                        <input type="tel" class="form-control" placeholder="Номер телефона" v-model="lkPhone" masked="true" v-mask="'+7 (###) ###-##-##'">
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Пароль" v-model="lkPassword">
                                    </div>
                                    <button type="submit" class="btn btn-success">Войти в личный кабинет</button>
                                </form>
                                <div v-html="errorLk"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Майская Хрустальная</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navb" aria-controls="navb" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navb">
                <ul class="navbar-nav mr-auto" id="nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Главная</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/prizes">Призы</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/rules">Правила</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/faq">Вопрос-ответ</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/winners">Победители</router-link>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#regModal">
                            Ввести промокод
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
        <router-view />
    </div>
</template>
<script>
const axios = require('axios')
import { mask } from 'vue-the-mask'
export default {
    directives: { mask },
    data() {
        return {
            name: '',
            lastname: '',
            city: '',
            email: '',
            phone: '',
            password: '',
            lkPhone: '',
            lkPassword: '',
            errors: [],
            errorsRegistr: [],
            noError: '',
            errorLk: ''
        }
    },
    methods: {
        register() {
            this.errorsRegistr = []
            this.errors = []
            var self = this
            if (!this.name) {
                this.errors.push('Требуется указать имя.');
            }
            if (!this.lastname) {
                this.errors.push('Требуется указать фамилию.');
            }
            if (!this.city) {
                this.errors.push('Требуется указать населенный пункт.');
            }
            if (!this.email) {
                this.errors.push('Требуется указать e-mail.');
            }
            if (!this.phone) {
                this.errors.push('Требуется указать телефон.');
            }
            if (!this.password) {
                this.errors.push('Требуется указать пароль.');
            }

            if (this.name && this.lastname && this.city && this.email && this.phone && this.password) {
                axios.post('https://denisdemchenko.ru/project/promo/api/registration.php', {
                        name: this.name,
                        lastname: this.lastname,
                        city: this.city,
                        email: this.email,
                        phone: this.phone,
                        password: this.password
                    })
                    .then(function(response) {
                        if (response.data.error.length == 0) {
                            localStorage.setItem('lkuid', response.data.lkuid);
                            localStorage.setItem('t', response.data.t);
                            self.noError = '<p class="alert alert-dismissible alert-success">Вы успешно зарегистрировались, проверьте электронную почту для активации личного кабинета.</p>'

                        } else {
                            self.errorsRegistr.push(response.data.error);
                        }
                    })
                    .catch(function(error) {
                        console.log(error)
                    });
            }
        },
        auth() {
            var self = this
            axios.post('https://denisdemchenko.ru/project/promo/api/auth.php', {
                    lkPhone: this.lkPhone,
                    lkPassword: this.lkPassword
                })
                .then(function(response) {
                    if (response.data.error.length == 0) {
                        localStorage.setItem('lkuid', response.data.lkuid);
                        localStorage.setItem('t', response.data.t);
                    } else {
                        self.errorLk.push('<p class="alert alert-dismissible alert-danger">' + response.data.error + '</p>');
                    }
                })
                .catch(function(error) {
                    console.log(error)
                });
        }
    }
}
</script>
<style scoped>
.container {
    margin-top: 30px;
}

.nav-tabs {
    display: flex;
    justify-content: center;
}

form {
    margin: 30px 0 15px;
}

.form-check {
    display: flex;
}

.errors {
    margin: 10px 0;
    padding: 0;
}

ul#nav li a {
    font-weight: bold;
    color: #222;
}

ul#nav li a.router-link-exact-active {
    color: #42b983;
}
</style>