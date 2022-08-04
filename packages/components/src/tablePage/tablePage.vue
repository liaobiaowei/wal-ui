<!--
 * @Author: lbw
 * @Date: 2022-08-03 13:41:04
 * @LastEditors: lbw
 * @LastEditTime: 2022-08-04 10:07:18
 * @Description:
-->
<!-- button.vue -->
<template>
      <Table v-bind="props" >
         <template v-for="(item, key, index) in $slots" :key="index" v-slot:[key]="cellData">
            <slot :name="key"  v-bind="cellData"></slot>
          </template>
       </Table>
</template>

<script lang="ts">
import { Table } from 'ant-design-vue';
import './style/index.less'
import { defineComponent, computed } from 'vue'
export default defineComponent({
    name: 'k-tablePage',
    components: { Table },
    setup(props,{ attrs, slots, emit, expose }) {
      console.log(emit)
        return {
          props,
        };
    },
});
</script>
