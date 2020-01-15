<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div v-if="isLoggedIn">
                    <EnterPromo />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mask } from 'vue-the-mask'
import EnterPromo from '@/components/EnterPromo.vue'
export default {
    directives: { mask },
    components: {
        EnterPromo
    },
    data() {
        return {

        }
    },
    computed: {
        isLoggedIn: function() { return this.$store.getters.isLoggedIn }
    },
}
</script>