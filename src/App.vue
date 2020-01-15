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
                                <a class="nav-link active" data-toggle="tab" href="#registr">Регистрация</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#profile">Личный кабинет</a>
                            </li>
                        </ul>
                        <div id="myTabContent" class="tab-content">
                            <div class="tab-pane fade show active" id="registr">
                                <Registr />
                            </div>
                            <div class="tab-pane fade" id="profile">
                                <Login />
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
                    <li class="nav-item" v-if="!isLoggedIn">
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#regModal">
                            Личный кабинет
                        </button>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" v-if="isLoggedIn" to="/secure">Личный кабинет</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <router-view />
    </div>
</template>
<script>
import Login from '@/components/Login.vue'
import Registr from '@/components/Registr.vue'
export default {
    components: {
        Login,
        Registr
    },
    data() {
        return {

        }
    },
    computed: {
        isLoggedIn: function() { return this.$store.getters.isLoggedIn }
    },
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