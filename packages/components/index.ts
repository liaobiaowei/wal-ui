import { Button, Icon, TablePage } from './src'
import 'ant-design-vue/dist/antd.css';
import { Rate, message } from 'ant-design-vue';
const kRate = Rate
kRate.name = "k-rate";
const components = [
  Button,
  Icon,
  TablePage,
  kRate
]

const install = function (Vue: any) {
  components.forEach((item: any) => {
    // 注册所有组件
    Vue.component(item.name, item)
  })
}


export {
  Button,
  Icon,
  kRate,
  message
}

// const wal = {
//   // Button,
//   // Icon,
//   // message,
//   xlRate
// }

export default install


