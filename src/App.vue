<template>
    <div id="app">
        <Feedback />
        <modal class="modal-reg" name="hello-world" height="auto" adaptive="true" :scrollable="true" :delay="5" transition="ease-in-out">
            <button type="button" class="close" style="color: #222; margin: 10px;" data-dismiss="modal" aria-label="Close" @click="hideReg"><span aria-hidden="true">&times;</span></button>
            <h5 class="blue-color">Регистрация / Личный кабинет</h5>

            <div id="tabs" class="container-tabs">
                <div class="tabs">
                    <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">Регистрация</a>
                    <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">Личный кабинет</a>
                </div>
                <div class="content">
                    <div v-if="activetab === 1" class="tabcontent">
                        <Registr />
                    </div>
                    <div v-if="activetab === 2" class="tabcontent">
                        <Login />
                    </div>
                </div>
            </div>
        </modal>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <router-link class="navbar-brand" to="/">
                            <img src="img/logo.png" alt="">
                        </router-link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navb" aria-controls="navb" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navb">
                            <ul class="navbar-nav ml-md-auto" id="nav">
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/">Главная</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/winners">Победители</router-link>
                                </li>
                                <li class="nav-item">
                                    <a href="img/rules.pdf" class="nav-link" target="_blank">Правила</a>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/faq">Вопрос-ответ</router-link>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link" @click="showFeedback">Обратная связь</a>
                                </li>
                                <li class="nav-item" v-if="!isLoggedIn">
                                    <router-link class="nav-link btn btn-primary" style='color: #fff;' to="/loginreg">
                                        Личный кабинет
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" style="text-decoration: underline;" v-if="isLoggedIn" to="/secure">Здравствуйте {{ name }} {{ lastname }}</router-link>
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
import Feedback from '@/components/Feedback.vue'
import axios from 'axios'
export default {
    components: {
        Login,
        Registr,
        Feedback
    },
    data() {
        return {
            activetab: 1,
            name: '',
            lastname: '',
            minWidthModalRules: ''
        }
    },
    computed: {
        isLoggedIn: function() {
            return this.$store.getters.isLoggedIn
        }
    },
    methods: {
        showReg() {
            this.$modal.show('hello-world')
        },
        hideReg() {
            this.$modal.hide('hello-world')
        },
        showRules() {
            this.$modal.show('rules')
        },
        hideFeedback() {
            this.$modal.hide('modal-feedback')
        },
        showFeedback() {
            this.$modal.show('modal-feedback')
        }
    },
    mounted: function() {
        const self = this
        var id = localStorage.getItem('lkuid')
        var token = localStorage.getItem('t');
        if (id != null && token != null) {
            axios.post('/api/getUser.php', {
                    id: id,
                    token: token
                })
                .then(function(response) {
                    self.name = response.data.name
                    self.lastname = response.data.lastname
                })
                .catch(function(error) {
                    console.log(error)
                });
        }
    }
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

.f-size-18 {
    font-size: 18px;
}

.f-size-24 {
    font-size: 24px;
}

.f-size-35 {
    font-size: 35px;
}

.f-size-36 {
    font-size: 36px;
}

.f-size-42 {
    font-size: 42px;
}

.font-Pacifico {
    font-family: 'MyriadPro', cursive;
}

.blue-color {
    color: #0e4194;
}

.blue-bg {
    background-color: #0e4194;
}

#clouds {
    position: absolute;
    top: 100px;
    left: 0;
    max-width: 100%;
    z-index: 1;
}

#sun {
    position: absolute;
    top: 65px;
    right: 10px;
    max-width: 100%;
    z-index: 1;
}

nav {
    background: #fff;
}

.nav-tabs {
    display: flex;
    justify-content: center;
}

.form-check {
    display: flex;
}

.errors {
    margin: 10px 0;
    padding: 0;
}

ul#nav li {
    margin-left: 15px;
}

ul#nav li a {
    font-weight: bold;
    color: #555;
}

ul#nav li a.router-link-exact-active {
    color: #0e4194;
}

/* modal */
.modal-reg h5 {
    padding: 15px;
    color: #0e4194;
}

/* Style the tabs */
.tabs {
    overflow: hidden;
    margin-left: 20px;
    display: flex;
    justify-content: center;
}

.tabs ul {
    list-style-type: none;
    margin-left: 20px;
}

.tabs a {
    float: left;
    cursor: pointer;
    padding: 12px 24px;
    transition: background-color 0.2s;
    border: 1px solid #b6cff7;
    border-right: none;
    background-color: #fff;
    border-radius: 10px 10px 0 0;
    font-weight: bold;
}

.tabs a:last-child {
    border-right: 1px solid #b6cff7;
}

/* Change background color of tabs on hover */
.tabs a:hover {
    background-color: #aaa;
    color: #fff;
}

/* Styling for active tab */
.tabs a.active {
    background-color: #b6cff7;
    color: #fff;
    border-bottom: 2px solid #b6cff7;
    background-color: #b6cff7;
    color: #0e4194;
    border-bottom: 2px solid #b6cff7;
    cursor: default;
}

/* Style the tab content */
.tabcontent {
    padding: 0 30px 0 0;
    border-top: 1px solid #b6cff7;
    background: #b6cff7;
}

/* Small devices (tablets, 768px and up) */
@media (min-width: @screen-sm-min) {

    #clouds,
    #sun,
    #second #iphonexr,
    #bottles,
    .red-arrow,
    .red-arrow-2,
    #prize-text{
        display: none;
    }

    #first,
    #second {
        height: inherit;
    }

    #main p,
    #main p span {
        font-size: 2rem;
    }

    #promocode{
        font-size: 22px;
    }
}

/* Medium devices (desktops, 992px and up) */
@media (min-width: @screen-md-min) {
    #clouds,
    #sun,
    #second #iphonexr,
    #second #prize,
    .red-arrow,
    .red-arrow-2,
    #prize-text {
        display: none;
    }

    #first,
    #second {
        height: inherit;
    }

    #main p,
    #main p span {
        font-size: 2rem;
    }

    #promocode{
        font-size: 22px;
    }

}

/* Large devices (large desktops, 1200px and up) */
@media (min-width: @screen-lg-min) {}

@media (min-width: 1200px) and (max-width: 1440px) {
    #sun {
        right: 50px;
        top: 65px
    }
}
</style>