<template>
  <Header />
  <div style="width: 500px;height:500px;">
    <CommonChart
      class="chart-box"
      :data="chartData"
    />
  </div>
</template>
<script lang="ts">
import Header from './components/Header/Header.vue'
import CommonChart from './components/CommonChart/CommonChart.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: { CommonChart, Header },
  setup() {
    const chartData = ref({
      title: {
        text: '',
        // subtext: "Fake Data",
        // left: "center",
        textStyle: {
          color: '#fff',
          textAlign: 'center',
          fontSize: 16
        }
      },
      tooltip: {
        trigger: 'item',
        position: 'top'
      },
      legend: {
        orient: 'vertical',
        left: 'right',
        textStyle: {
          color: '#fff'
        }
      },
      series: [
        {
          type: 'pie',
          radius: '50%',
          startAngle: 0,
          label: {
            normal: {
              formatter: '{b}:{c}\n({d}%)'
            },
            textStyle: {
              color: '#fff',
              border: 'none'
            }
          },
          data: [
            { value: 223, name: '123' },
            { value: 735, name: '334' },
            { value: 580, name: '556' },
            { value: 484, name: '789' },
            { value: 300, name: '10101' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    })
    return {
      chartData
    }
  }
})
</script>
<style>
</style>
