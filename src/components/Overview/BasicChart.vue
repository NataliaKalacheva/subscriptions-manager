<script>
import { Bar, mixins } from 'vue-chartjs'
import ChartJsPluginDataLabels from 'chartjs-plugin-datalabels'

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
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'top',
          fontColor: '#77869E',
          font: {
            size: 10
          },
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
              fontColor: '#042C5C'
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: false
            },
            ticks: {
              display: false
            }
          }
        ]
      }
    }
  })
}
</script>
