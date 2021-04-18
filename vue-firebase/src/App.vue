<template>
<div id="app">
 <TheNavigation />
  <router-view/>
</div>
</template>

<script>
import TheNavigation from '@/components/global/TheNavigation'

export default {
  components: {
    TheNavigation
  }
}
</script>
