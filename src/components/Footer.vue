<template>
    <div>
        <footer class="">
            <u-animate-container>
                <u-animate name="fadeIn" delay="0s" duration="4s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <p>Белгородский район, пос. Майский</p>
                                <p>Mail: bgmarket@mail.ru</p>
                                <p>Телефон: +7(4722) 39-17-12, 39-16-09</p>
                                <p>Cайт: may-crystal.ru</p>
                            </div>
                            <div class="col-md-4">
                                <u-animate-container>
                                    <u-animate name="pulse" delay="1s" duration="1s" :iteration="1000" :offset="0" animateClass="animated" :begin="false">
                                        <a class="" href="#">
                                            <img src="img/footer-logo.png" alt="">
                                        </a>
                                    </u-animate>
                                </u-animate-container>
                            </div>
                            <div class="col-md-4">
                                <!-- <ul class="nav flex-column">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#">Призы</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Правила</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Вопрос-ответ</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Победители</a>
                                    </li>
                                </ul> -->
                                <p>
                                    <a href="#">ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ</a>
                                </p>
                                <p class="blue-color">© ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
                            </div>
                        </div>
                    </div>
                </u-animate>
            </u-animate-container>
        </footer>
    </div>
</template>
<script>
import { UAnimateContainer, UAnimate } from 'vue-wow'
export default {
    components: {
        UAnimateContainer,
        UAnimate
    },
}
</script>
<style>
.blue-bg {
    background-color: #0e4194;
}

footer {
    padding: 30px 0;
    background-image: linear-gradient(155deg, #6b9dd0 0%, #e0f0ff 50%, #f6f6f6 100%);
}

p,
p a {
    color: #0e4194;
    font-size: 18px;
}

.footer-drops {
    background: url("/img/footer-drops.png") center bottom no-repeat;
}
</style>