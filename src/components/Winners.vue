<template>
    <div class="drops">
        <h3 class="text-center start-action blue-color font-Pacifico">Наши победители:</h3>
        <u-animate-container>
            <u-animate name="fadeIn" delay="0s" duration="2s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                <div class="container">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="thumbnail">
                                <img src="img/iphone_winner.png" alt="" class="img-responsive">
                                <div class="caption">
                                    <h5>Александр Александров</h5>
                                    <p>19.03.2020</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="thumbnail">
                                <img src="img/iphone_winner.png" alt="" class="img-responsive">
                                <div class="caption">
                                    <h5>Александр Александров</h5>
                                    <Countdown :deadline="countdownDate"></Countdown>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="thumbnail">
                                <img src="img/iphone_winner.png" alt="" class="img-responsive">
                                <div class="caption">
                                    <h5>Александр Александров</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="thumbnail">
                                <img src="img/iphone_winner.png" alt="" class="img-responsive">
                                <div class="caption">
                                    <h5>Александр Александров</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="thumbnail">
                                <img src="img/iphone_winner.png" alt="" class="img-responsive">
                                <div class="caption">
                                    <h5>Александр Александров</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="thumbnail">
                                <img src="img/iphone_winner.png" alt="" class="img-responsive">
                                <div class="caption">
                                    <h5>Александр Александров</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="thumbnail">
                                <img src="img/iphone_winner.png" alt="" class="img-responsive">
                                <div class="caption">
                                    <h5>Александр Александров</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="thumbnail">
                                <img src="img/iphone_winner.png" alt="" class="img-responsive">
                                <div class="caption">
                                    <h5>Александр Александров</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="thumbnail">
                                <img src="img/iphone_winner.png" alt="" class="img-responsive">
                                <div class="caption">
                                    <h5>Александр Александров</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="thumbnail">
                                <img src="img/iphone_winner.png" alt="" class="img-responsive">
                                <div class="caption">
                                    <h5>Александр Александров</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="thumbnail">
                                <img src="img/iphone_winner.png" alt="" class="img-responsive">
                                <div class="caption">
                                    <h5>Александр Александров</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="thumbnail">
                                <img src="img/iphone_winner.png" alt="" class="img-responsive">
                                <div class="caption">
                                    <h5>Александр Александров</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </u-animate>
        </u-animate-container>
        <br><br><br>
        <Footer />
    </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
import { UAnimateContainer, UAnimate } from 'vue-wow'
import Countdown from 'vuejs-countdown'
export default {
    components: {
        Footer,
        UAnimateContainer,
        UAnimate,
        Countdown
    },
    data() {
        return {
            countdownDate: 'May 18, 2020'        
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.drops {
    margin-top: 50px;
    background-image: linear-gradient(180deg, #fff 0%, #e0f0ff 50%, #6b9dd0 100%);
    position: relative;
}

.img-responsive {
    max-width: 100%;
}

/*.img-responsive:hover {
    transform: rotateY(180deg);
    transition: all 1s;
}*/

.caption h5, .caption p {
    color: #0e4194;
    text-align: center;
}
.thumbnail{
    margin: 20px 0;
}
</style>