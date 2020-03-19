<template>
    <div>
        <div id="lk">
            <div class="container">
                <div class="row" v-if="status == 1">
                    <div class="col-md-12">
                        <EnterPromo />
                    </div>
                </div>
                <div class="row" v-if="status == 2">
                    <div class="col-md-12">
                        <h3 class="text-center">Аккаунт временно заблокирован. Обратитесь в службу поддержки.</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card bg-light">
                            <div class="card-header">Данные аккаунта</div>
                            <div class="card-body">
                                <h5 class="card-title">{{ name }} {{ lastname }}</h5>
                                <p class="card-text"><i class="fas fa-envelope"></i> {{ email }}</p>
                                <p class="card-text"><i class="fas fa-phone"></i> {{ phone }}</p>
                                <p class="card-text"><i class="fas fa-calendar-alt"></i> {{ dateReg }}</p>
                                <button class="btn btn-primary" @click="logout">Выйти из личного кабинета <i class="fas fa-sign-out-alt"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div v-if="status == 0">
                            <h3 class="alert alert-info">Проверьте электронную почту и активируйте аккаунт!</h3>
                        </div>
                        <div v-else>
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Промокод</th>
                                        <th scope="col">Дата</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(code, index) in codes" :key="index">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ code.code }}</td>
                                        <td>{{ code.date_code }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import EnterPromo from '@/components/EnterPromo.vue'
import Footer from '@/components/Footer.vue'
export default {
    components: {
        EnterPromo,
        Footer
    },
    data() {
        return {
            name: '',
            lastname: '',
            email: '',
            phone: '',
            dateReg: '',
            status: '',
            codes: []
        }
    },
    methods: {
        logout: function() {
            this.$store.dispatch('logout')
                .then(() => {
                    this.$router.push('/')
                })
        }
    },
    mounted() {
        const self = this
        this.$http.post('/api/secure.php', {
                lkuid: localStorage.getItem('lkuid'),
                t: localStorage.getItem('t')
            })
            .then(function(response) {
                self.name = response.data.name
                self.lastname = response.data.lastname
                self.email = response.data.email
                self.phone = response.data.phone
                self.status = response.data.status
                self.dateReg = response.data.date_registration
                self.codes = response.data.codes
            })
            .catch(function(error) {
                console.log(error)
            });
    }
}
</script>
<style scoped>
#lk {
    background-image: linear-gradient(180deg, #fff 0%, #e0f0ff 50%, #6b9dd0 100%);
    padding-bottom: 50px;
}
</style>