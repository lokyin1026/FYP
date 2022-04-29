<template>
  <div>
    <div class="header ">
      <v-img class="tw-flex tw-justify-center tw-items-center" transition="fade-transition" id="bg" :src="changeImage">
        <div
            class="box fade-in tw-flex tw-flex-col tw-items-center tw-justify-center tw-mx-auto tw-border-solid tw-border-[2px] tw-border-black tw-w-full md:tw-w-1/2 lg:tw-w-1/2 xl:tw-w-1/3 tw-bg-black tw-text-[#D3B04D] tw-text-3xl tw-font-extrabold tw-p-6">
          <v-img class="tw-h-[220px] tw-w-[220px] mx-auto" src="@/assets/icon.png"></v-img>
          <div class="tw-text-center">Air Quality Checker</div>
        </div>
      </v-img>
    </div>
    <div>
      <div class="tw-bg-black">
        <v-row class="!tw-py-[25vh]">
          <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="4" v-for="(item, index) in functions" :key="index">
            <div
                @click="$router.push({name:item.router})"
                :style="{'background-image': 'url(' + item.src + ')'}"
                class="box place tw-mx-auto tw-text-indigo-300 tw-bg-cover tw-border tw-border-grey-200  tw-font-extrabold tw-flex tw-justify-center tw-items-center tw-w-full tw-py-[200px] tw-text-5xl tw-rounded-2xl ">
              {{ item.name }}
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      functions: [{name: `Introduction`,src:`/intro.png`,router:`intro`}, {name: `Map`,src:`/map.png`,router:`map`}, {name: `Statistic`,src:`/stat.png`,router:`stat`}]
    }
  },
  computed: {
    changeImage() {
      let value = this.getRandomPic(3)
      return require(`@/assets/photo${value}.png`)
    }
  },
  mounted() {
    let headerBg = document.getElementById(`bg`)
    window.addEventListener(`scroll`, function () {
      headerBg.style.opacity = 1 - +window.pageYOffset / 1000 + ''
      headerBg.style.top = +window.pageYOffset + 'px'
      headerBg.style.backgroundPositionY = +window.pageYOffset / 2 + 'px'
    })
  },
  methods: {
    getRandomPic(max) {
      return Math.floor(Math.random() * max) + 1;
    },
  }
}
</script>

<style>
.header {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #000;
}

.box {
  font-family: "Copperplate Gothic Light", fantasy;
}

.place:hover{
  box-shadow: 0px 0px 10px white;
  color: white;
}

.fade-in {
  animation: fadeIn ease 3s;
  -webkit-animation: fadeIn ease 3s;
  -moz-animation: fadeIn ease 3s;
  -o-animation: fadeIn ease 3s;
  -ms-animation: fadeIn ease 3s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
