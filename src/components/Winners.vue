<template>
    <div class="drops">
        <h3 class="text-center start-action blue-color font-Pacifico">Наши победители:</h3>
        <u-animate-container>
            <u-animate name="fadeIn" delay="0s" duration="2s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 offset-md-2">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <td>Дата</td>
                                        <td>Победитель</td>
                                        <td>Номер телефона</td>
                                        <td>Приз</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>18.05.2020</td>
                                        <td>Татьяна Главацкая</td>
                                        <td>8 (908) 786-56-66</td>
                                        <td>Смартфон iPhone XR</td>
                                    </tr>
                                    <tr>
                                        <td>1.06.2020</td>
                                        <td></td>
                                        <td></td>
                                        <td>Смартфон iPhone XR</td>
                                    </tr>
                                    <tr>
                                        <td>15.06.2020</td>
                                        <td></td>
                                        <td></td>
                                        <td>Смартфон iPhone XR</td>
                                    </tr>
                                    <tr>
                                        <td>29.06.2020</td>
                                        <td></td>
                                        <td></td>
                                        <td>Смартфон iPhone XR</td>
                                    </tr>
                                    <tr>
                                        <td>13.07.2020</td>
                                        <td></td>
                                        <td></td>
                                        <td>Смартфон iPhone XR</td>
                                    </tr>
                                    <tr>
                                        <td>27.07.2020</td>
                                        <td></td>
                                        <td></td>
                                        <td>Смартфон iPhone XR</td>
                                    </tr>
                                    <tr>
                                        <td>10.08.2020</td>
                                        <td></td>
                                        <td></td>
                                        <td>Смартфон iPhone XR</td>
                                    </tr>
                                    <tr>
                                        <td>24.08.2020</td>
                                        <td></td>
                                        <td></td>
                                        <td>Смартфон iPhone XR</td>
                                    </tr>
                                    <tr>
                                        <td>7.09.2020</td>
                                        <td></td>
                                        <td></td>
                                        <td>Смартфон iPhone XR</td>
                                    </tr>
                                    <tr>
                                        <td>21.09.2020</td>
                                        <td></td>
                                        <td></td>
                                        <td>Смартфон iPhone XR</td>
                                    </tr>
                                    <tr>
                                        <td>5.10.2020</td>
                                        <td></td>
                                        <td></td>
                                        <td>Смартфон iPhone XR</td>
                                    </tr>
                                    <tr>
                                        <td>19.10.2020</td>
                                        <td></td>
                                        <td></td>
                                        <td>Смартфон iPhone XR</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </u-animate>
        </u-animate-container>
        <Footer />
    </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
import { UAnimateContainer, UAnimate } from 'vue-wow'
export default {
    components: {
        Footer,
        UAnimateContainer,
        UAnimate
    },
    data() {
        return {

        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.drops{
	background: url('/img/drops-1.png') top center no-repeat;
}
table{
	margin-top: 30px;
}
table tr td{
    color: #0e4194;
    font-weight: bold;
}
</style>