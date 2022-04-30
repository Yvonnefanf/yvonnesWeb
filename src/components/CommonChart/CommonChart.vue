<template>
  <div
    ref="chartRef"
    class="my-chart"
  ></div>
</template>

<script lang="ts">
import {
  defineComponent,
  toRefs,
  ref,
  onMounted,
  onUnmounted,
  watch
} from 'vue'
import * as echarts from 'echarts'
import { nextTick } from 'vue'

export default defineComponent({
  name: 'CommonChart',
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  setup(props) {
    const { data } = toRefs(props)
    const chartRef = ref(null)
    let chart: echarts.ECharts
    onMounted(() => {
      nextTick(() => {
        chart = echarts.init(chartRef.value as unknown as HTMLElement)
        chart.setOption(data.value as unknown as echarts.EChartsOption);
        (window as any).onresize = () => {
          chart.resize()
        }
      })
    })
    onUnmounted(() => {
      chart.dispose()
    })
    watch(data, () => {
      if (chart) {
        chart.setOption(data.value as unknown as echarts.EChartsOption, {
          notMerge: true
        })
      }
    })
    return { chartRef }
  }
})
</script>
<style scoped lang="less">
.my-chart {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  margin: 0 20px 0 0 !important;
}
</style>
