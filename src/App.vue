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
        <img src="img/flower1.png" alt="" id="flower1">
        <img src="img/flower2.png" alt="" id="flower2">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <a class="navbar-brand" href="#">
                            <img src="img/logo.png" alt="">
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navb" aria-controls="navb" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navb">
                            <ul class="navbar-nav" id="nav">
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
                                    <button type="button" class="btn btn-lg btn-primary" data-toggle="modal" data-target="#regModal">
                                        Личный кабинет
                                    </button>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" v-if="isLoggedIn" to="/secure">Личный кабинет</router-link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
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
<style>
/* other styles */
.margin-15 {
    margin: 15px 0;
}

.margin-30 {
    margin: 30px 0;
}

.margin-45 {
    margin: 45px 0;
}

.margin-60 {
    margin: 60px 0;
}

.f-size-24 {
    font-size: 24px;
}

.f-size-18 {
    font-size: 18px;
}

.f-size-42 {
    font-size: 42px;
}

.font-Pacifico {
    font-family: 'Pacifico', cursive;
}

.blue-color {
    color: #0e4194;
}

.blue-bg {
    background-color: #0e4194;
}
#flower1 {
    position: absolute;
    top: 150px;
    left: 0;
    max-width: 100%;
    z-index: 9999
}

#flower2 {
    position: absolute;
    top: 0;
    right: 0;
    max-width: 100%;
    z-index: 9999
}

nav {
    background: #fff;
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

/* media */
@media screen and (max-width: 1440px) {
    #flower1 {
        position: absolute;
        top: 30px;
        left: 0;
        max-width: 100%;
    }
}

@media screen and (max-width: 960px) {

    #flower1,
    #flower2,
        {
        display: none;
    }
}
</style>