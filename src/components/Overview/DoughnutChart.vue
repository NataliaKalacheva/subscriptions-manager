<script>
import { Doughnut, mixins } from 'vue-chartjs'

const { reactiveProp } = mixins

export default {
  name: 'DoughnutChart',
  extends: Doughnut,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      percentageInnerCutout: 1
    }
  }),
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
