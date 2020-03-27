<template>
    <modal class="modal-feedback" name="modal-feedback" height="auto" :scrollable="true" :delay="5" transition="ease-in-out">
        <div class="feedback-form">
            <!--Form with header-->
            <form @submit.prevent="submit">
                <div class="card border-primary rounded-0">
                    <div class="card-header p-0">
                        <div class="bg-primary text-white text-center py-2">
                            <h3><i class="fa fa-envelope"></i> Обратная связь</h3>
                            <!-- <p class="m-0">Con gusto te ayudaremos</p> -->
                        </div>
                    </div>
                    <div class="card-body p-3">
                        <!--Body-->
                        <div class="form-group">
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="fa fa-user text-primary"></i></div>
                                </div>
                                <input type="text" v-model="name" class="form-control" id="name" name="name" placeholder="Ваше имя" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="fa fa-envelope text-primary"></i></div>
                                </div>
                                <input type="email" v-model="email" class="form-control" id="email" name="email" placeholder="Ваш E-mail" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="fa fa-comment text-primary"></i></div>
                                </div>
                                <textarea v-model="message" class="form-control" placeholder="Сообщение" required></textarea>
                            </div>
                        </div>
                        <p v-if="errors.length">
                            <b>Пожалуйста исправьте указанные ошибки:</b>
                            <ul class="errors">
                                <li v-for="error in errors" :key="error" class="alert alert-dismissible alert-danger">{{ error }}</li>
                            </ul>
                        </p>
                        <div class="text-center">
                            <input type="submit" value="Отправить" class="btn btn-primary btn-block">
                        </div>
                        <p v-if="msg" class="alert alert-dismissible alert-primary">
                            {{ msg }}
                        </p>
                    </div>
                </div>
            </form>
            <!--Form with header-->
        </div>
    </modal>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            name: '',
            email: '',
            message: '',
            errors: [],
            msg: '',
            /* eslint-disable-next-line */
            reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
        }
    },
    methods: {
        submit() {
            this.errors = []
            if (!this.name) {
                this.errors.push('Требуется указать имя.')
                return;
            }
            if (!this.message) {
                this.errors.push('Требуется указать сообщение.')
                return;
            }
            if (this.reg.test(this.email) == false) {
                this.errors.push('Требуется указать валидный e-mail.')
                return;
            }

            const self = this
            axios.post('/api/feedback.php', {
                    name: this.name,
                    email: this.email,
                    message: this.message
                })
                .then(function(response) {
                    console.log(response)
                    self.msg = response.data.msg
                })
                .catch(function(error) {
                    console.log(error)
                });

        }
    }
}
</script>
<style scoped>
h3 {
    margin-top: 10px;
}
li{
    text-decoration: none;
}
.alert-primary{
    margin-top: 10px;
}
</style>