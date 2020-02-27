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
        <modal class="modal-reg" name="hello-world" height="auto" :scrollable="true" :delay="5" transition="ease-in-out">
                <h5>Регистрация / Личный кабинет</h5>
                <div slot="top-right">
                    <span @click="$modal.hide('hello-world')" style="cursor: pointer;">
                        <span aria-hidden="true">&times;</span>
                    </span>
                </div>
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
                                    <router-link class="nav-link" to="/rules">Правила</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/faq">Вопрос-ответ</router-link>
                                </li>
                                <li class="nav-item" v-if="!isLoggedIn">
                                    <button type="button" class="btn btn-primary" @click="show">
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
            activetab: 1
        }
    },
    computed: {
        isLoggedIn: function() { return this.$store.getters.isLoggedIn }
    },
    methods: {
        show() {
            this.$modal.show('hello-world');
        },
        hide() {
            this.$modal.hide('hello-world');
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

#clouds {
    position: absolute;
    top: 100px;
    left: 0;
    max-width: 100%;
    z-index: 1;
}

#sun {
    position: absolute;
    top: 0;
    right: 100px;
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

ul#nav li{
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
.modal-reg h5{
    padding: 15px;
}
/* Style the tabs */
.tabs {
    overflow: hidden;
    margin-left: 20px;
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
    border: 1px solid #ccc;
    border-right: none;
    background-color: #f1f1f1;
    border-radius: 10px 10px 0 0;
    font-weight: bold;
}

.tabs a:last-child {
    border-right: 1px solid #ccc;
}

/* Change background color of tabs on hover */
.tabs a:hover {
    background-color: #aaa;
    color: #fff;
}

/* Styling for active tab */
.tabs a.active {
    background-color: #fff;
    color: #484848;
    border-bottom: 2px solid #fff;
    cursor: default;
}

/* Style the tab content */
.tabcontent {
    padding: 0 30px 0 0;
    border-top: 1px solid #ccc;
}

/* Small devices (tablets, 768px and up) */
@media (min-width: @screen-sm-min) { 
    #clouds,
    #sun,
    #second #iphonexr,
    #bottles,
    .red-arrow,
    .red-arrow-2 {
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
}

/* Medium devices (desktops, 992px and up) */
@media (min-width: @screen-md-min) { 
    #clouds,
    #sun,
    #second #iphonexr,
    #second #prize,
    .red-arrow,
    .red-arrow-2 {
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

}

/* Large devices (large desktops, 1200px and up) */
@media (min-width: @screen-lg-min) {

}
</style>