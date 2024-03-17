<template>
  <el-card class="search">
    <el-form :inline="true" style="margin-top: 20px">
      <el-form-item label="类型：">
        <el-input placeholder="请输入类型" v-model="nicknamekeyword"></el-input>
      </el-form-item>
      <el-form-item label="登陆时间：">
        <el-date-picker
          v-model="value1"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          size="default"
          :disabled="usernamekeyword || nicknamekeyword ? false : true"
          @click="search"
          >搜索</el-button
        >
        <el-button type="primary" @click="reset()">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <!-- table展示数据 -->
  <el-card class="table">
    <el-table class="eltable" border :data="logAll" stripe>
      <el-table-column type="selection"></el-table-column>
      <el-table-column
        label="#"
        type="index"
        align="center"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        label="ID"
        prop="logId"
        align="center"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        label="类型"
        prop="logTypeName"
        align="center"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        label="IP"
        prop="roleName"
        align="center"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        label="时间"
        prop="localTime"
        align="center"
        show-overflow-tooltip
      ></el-table-column>

      <el-table-column
        label="操作"
        prop="logContent"
        align="center"
        show-overflow-tooltip
      ></el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      style="margin-top: 20px"
      v-model:current-page="pageNo"
      :page-sizes="[5, 7, 9, 11]"
      :background="true"
      layout="prev, pager, next,jumper,->,sizes,total"
      :total="total"
      @current-change="getLogInfo"
    />
  </el-card>
  <!-- 分页 -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
// 引入接口信息
import { reqLogInfo } from "@/api/log";
import { LogResponseData, Records, Log } from "@/api/log/type";
import { ElMessage } from "element-plus";
import useLayOutSettingStore from "@/store/modules/setting";
// 默认页数
let pageNo = ref(1);
// 总条数
let total = ref<number>(0);
// 存储的数组
let logAll = ref<Records>([]);
// 搜索用户名称信息
const usernamekeyword = ref<string>("");
// 搜索用户昵称信息
const nicknamekeyword = ref<string>("");
// 获取用户信息
let settingStore = useLayOutSettingStore();
// 挂载
onMounted(() => {
  getLogInfo();
});

// 获取用户信息
const getLogInfo = async (pager = 1) => {
  pageNo.value = pager;
  const result: LogResponseData = await reqLogInfo(pageNo.value);

  if (result.code === 0) {
    logAll.value = result.data.records;
  }
};
// 搜索方法
const search = () => {
  getLogInfo();
  // 清空
  usernamekeyword.value = "";
  nicknamekeyword.value = "";
};
//重置的方法
const reset = () => {
  // 获取存储在仓库中的数据
  settingStore.reflash != settingStore.reflash;
};

// 终端类型
// 登陆时间
</script>

<style scoped>
.search {
  margin: 5px 10px;
  padding: 2px 7px 9px 9px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
  justify-content: space-between;
  background-color: rgb(193, 208, 246, 0.7);
}

.table {
  margin: 12px 10px;
  padding: 2px 7px 9px 9px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
  justify-content: space-between;
  border-radius: 20px;
  background-color: rgb(193, 208, 246, 0.7);
  .eltable {
    border-radius: 20px;
    background-color: rgb(193, 208, 246);
  }
}
</style>
