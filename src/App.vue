<template>
  <v-app>

<!--    <v-app-bar id="app"
      app
      color="primary"
      dark
      clipped-left
      height="100"
    >
      <div class="d-flex align-center tw-text-3xl tw-font-extrabold tw-font-serif">
        Air Quality
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>-->

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>

</style>
