<script>
import {Bar} from "vue-chartjs";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Bar",
  extends: Bar,
  props:["chartData","options"],
  mounted(){
    this.renderChart(this.chartData, this.options);
  },
};
</script>
