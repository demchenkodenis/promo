<template>
    <div class="drops">
        <h3 class="text-center start-action blue-color font-Pacifico">Вопрос-ответ:</h3>
        <u-animate-container>
            <u-animate name="fadeIn" delay="0s" duration="2s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 offset-md-2">
                            <div class="accordion" id="accordionExample">
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Кто является организатором Акции?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p>Организатором акции является ООО «Майский». Юридический адрес: 308019, г. Белгород, ул. Восточная, д.71, оф. 410.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                                Кто может принять участие в Акции?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapse1" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p>В Акции могут принять участие дееспособные граждане Российской Федерации, постоянно зарегистрированные на территории Российской Федерации и достигшие возраста 18 лет. В Акции запрещается участвовать работникам и представителям Организатора, аффилированным с ним лицам, членам семей таких работников и представителей.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                                                Сроки проведения Акции?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapse2" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p>Общий срок проведения Акции, включая выдачу Призов: с 01.04.2020 г. по 02.11.2020 г.</p>
                                            <p>Период регистрации кодов: с 01.04.2020 г. по 18.10.2020 г.</p>
                                            <p>Сроки вручения Призов: с 18.05.2020 г. по 02.11.2020 г.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
                                                Где проводится Акция?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapse3" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p>Акция проводится на территории Российской Федерации.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse15" aria-expanded="true" aria-controls="collapse15">
                                                Нужно ли сохранять крышку с кодом?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapse15" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p>Крышку с уникальным кодом необходимо сохранять до конца Акции. В случае выигрыша Приза крышку с кодом необходимо предоставить Организатору Акции.</p>
                                            <p>Остались вопросы? Свяжитесь с нами по телефону горячей линии 8 800 600 75 77 или с помощью формы обратной связи.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="true" aria-controls="collapse4">
                                                Какая продукция участвует в Акции?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapse4" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <h5>В Акции участвует следующая продукция «Майская хрустальная»™ в промоупаковке с желтой крышкой:</h5>
                                            <p>Вода минеральная природная питьевая столовая негазированная 0,5л ПЭТ бутылка</p>
                                            <p>Вода минеральная природная питьевая столовая газированная 0,5л ПЭТ бутылка</p>
                                            <p>Вода минеральная природная питьевая столовая негазированная 1,5л ПЭТ бутылка</p>
                                            <p>Вода минеральная природная питьевая столовая газированная 1,5л ПЭТ бутылка</p>
                                            <p>Вода минеральная природная питьевая столовая негазированная 5л ПЭТ бутылка</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
                                                Как принять участие в Акции?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapse5" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p>Купить продукцию «Майская хрустальная» ™ объемом 0,5л, 1,5л, 5л в промоупаковке.</p>
                                            <p>Найти уникальный 10-ти значный код под крышкой (нанесен на каждую крышку продукции, участвующей в Акции). Однократно зарегистрироваться на сайте <a href="https://maycrystal-promo.ru/">maycrystal-promo.ru.</a></p>
                                            <p>Ввести код в поле «Зарегистрировать код» на сайте <a href="https://maycrystal-promo.ru/">maycrystal-promo.ru.</a> Каждый зарегистрированный Участник получает возможность выиграть Приз.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse16" aria-expanded="true" aria-controls="collapse16">
                                                Как ввести символ Ø в промокоде?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapse16" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p>В промокоде символ "Ø" соответствует цифре ноль, а символ "О" соответствует букве на английской раскладке.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
                                                Какие Призы можно получить, участвуя в Акции?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapse6" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p>Призовой фонд формируется исключительно за счет средств Организатора и состоит из 12-ти (двенадцати) смартфонов iPhone XR.</p>
                                            <p>Денежный эквивалент стоимости призов не выплачивается.</p>
                                            <p>Один Победитель может выиграть не более 1-го (одного) Приза за весь период проведения Акции.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                                Где искать код?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapse7" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p>Уникальный код нанесен на внутреннюю часть крышки бутылки.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse8" aria-expanded="true" aria-controls="collapse8">
                                                Как зарегистрироваться на сайте Акции?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapse8" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p>Зарегистрироваться в качестве Участника Акции путем нажатия на кнопку «Регистрация» во вкладке «Личный кабинет» либо в поле «Зарегистрировать код». Для прохождения регистрации необходимо заполнить все поля регистрационной формы. Регистрация в качестве Участника Акции производится однократно за весь период проведения Акции.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse9" aria-expanded="true" aria-controls="collapse9">
                                                Как зарегистрировать код на сайте?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapse9" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p>Регистрация кода проходит путем введения 10-ти значного уникального кода в поле «Зарегистрировать код» на главной странице.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse10" aria-expanded="true" aria-controls="collapse10">
                                                Какое количество кодов можно зарегистрировать?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapse10" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p>Участник может зарегистрировать неограниченное количество реальных кодов, равное количеству приобретенной им продукции в промоупаковке.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse11" aria-expanded="true" aria-controls="collapse11">
                                                Что делать, если возникли проблемы с вводом кода?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapse11" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p>В случае возникновения проблемы с вводом кода необходимо связаться с Организатором Акции по номеру горячей линии 8 800 600 75 77 или с помощью формы обратной связи.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse12" aria-expanded="true" aria-controls="collapse12">
                                                Как восстановить пароль?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapse12" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p>Пароль можно восстановить во вкладке «Личный кабинет». Для восстановления необходимо перейти во вкладку «Личный кабинет», далее нажать кнопку «Я не помню пароль». В поле «Введите электронную почту», необходимо ввести e-mail адрес, который был указан Участником Акции при регистрации. На введенную электронную почту придет уже новый сгенерированный пароль, который предоставит доступ в личный кабинет. Старый пароль будет автоматически заменен на новый пароль, сгенерированный системой.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse13" aria-expanded="true" aria-controls="collapse13">
                                                Как узнать, что выиграл(а) Приз?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapse13" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p>Победитель оповещается путем отправки сообщения на адрес электронной почты Победителя и звонком от представителя Организатора Акции. Выигравший код отображается в личном кабинете Победителя.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse14" aria-expanded="true" aria-controls="collapse14">
                                                Где получить Приз?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapse14" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p>Для получения приза Победителю необходимо приехать на территорию Организатора Акции.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
.drops {
    background-image: linear-gradient(180deg, #fff 0%, #e0f0ff 50%, #6b9dd0 100%);
}

h3 {
    margin: 60px 0 30px;
}

.accordion {
    margin-bottom: 30px;
}
</style>