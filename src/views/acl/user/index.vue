<template>
  <el-card>
    <el-form :inline="true">
      <el-form-item label="用户名">
        <el-input placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="default">搜索</el-button>
        <el-button type="primary" size="default">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <!-- table展示数据 -->
  <el-card style="margin: 12px 0px">
    <el-button type="primary" size="default">添加用户</el-button>
    <el-button type="primary" size="default">批量删除</el-button>
    <el-table style="margin: 12px 0px" border :data="userAll">
      <el-table-column type="selection"></el-table-column>
      <el-table-column
        label="#"
        type="index"
        align="center"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        label="ID"
        prop="id"
        align="center"
        show-overflow-tooltip
      ></el-table-column>

      <el-table-column
        label="用户名"
        prop="name"
        align="center"
        show-overflow-tooltip
      ></el-table-column>

      <el-table-column
        label="角色"
        prop="roleName"
        align="center"
        show-overflow-tooltip
      ></el-table-column>

      <el-table-column
        label="创建时间"
        prop="createTime"
        align="center"
        show-overflow-tooltip
      ></el-table-column>

      <el-table-column
        label="更新时间"
        prop="updateTime"
        align="center"
        show-overflow-tooltip
      ></el-table-column>

      <el-table-column label="操作" width="280px" align="center">
        <template #="{ row, $index }">
          <el-button type="primary" size="small" icon="User"
            >分配角色</el-button
          >
          <el-button type="danger" size="small" icon="Edit">编辑</el-button>
          <el-button type="warning" size="small" icon="Delete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:current-page="pageNo"
      v-model:page-size="pageSize"
      :page-sizes="[5, 7, 9, 11]"
      :background="true"
      layout="prev, pager, next,jumper,->,sizes,total"
      :total="total"
      @current-change="getUserInfo"
    />
  </el-card>
  <!-- 分页 -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { reqUserInfo } from "@/api/acl/user/index";
import { UserResponseData, Records } from "@/api/acl/user/type";
// 默认页数
let pageNo = ref(1);
// 每页显示条数
let pageSize = ref(7);
// 总条数
let total = ref<number>(0);
// 存储的数组
let userAll = ref<Records>([]);

// 挂载
onMounted(() => {
  getUserInfo();
});

// 获取用户信息
const getUserInfo = async (pager = 1) => {
  pageNo.value = pager;
  const result: UserResponseData = await reqUserInfo(
    pageNo.value,
    pageSize.value
  );

  if (result.code === 200) {
    userAll.value = result.data.records;
    total.value = result.data.total;
  }
};
</script>

<style scoped></style>
