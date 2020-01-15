<template>
    <div>
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
</template>
<script>
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
            errors: [],
            errorsRegistr: [],
            noError: '',
            is_admin: null,
        }
    },
    methods: {
        register() {
            this.errorsRegistr = []
            this.errors = []

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

                let data = {
                    name: this.name,
                    lastname: this.lastname,
                    city: this.city,
                    email: this.email,
                    phone: this.phone,
                    password: this.password,
                    is_admin: this.is_admin
                }
                this.$store.dispatch('register', data)
                    .then(() => this.$router.push('/checkMail'))
                    .catch(err => console.log(err))
            }
        },
    }
}
</script>
<style scoped>
form{
    margin: 30px;
}
</style>