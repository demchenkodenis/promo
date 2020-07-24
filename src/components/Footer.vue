<template>
    <div>
        <div id="save-probe">
            <u-animate-container>
                <u-animate name="flash" delay="1s" duration="2s" :iteration="1000" :offset="50" animateClass="animated" :begin="false">
                    <h4>сохраняйте крышки</h4>
                </u-animate>
            </u-animate-container>
        </div>
        <footer>
            <u-animate-container>
                <u-animate name="fadeIn" delay="0s" duration="4s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <p>Адрес: 308019, г. Белгород, ул. Восточная, д.71</p>
                                <p>Mail: <a href="mailto:td-mx@yandex.ru">td-mx@yandex.ru</a></p>
                                <p>Cайт: <a href="http://may-crystal.ru/" target="_blank">may-crystal.ru</a></p>
                            </div>
                            <div class="col-md-4 text-center">
                                <p class="text-center">
                                    <a href="tel:88006007577">ГОРЯЧАЯ ЛИНИЯ 8 800 600 75 77</a>
                                </p>
                                <p class="text-center">
                                    Звонки принимаются в будние дни с 9:00 до 18:00 часов по московскому времени
                                </p>
                                
                                <u-animate-container>
                                    <u-animate name="pulse" delay="1s" duration="1s" :iteration="1000" :offset="0" animateClass="animated" :begin="false">
                                        <a class="footer-logo" href="/">
                                            <img src="img/footer-logo.png" width="50%" alt="">
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
                                <p class="blue-color">© ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
                                <p>
                                    <a href="https://www.instagram.com/may.crystal31/?igshid=8k9k1ota9xr4" target="_blank">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/480px-Instagram_logo_2016.svg.png" alt="" width="48">
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </u-animate>
            </u-animate-container>
            <div class="footer-grass"></div>
        </footer>
    </div>
</template>
<script>
import { UAnimateContainer, UAnimate } from 'vue-wow'
export default {
    components: {
        UAnimateContainer,
        UAnimate,
    },
    methods: {
        
    }
}
</script>
<style>
#save-probe {
    padding: 1px 0;
    background: yellow;
}


#save-probe h4 {
    text-align: center;
    text-transform: uppercase;
    color: #0e4194;
    margin: 3px 0;
    display: block;
}
.blue-bg {
    background-color: #0e4194;
}

footer {
    background-image: linear-gradient(155deg, #6b9dd0 0%, #e0f0ff 50%, #f6f6f6 100%);
    padding-top: 30px;
}

p,
p a {
    color: #0e4194;
    font-size: 18px;
}

.footer-drops {
    background: url("/img/footer-drops.png") center bottom no-repeat;
}

.footer-grass {
    background: url("/img/footer-grass.png") center center no-repeat;
    min-height: 219px;
    margin-top: -65px;
}

.footer-logo {
    text-align: center;
}

.footer-logo img {
    margin: 25px 0;
}
</style>