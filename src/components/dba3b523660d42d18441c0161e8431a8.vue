<template>
    <div class="container" id="stats">
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        Количество пользователей:
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <h3 class="text-center">{{ users }}</h3>
                        </blockquote>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        Количество активированных кодов:
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <h3 class="text-center">{{ codes }}</h3>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <p>Проверить существование кода</p>
                <form class="form-inline" @submit.prevent="getCode">
                    <div class="form-group mb-2">
                        <label for="code">Код</label>
                        <input class="form-control form-control-lg" type="text" placeholder="Зарегистрировать код" id="promocode" v-model="promo" @input="promo = $event.target.value.toUpperCase()" :maxlength="maxPromo">
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">Отправить</button>
                </form>
                <p>{{ msg }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <p>Найти пользователя по телефону</p>
                <form class="form-inline" @submit.prevent="getUserInfo">
                    <div class="form-group mb-2">
                        <label for="phone">Найти пользователя</label>
                        <input type="text" class="form-control" id="phone" v-model="phone" placeholder="Номер телефона" masked="true" v-mask="'8 (###) ###-##-##'">
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">Отправить</button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <p>Найти пользователя по e-mail</p>
                <form class="form-inline" @submit.prevent="getUserInfoEmail">
                    <div class="form-group mb-2">
                        <label for="email">Найти пользователя</label>
                        <input type="email" class="form-control" id="email" v-model="email" placeholder="Номер e-mail">
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">Отправить</button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        Информация о пользователе:
                    </div>
                    <div class="card-body">
                        <p><span>Имя:</span> {{ userInfo.name }}</p>
                        <p><span>Фамилия:</span> {{ userInfo.lastname }}</p>
                        <p><span>E-mail:</span> {{ userInfo.email }}</p>
                        <p><span>Телефон:</span> {{ userInfo.phone }}</p>
                        <p><span>Дата регистрация:</span> {{ userInfo.date_registration }}</p>
                        <p v-if="userInfo.status == 1"><span>Статус аккаунта:</span> Активирован</p>
                        <p v-else><span>Статус аккаунта:</span> Не активирован <button class="btn btn-primary" @click="activate">Активировать</button></p>
                        <p>{{ msgActivate }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        Коды пользователя:
                    </div>
                    <div class="card-body">
                        <div v-if="userCodes == ''">Нет активированных кодов</div>
                        <div v-else>
                            <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">код</th>
                                        <th scope="col">дата</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in userCodes" :key="item.id">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ item.code }}</td>
                                        <td>{{ item.date_code }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
const promoCheckRegex = /^[A-Z0-9]+$/;
import { mask } from 'vue-the-mask'
export default {
    directives: { mask },
    data() {
        return {
            users: '',
            codes: '',
            phone: '',
            userInfo: [],
            userCodes: [],
            msgActivate: '',
            email: '',
            promo: '',
            maxPromo: 10,
            msg: ''
        }
    },
    methods: {
        getUserInfo() {
            const self = this
            this.$http.post('/api/getUserInfo.php', {
                    phone: self.phone
                })
                .then(function(response) {
                    self.userInfo = response.data.user
                    self.userCodes = response.data.codes
                })
                .catch(function(error) {
                    console.log(error)
                });
        },
        getUserInfoEmail() {
            const self = this
            this.$http.post('/api/getUserInfo.php', {
                    email: self.email
                })
                .then(function(response) {
                    self.userInfo = response.data.user
                    self.userCodes = response.data.codes
                })
                .catch(function(error) {
                    console.log(error)
                });
        },
        activate() {
            const self = this
            this.$http.post('/api/activateUser.php', {
                    id: this.userInfo.id
                })
                .then(function(response) {
                    self.userInfo.id = response.data.status
                    self.msgActivate = response.data.msg
                    console.log()
                })
                .catch(function(error) {
                    console.log(error)
                });
        },
        getCode() {
            const self = this
            this.$http.post('/api/findCode.php', {
                    code: self.promo
                })
                .then(function(response) {
                    self.msg = response.data.promo
                })
                .catch(function(error) {
                    console.log(error)
                });
        }
    },
    mounted() {
        const self = this
        this.$http.get('/api/dba3b523660d42d18441c0161e8431a8.php')
            .then(function(response) {
                self.users = response.data.users
                self.codes = response.data.codes
            })
            .catch(function(error) {
                console.log(error)
            });
    },
    computed: {
        isPromoValid() {
            return promoCheckRegex.test(this.promo)
        },
    },
}
</script>
<style scoped>
#stats {
    margin-top: 50px;
}

p span {
    font-weight: bold;
}

form {
    margin: 30px 0;
    border: 1px solid #aaa;
    padding: 30px;
    border-radius: 6px;
}

form input {
    margin: 0 10px;
}
</style>