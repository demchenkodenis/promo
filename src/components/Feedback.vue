<template>
    <div class="feedback-form">
        <h5>Правила</h5>
        <div id="tabs" class="container-tabs">
            <div class="content">
                <form @submit.prevent="submit">
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
                    <button type="submit" class="btn btn-primary btn-block">Войти в личный кабинет</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
// import axios from 'axios'
import { mask } from 'vue-the-mask'
export default {
    directives: { mask },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
<style scoped>
</style>