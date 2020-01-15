<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
                    <div class="card-header">Данные</div>
                    <div class="card-body">
                        <p class="card-text">{{ name }} {{ lastname }}</p>
                        <p class="card-text">Населенный пункт: {{ city }}</p>
                        <p class="card-text">E-mail: {{ email }}</p>
                        <p class="card-text">Телефон: {{ phone }}</p>
                        <p class="card-text">Дата регистрациии: {{ dateReg }}</p>
                        <button class="btn btn-info" @click="logout">Выйти из личного кабинета</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
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
        <div class="row">
            <div class="col-md-12">
                <EnterPromo />
            </div>
        </div>
    </div>
</template>
<script>
import EnterPromo from '@/components/EnterPromo.vue'
export default {
    components: {
        EnterPromo
    },
    data() {
        return {
            name: '',
            lastname: '',
            city: '',
            email: '',
            phone: '',
            dateReg: '',
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
        this.$http.post('https://denisdemchenko.ru/project/promo/api/secure.php', {
                lkuid: localStorage.getItem('lkuid'),
                t: localStorage.getItem('t')
            })
            .then(function(response) {
                self.name = response.data.name
                self.lastname = response.data.lastname
                self.city = response.data.city
                self.email = response.data.email
                self.phone = response.data.phone
                self.dateReg = response.data.date_registration
                self.codes = response.data.codes
            })
            .catch(function(error) {
                console.log(error)
            });
    }
}
</script>