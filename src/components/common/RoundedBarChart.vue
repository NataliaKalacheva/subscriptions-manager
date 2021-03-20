<script>
import '@/plugins/chartjs'
import { Bar, mixins } from 'vue-chartjs'
import ChartJsPluginDataLabels from 'chartjs-plugin-datalabels'
import { mapGetters } from 'vuex'

const { reactiveProp } = mixins

export default {
  name: 'roundedBarChart',
  extends: Bar,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object,
      required: true
    }
  },
  components: {
    ChartJsPluginDataLabels
  },
  mounted() {
    this.addPlugin(ChartJsPluginDataLabels)
    this.renderChart(this.chartData, this.options)
  },
  watch: {
    showDetails() {
      this.renderChart(this.chartData, this.options)
    }
  },
  computed: {
    ...mapGetters('overview', ['showDetails']),
    options() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 0
        },
        barRoundness: 1.3,
        plugins: {
          datalabels: {
            display: this.showDetails,
            anchor: 'end',
            align: 'top',
            fontColor: '#77869E',
            fontSize: 10,
            formatter(value) {
              return `$ ${value}`
            }
          }
        },
        legend: {
          display: false
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 20,
            bottom: 0
          }
        },
        scales: {
          xAxes: [
            {
              display: true,
              gridLines: {
                display: false
              },
              type: 'category',
              ticks: {
                beginAtZero: false,
                fontColor: '#042C5C',
                fontSize: 10,
                maxTicksLimit: 12
              }
            }
          ],
          yAxes: [
            {
              display: false,
              gridLines: {
                display: false
              },
              type: 'linear',
              ticks: {
                beginAtZero: true,
                maxTicksLimit: 5
              }
            }
          ]
        }
      }
    }
  }
}
</script>
