<template>
    <div class="container" id="stats">
        <div class="jumbotron">
            <h1 class="text-center" style="font-size: 3rem;">ТОП Участников</h1>
            <div id="top">
                <div class="row">
                    <div class="col-md-4 offset-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title text-center">ТОP 1 <br>Количество зарегистрированных крышек: {{ top3[0].count_code }}</h5>
                                <p class="card-text text-center">{{ top3[0].name }} {{ top3[0].lastname }}</p>
                                <p class="card-text text-center">{{ top3[0].phone }} <br> {{ top3[0].email }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title text-center">ТОP 2 <br>Количество зарегистрированных крышек: {{ top3[1].count_code }}</h5>
                                <p class="card-text text-center">{{ top3[1].name }} {{ top3[1].lastname }}</p>
                                <p class="card-text text-center">{{ top3[1].phone }} <br> {{ top3[1].email }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title text-center">ТОP 3 <br>Количество зарегистрированных крышек: {{ top3[2].count_code }}</h5>
                                <p class="card-text text-center">{{ top3[2].name }} {{ top3[2].lastname }}</p>
                                <p class="card-text text-center">{{ top3[2].phone }} <br> {{ top3[2].email }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        Претензионный процент:
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <h3 class="text-center">{{ countFeedback }}%</h3>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <p>Проверить существование кода</p>
                    </div>
                    <div class="card-body">
                        <form class="form-inline" @submit.prevent="getCode">
                            <div class="form-group mb-2">
                                <label for="code">Код</label>
                                <input class="form-control" type="text" placeholder="Зарегистрировать код" id="promocode" v-model="promo" @input="promo = $event.target.value.toUpperCase()" :maxlength="maxPromo">
                            </div>
                            <button type="submit" class="btn btn-primary mb-2">Отправить</button>
                        </form>
                    </div>
                    <div class="card-footer">
                        <p>{{ msg }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h3 class="text-center">Поиск пользователей</h3>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <p>Найти пользователя по телефону</p>
                    </div>
                    <div class="card-body">
                        <form class="form-inline" @submit.prevent="getUserInfo">
                            <div class="form-group mb-2">
                                <label for="phone">Найти пользователя</label>
                                <input type="text" class="form-control" id="phone" v-model="phone" placeholder="Номер телефона" masked="true" v-mask="'8 (###) ###-##-##'">
                            </div>
                            <button type="submit" class="btn btn-primary mb-2">Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <p>Найти пользователя по e-mail</p>
                    </div>
                    <div class="card-body">
                        <form class="form-inline" @submit.prevent="getUserInfoEmail">
                            <div class="form-group mb-2">
                                <label for="email">Найти пользователя</label>
                                <input type="email" class="form-control" id="email" v-model="email" placeholder="Номер e-mail">
                            </div>
                            <button type="submit" class="btn btn-primary mb-2">Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        Информация о пользователе:
                    </div>
                    <div class="card-body">
                        <p>
                            <span>Имя:</span> {{ userInfo.name }}
                        </p>
                        <p>
                            <span>Фамилия:</span> {{ userInfo.lastname }}
                        </p>
                        <p>
                            <span v-if="!isEditingEmail">E-mail: {{ userInfo.email }}</span>
                            <input type="text" class="form-control" v-model="userInfo.email" v-value="userInfo.email" v-else>
                            <button class="btn btn-primary btn-sm" @click="editEmail" v-if="!isEditingEmail">
                                <i class="fas fa-pencil-alt"></i>
                            </button>
                            <button class="btn btn-success btn-sm" @click="saveEmail" v-if="isEditingEmail"><i class="fas fa-check"></i></button>
                            <button class="btn btn-danger btn-sm" @click="cancelEmail" v-if="isEditingEmail"><i class="far fa-window-close"></i></button>
                        </p>
                        <p>
                            <span v-if="!isEditingPhone">Телефон: {{ userInfo.phone }}</span>
                            <input type="text" class="form-control" v-model="userInfo.phone" v-value="userInfo.phone" v-else>
                            <button class="btn btn-primary btn-sm" @click="editPhone" v-if="!isEditingPhone">
                                <i class="fas fa-pencil-alt"></i>
                            </button>
                            <button class="btn btn-success btn-sm" @click="savePhone" v-if="isEditingPhone"><i class="fas fa-check"></i></button>
                            <button class="btn btn-danger btn-sm" @click="cancelPhone" v-if="isEditingPhone"><i class="far fa-window-close"></i></button>
                        </p>
                        <p><span>Дата регистрация:</span> {{ userInfo.date_registration }}</p>
                        <p v-if="userInfo.status == 1">
                            <span>Статус аккаунта:</span> Активирован
                            <button class="btn btn-danger" @click="ban">БАН!</button>
                        </p>
                        <p v-else-if="userInfo.status == 2">
                            <span>Статус аккаунта:</span> Забанен
                        </p>
                        <p v-else>
                            <span>Статус аккаунта:</span> Не активирован
                            <button class="btn btn-primary" @click="activate">Активировать</button>
                        </p>
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
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <p>Количество зарегистрированных пользователей за определенную дату <br>Введите даты</p>
                    </div>
                    <div class="card-body">
                        <form class="form-inline" @submit.prevent="getCountUsersDate">
                            <div class="form-group mb-2">
                                <label>Первая дата</label>
                                <input type="date" class="form-control" v-model="firstDate">
                            </div>
                            <div class="form-group mb-2">
                                <label>Вторая дата</label>
                                <input type="date" class="form-control" v-model="lastDate">
                            </div>
                            <button type="submit" class="btn btn-primary mb-2">Отправить</button>
                        </form>
                    </div>
                    <div class="card-footer">
                        <p class="text-center" v-if="count_users_date">Количество пользователей за период с {{ firstDate }} по {{ lastDate }}</p>
                        <p class="text-center">{{count_users_date}} пользователей</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <p>Количество зарегистрированных промокодов за определенную дату <br>Введите даты</p>
                    </div>
                    <div class="card-body">
                        <form class="form-inline" @submit.prevent="getCountCodesDate">
                            <div class="form-group mb-2">
                                <label>Первая дата</label>
                                <input type="date" class="form-control" v-model="firstDateCode">
                            </div>
                            <div class="form-group mb-2">
                                <label>Вторая дата</label>
                                <input type="date" class="form-control" v-model="lastDateCode">
                            </div>
                            <button type="submit" class="btn btn-primary mb-2">Отправить</button>
                        </form>
                    </div>
                    <div class="card-footer">
                        <p class="text-center" v-if="count_codes_date">Количество кодов за период с {{ firstDateCode }} по {{ lastDateCode }}</p>
                        <p class="text-center">{{count_codes_date}} кодов</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <form class="form-inline" @submit.prevent="getCountCodesUser">
                    <div class="form-group mb-2">
                        <label>Количество кодов</label>
                        <input type="text" class="form-control" v-model="count_codes">
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">Отправить</button>
                </form>
            </div>
            <div class="col-md-6">
                <table class="table table-hover">
                    <tr v-for="(item, index) in list_users_period" :key="item.id">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.lastname }}</td>
                        <td>{{ item.phone }}</td>
                        <td>{{ item.codes }}</td>
                        <td><button class="btn btn-danger" @click="banUserPeriod(item.id)">Бан</button></td>
                        <td v-if="item.ban != null">Не участвует</td>
                        <td v-else>Участвует</td>
                    </tr>
                </table>
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
            msg: '',
            countFeedback: '',
            top3: [],
            count_users_date: '',
            count_codes_date: '',
            count_codes: '',
            list_users_period: [],
            firstDate: '',
            lastDate: '',
            isEditingEmail: false,
            isEditingPhone: false
        }
    },
    methods: {
        banUserPeriod(id){
            this.$http.post('/api/banUserPeriod.php', {
                    id: id
                })
                .then(function(response) {
                    alert(response.data.ok)
                })
                .catch(function(error) {
                    console.log(error)
                });
        },
        getCountCodesUser(){
            const self = this
            this.$http.post('/api/usersPeriod.php', {
                    count_codes: this.count_codes
                })
                .then(function(response) {
                    self.list_users_period = response.data.users_period
                })
                .catch(function(error) {
                    console.log(error)
                });
        },
        ban() {
            this.$http.post('/api/banUser.php', {
                    id: this.userInfo.id
                })
                .then(function(response) {
                    alert(response.data.ok)
                })
                .catch(function(error) {
                    console.log(error)
                });
        },
        editEmail() {
            this.isEditingEmail = true
        },
        saveEmail() {
            this.$http.post('/api/updateEmailUser.php', {
                    id: this.userInfo.id,
                    email: this.userInfo.email
                })
                .then(function(response) {
                    alert(response.data.ok)
                    this.cancelEmail
                })
                .catch(function(error) {
                    console.log(error)
                });
        },
        cancelEmail() {
            this.userInfo.email = this.userInfo.email
            this.isEditingEmail = false
        },
        editPhone() {
            this.isEditingPhone = true
        },
        savePhone() {
            this.$http.post('/api/updatePhoneUser.php', {
                    id: this.userInfo.id,
                    phone: this.userInfo.phone
                })
                .then(function(response) {
                    alert(response.data.ok)
                    this.cancelPhone
                })
                .catch(function(error) {
                    console.log(error)
                });
        },
        cancelPhone() {
            this.userInfo.email = this.userInfo.email
            this.isEditingPhone = false
        },
        getCountUsersDate() {
            const self = this
            this.$http.post('/api/getCountUsersDate.php', {
                    firstDate: this.firstDate,
                    lastDate: this.lastDate
                })
                .then(function(response) {
                    self.count_users_date = response.data.count_users
                })
                .catch(function(error) {
                    console.log(error)
                });
        },
        getCountCodesDate() {
            const self = this
            this.$http.post('/api/getCountCodesDate.php', {
                    firstDate: this.firstDateCode,
                    lastDate: this.lastDateCode
                })
                .then(function(response) {
                    self.count_codes_date = response.data.count_codes
                })
                .catch(function(error) {
                    console.log(error)
                });
        },
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
                self.countFeedback = response.data.count_feedback
                self.top3 = response.data.top3
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

#top {
    margin-bottom: 50px;
}

p span {
    font-weight: bold;
}

form {
    margin: 30px 0;
    padding: 15px;
    border-radius: 6px;
}

form input {
    margin: 0 10px;
}

.card {
    margin-bottom: 30px;
}

.btn-sm {
    margin: 2px 5px;
}
</style>