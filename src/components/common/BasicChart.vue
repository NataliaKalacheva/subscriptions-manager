<script>
import { Bar, mixins } from 'vue-chartjs'
import ChartJsPluginDataLabels from 'chartjs-plugin-datalabels'
import { mapGetters } from 'vuex'

const { reactiveProp } = mixins

export default {
  name: 'BasicChart',
  extends: Bar,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: null
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
              gridLines: {
                display: false
              },
              ticks: {
                fontColor: '#042C5C',
                fontSize: 10
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                display: false,
                beginAtZero: true,
                precision: 0
              }
            }
          ]
        }
      }
    }
  }
}
</script>
