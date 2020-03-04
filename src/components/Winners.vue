<template>
    <div class="drops">
        <h3 class="text-center start-action blue-color font-Pacifico">Наши победители:</h3>
        <u-animate-container>
            <u-animate name="fadeIn" delay="0s" duration="2s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                <div class="container">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="thumbnail">
                                <img src="img/iphonexr1.png" alt="" class="img-responsive">
                                <div class="caption">
                                    <h5>Александр Александров</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="thumbnail">
                                <img src="img/iphonexr1.png" alt="" class="img-responsive">
                                <div class="caption">
                                    <h5>Александр Александров</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="thumbnail">
                                <img src="img/iphonexr1.png" alt="" class="img-responsive">
                                <div class="caption">
                                    <h5>Александр Александров</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="thumbnail">
                                <img src="img/iphonexr1.png" alt="" class="img-responsive">
                                <div class="caption">
                                    <h5>Александр Александров</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="thumbnail">
                                <img src="img/iphonexr1.png" alt="" class="img-responsive">
                                <div class="caption">
                                    <h5>Александр Александров</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="thumbnail">
                                <img src="img/iphonexr1.png" alt="" class="img-responsive">
                                <div class="caption">
                                    <h5>Александр Александров</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br><br><br><br><br>
                    <div class="row">
                        <div class="col-md-2">
                            <div class="thumbnail">
                                <img src="img/iphonexr1.png" alt="" class="img-responsive">
                                <div class="caption">
                                    <h5>Александр Александров</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="thumbnail">
                                <img src="img/iphonexr1.png" alt="" class="img-responsive">
                                <div class="caption">
                                    <h5>Александр Александров</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="thumbnail">
                                <img src="img/iphonexr1.png" alt="" class="img-responsive">
                                <div class="caption">
                                    <h5>Александр Александров</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="thumbnail">
                                <img src="img/iphonexr1.png" alt="" class="img-responsive">
                                <div class="caption">
                                    <h5>Александр Александров</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="thumbnail">
                                <img src="img/iphonexr1.png" alt="" class="img-responsive">
                                <div class="caption">
                                    <h5>Александр Александров</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="thumbnail">
                                <img src="img/iphonexr1.png" alt="" class="img-responsive">
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
	margin-top: 50px;
}
.img-responsive{
    max-width: 100%;
}
.img-responsive:hover{
    transform: rotateY(180deg);
    transition: all 1s;
}
h5{
    color: #0e4194;
    text-align: center;
}
</style>