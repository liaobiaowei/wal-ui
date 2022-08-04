<template>
    <div class="wal-icon">
        <svg class="icon" :style="iconColor" aria-hidden="true">
            <use :xlink:href="iconName"></use>
        </svg>
        <div v-if="dot" class="wal-info" :class="styleDot">{{ badge }}</div>
    </div>
</template>
 <script lang="ts">
 import './font/iconfont.js'
 import './style/index.less'
 import { defineComponent, computed } from 'vue'
 import { iconProps } from './types'
 export default defineComponent({
     props: iconProps,
     name:'k-icon',
     setup(props) {
         const iconName = computed(() => {
             return `#wal-${props.name}`
         })
         const styleDot = computed(() => {
             return {
                 [`wal-dot`]: props.dot && !props.badge
             }
         })
         const badge = computed(() => {
             return props.badge
         })

         const iconColor = computed(() => {
             return {
                 color: props.color
             }
         })
         return {
             iconName,
             styleDot,
             badge,
             iconColor
         };
     },
 });
 </script>