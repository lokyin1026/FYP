<template>
  <div class="tw-p-5">
    <div class="tw-text-center">
      <div class="tw-text-2xl tw-font-bold">Please Select 2 date</div>
      <v-date-picker
                        v-model="dates"
                        range
                    ></v-date-picker>
    </div>
    <div>Data Limit:</div>
    <v-text-field type="number" outlined v-model.number="limit"></v-text-field>
    <v-btn @click="update">Update Chart</v-btn>
    <scatter :key="`B1${refreshKey}`"  v-if="dataList" :chartData="computedData" :options="options"></scatter>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
import Scatter from "@/components/Scatter";

export default {
  name: "StatView",
  data() {
    return {
      refreshKey:1,
      limit: 100,
      dataList: null,
      dates: [],
      chartData: {
        labels: [
          "Jan",
          "Feb",
          "Feb",

        ], base: 0,
        datasets: [
          {
            borderRadius: 10,
            label: "Data1",
            data: [5, 5, 6],
            backgroundColor: [
              '#' + (Math.random() * 0xFFFFFF << 0).toString(16),
              '#' + (Math.random() * 0xFFFFFF << 0).toString(16),
              '#' + (Math.random() * 0xFFFFFF << 0).toString(16),
              '#' + (Math.random() * 0xFFFFFF << 0).toString(16),
              '#' + (Math.random() * 0xFFFFFF << 0).toString(16),
              '#' + (Math.random() * 0xFFFFFF << 0).toString(16),
              '#' + (Math.random() * 0xFFFFFF << 0).toString(16),
              '#' + (Math.random() * 0xFFFFFF << 0).toString(16),
              '#' + (Math.random() * 0xFFFFFF << 0).toString(16),
              '#' + (Math.random() * 0xFFFFFF << 0).toString(16),
              '#' + (Math.random() * 0xFFFFFF << 0).toString(16),
              '#' + (Math.random() * 0xFFFFFF << 0).toString(16),
              '#' + (Math.random() * 0xFFFFFF << 0).toString(16),
              '#' + (Math.random() * 0xFFFFFF << 0).toString(16),
              '#' + (Math.random() * 0xFFFFFF << 0).toString(16),
              '#' + (Math.random() * 0xFFFFFF << 0).toString(16),
              '#' + (Math.random() * 0xFFFFFF << 0).toString(16),
              '#' + (Math.random() * 0xFFFFFF << 0).toString(16),
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
            ],
            borderWidth: 2
          },
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
          }
          ]
        },
        responsive: true,
        maintainAspectRatio: true,
        title: {
          display: true,
          text: "Data"
        }
      }
    }
  },
  watch:{

  },
  computed: {
    computedData() {
      if (!this.dataList) return
      let labels=this.dataList?.TVOC.map(item => moment(item.ts).format('YYYY MM DD HH:mm'))
      let data= this.dataList?.TVOC.map(item=> item.value)
      return {
       labels,
        base: 0,
        datasets: [
          {
            backgroundColor:'#57FFA9',
            borderRadius: 10,
            label: "Data1",
            data,
            borderWidth: 2
          },
        ]
      }
    },
  },
  methods: {
    moment,
    async update(){
      await this.reloadData();
    },
    async getToken() {
      const headers = {
        "Content-Type": "application/json"
      };
      const token = await axios.post("https://locationai-api.azurewebsites.net/api/auth/authorize ", {
        headers,
        username: "testapi@locationai.com",
        password: "testapi1234"
      })
          .then(response => response.data.token)
      return token
    },
    async getData(token, startTs = '1648785600000', endTs = '1651377600000', limit = 100) {
      await axios.get('https://locationai-api.azurewebsites.net/api/device/f2079840-6f7a-11ec-b794-5db4235aba81/values/timeseries/', {
        params: {
          keys: 'TVOC',
          startTs: startTs,
          endTs: endTs, limit,
          orderBy:'ASC',
        }, headers: {'token': token, "Content-Type": "application/json"}
      })
          .then(response => {
            console.log(response.data,'response data')
            this.dataList = response.data});
    },
    async reloadData(){
      if(this.dates.length!==2) return
      const token = await this.getToken();
      await this.getData(token,moment(this.dates[0]).unix()+`000`,moment(this.dates[1]).unix()+`000`,this.limit);
      this.refreshKey++
    }

  },
  components: {Scatter},
  async mounted() {
    const token = await this.getToken();
    await this.getData(token);
  }
}

</script>

<style scoped>

</style>