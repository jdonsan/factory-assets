<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,

  name: 'AppLineChart',

  props: ['dataset'],

  data() {
    return {
      dataCollection: {
        datasets: [
          {
            label: 'Precios',
            backgroundColor: '#70C1B3',
            data: this.dataset.map(data => ({
              x: data.date,
              y: data.value
            }))
          }
        ]
      }
    }
  },

  mounted() {
    this.renderChart(this.dataCollection, {
      responsive: true,
      maintainAspectRatio: false,
      showLines: false,
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            max: this.dataset[this.dataset.length - 1].date,
            min: this.dataset[0].date
          }
        }]
      },
      elements: {
        line: {
          tension: 5
        }
      },
      showLines: false,
      animation: {
        duration: 0
      },
      hover: {
        animationDuration: 0
      },
      responsiveAnimationDuration: 0
    })
  }
}
</script>
