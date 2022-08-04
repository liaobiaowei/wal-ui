<!--
 * @Author: lbw
 * @Date: 2022-08-02 10:08:13
 * @LastEditors: lbw
 * @LastEditTime: 2022-08-04 10:08:07
 * @Description:
-->
<template>
    <div>
        <k-button @click='handleClick'>6666</k-button>
        <k-icon name="favorite" color="red" />
        <k-icon name="favorite" color="green" />
        <k-icon name="favorite" color="blue" />
        <!--  <Icon name="favorite" color="yellow" /> -->
        <k-rate></k-rate>
          <k-tablePage :columns="columns" :data-source="data" @click='handleClick'>
       <template #headerCell="{ column,title }">
        <template v-if="column.key === 'name'">
          <span>
            {{JSON.stringify(column)}}
            Name11
          </span>
        </template>
      </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'name'">
        <a>
          {{ record.name }}
        </a>
      </template>
      <template v-else-if="column.key === 'tags'">
        <span>
          <a-tag
            v-for="tag in record.tags"
            :key="tag"
            :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <span>
          <a>Invite 一 {{ record.name }}</a>
          <a-divider type="vertical" />
          <a>Delete</a>
          <a-divider type="vertical" />
          <a class="ant-dropdown-link">
            More actions
            <down-outlined />
          </a>
        </span>
      </template>
    </template>
  </k-tablePage>
    </div>
</template>
<script lang="ts" setup>

import { inject ,onMounted} from 'vue';
import { message } from 'wal-ui'
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: 'Action',
    key: 'action',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
  const handleClick = function(){
           message.success('1111111111111111');
  }
</script>
<style lang="less">
.wal-icon {
    font-size: 36px;
    color: #666;
    margin-right: 20px;
}
</style>
