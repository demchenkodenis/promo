<template>
    <div>
        <modal class="modal-feedback" name="modal-feedback" height="auto" :scrollable="true" :delay="5" transition="ease-in-out">
            <Feedback />
        </modal>
        <p v-if="errors.length">
            <br>
            <b>Пожалуйста исправьте указанные ошибки:</b>
            <ul class="errors">
                <li v-for="error in errors" :key="error" class="alert alert-dismissible alert-danger">{{ error }}</li>
                <a href="#" @click="showFeedback">Не получается зарегистрироваться? Напишите в тех.поддержку</a>
                <Feedback />
            </ul>
        </p>
        <p v-if="countErrReg > 0">
            <br>
            <b>Пожалуйста исправьте указанные ошибки:</b>
            <ul class="errors">
                <li v-for="errRegistr in errorRegistr" :key="errRegistr" class="alert alert-dismissible alert-danger">{{ errRegistr }}</li>
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
                <input type="email" class="form-control" placeholder="Электронная почта" v-model="email">
            </div>
            <div class="form-group">
                <input type="tel" class="form-control" placeholder="Номер телефона" v-model="phone" masked="true" v-mask="'8 (###) ###-##-##'">
            </div>
            <div class="input-group ">
                <input :type="passwordFieldType" class="form-control" placeholder="Придумайте пароль для входа в личный кабинет" v-model="password">
                <div class="input-group-append">
                    <div class="input-group-text"><i :class="showPassIcon" @click="switchVisibility" aria-hidden="true"></i></div>
                </div>
            </div>
            <div class="form-check disabled">
                <input class="form-check-input" type="checkbox" value="" disabled="" checked="">
                <a href="/img/rules.pdf">Я согласен(а) c правилами Акции</a>
            </div>
            <div class="form-check disabled">
                <input class="form-check-input" type="checkbox" value="" disabled="" checked="">
                <a href="docs/sogl.pdf">Я согласен(а) на обработку персональных данных</a>
            </div>
            <!-- <div class="form-check disabled">
                <input class="form-check-input" type="checkbox" value="" disabled="" checked="">
                <a href="#">Я подтверждаю, что достиг(ла) 18-летнего возраста</a>
            </div> -->
            <div class="form-check disabled">
                <input class="form-check-input" type="hidden" value="" disabled="" checked="">
                <a href="#" @click="showFeedback">У меня возникла проблема с регистрацией.</a>
            </div>
            <br>
            <button type="submit" class="btn btn-primary btn-block">Зарегистрироваться</button>
        </form>
        <div v-html="noError"></div>
    </div>
</template>
<script>
import Feedback from '@/components/Feedback.vue'
import { mask } from 'vue-the-mask'
import { mapGetters } from 'vuex'
export default {
    directives: { mask },
    components: {
        Feedback
    },
    data() {
        return {
            name: '',
            lastname: '',
            email: '',
            phone: '',
            password: '',
            errors: [],
            noError: '',
            is_admin: null,
            showPassIcon: 'fa fa-eye',
            passwordFieldType: 'password',
            /* eslint-disable-next-line */
            reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
        }
    },
    methods: {
        register() {
            this.errors = []
            if (!this.name) this.errors.push('Требуется указать имя.')
            if (!this.lastname) this.errors.push('Требуется указать фамилию.')
            if (this.reg.test(this.email) == false) this.errors.push('Требуется указать валидный e-mail.')
            if (!this.phone) this.errors.push('Требуется указать телефон.')
            if (!this.password) this.errors.push('Требуется указать пароль.')

            if (this.name && this.lastname && this.email && this.phone && this.password) {
                let data = {
                    name: this.name,
                    lastname: this.lastname,
                    email: this.email,
                    phone: this.phone,
                    password: this.password
                }
                this.$store.dispatch('register', data)
                    .then(
                        () => this.$router.push('/secure')
                    )
                    .catch(err => console.log(err))
            }

        },
        switchVisibility() {
            this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
            this.showPassIcon = this.showPassIcon === 'fa fa-eye' ? 'fa fa-eye-slash' : 'fa fa-eye'
        },
        hideFeedback() {
            this.$modal.hide('modal-feedback')
        },
        showFeedback() {
            this.$modal.hide('hello-world')
            this.$modal.show('modal-feedback')
        }
    },
    computed: mapGetters(['errorRegistr', 'countErrReg']),
}
</script>
<style scoped>
form {
    padding: 30px;
}

p {
    margin: 30px 10px 0 30px;
}

ul {
    margin: 0;
    padding: 0;
}

.errors li {
    padding-left: 15px;
}
</style>