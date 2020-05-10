<template>
    <div>
        <section id="first">
            <img src="img/clouds1.png" alt="" id="clouds">
            <img src="img/sun1.png" alt="" id="sun">
            <div id="wave">
                <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270">
                    <path d="M-314,267 C105,364 400,100 812,379" fill="none" stroke="white" stroke-width="120" stroke-linecap="round" />
                </svg>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 offset-md-3">
                            <div class="login">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>
<script>
import Login from '@/components/Login.vue'
import Registr from '@/components/Registr.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: {
        Login,
        Registr,
        Footer
    },
    data() {
        return {
            activetab: 1
        }
    },
}
</script>
<style scoped>
svg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: auto;
}
#wave {
    position: relative;
    background: #0b345d;
    background-image: linear-gradient(155deg, #6b9dd0 0%, #e0f0ff 50%, #f6f6f6 100%);
    color: #222;
}

div.login{
	margin: 50px auto;
	position: relative;
	z-index: 10;
}
@media (max-width: 992px) {

    #clouds,
    #sun{
        display: none;
    }
}
</style>