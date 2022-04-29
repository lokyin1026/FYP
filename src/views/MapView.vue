<template>
  <div class="tw-h-[100%] tw-w-[100%]">
    <div class="tw-h-[100%] tw-w-[100%]">
      <iframe class="tw-h-[100%] tw-w-[100%]" :src="src"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      src: `Map.html`
    }
  },
}
</script>
