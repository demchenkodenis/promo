<template>
  <div class="winner">
    <Winner />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Winner from '@/components/Winner.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Winner,
    Footer
  }
}
</script>
