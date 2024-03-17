<template>
  <div class="container">
    <div class="content head">
        <div class="head-pic-box">
          <div class="head-img"></div>
          <div class="head-username" style="font-size: 15pt;color: rgb(96,98,102);">Hi,<span>{{ userData.username }}</span></div>
        </div>
        <div class="head-infor-box">
          <div class="head-infor-id" style="color: rgb(96,98,102);">id:<span style="color: rgb(216,197,239);">{{ userData.userId }}</span></div>
          <div class="head-infor-date">注册日期：{{ userData.createTime }}</div>
        </div>
        <div class="head-ico">
          <div class="user-ico"></div>
        </div>
    </div>
    <div class="content basic-infor">
        <div class="basic-title">基本信息</div>
        <div class="basic-detail" style="color: rgb(96,98,102);" @click="toEdit">
          <div>
            <div>用户名：<span v-if="!onEdit" class="">{{ userData.username }}</span> <input v-else type="text" :value="userData.username" :style="{}"></div>
            <div>用户类型：<span>{{ userData.usertype }}</span></div>
            <div>ID:<span>{{ userData.userId }}</span></div>
            <!-- <div>年龄：<span v-if="!onEdit">{{ userData.age }}</span> <input v-else type="text" :value="userData.age"></div> -->
            <div>电话：<span v-if="!onEdit">{{ userData.phone }}</span> <input v-else type="text" v-model="userData.phone"></div>
            <div>邮箱：<span v-if="!onEdit">{{ userData.email }}</span> <input v-else type="text" v-model="userData.email"></div>
            <div>职业：<ColorLabel v-if="!onEdit" :text="userData.occupationName" ref="text"/>
              <ColorLabel :ref="(el:any) => setOccuRef(el, item.occupationId)"   v-else v-for="item in occupationList" :key="item.occupationId" :text="item.occupationName" />
            </div>
            <div>应用场景：<ColorLabel v-if="!onEdit" v-for="areaitem in areaList.filter(e=>e.occupationId===userData.occupationId)" :text="areaitem"/>
              <ColorLabel :ref="(el:any) => setAreaRef(el, areaitem.personaliseId)" @click="" v-else v-for="areaitem in areaList" :key="areaitem.personaliseId" :text="areaitem.personaliseName" />
            </div>
            <div>常用软件：<ColorLabel v-if="!onEdit" v-for="item in softwareList.filter(e=>e.occupationId===userData.occupationId)" :text="item"/>
              <ColorLabel :ref="(el:any) => setSoftwareRef(el, item.personaliseId)" @click="" v-else v-for="item in softwareList" :key="item.personaliseId" :text="item.personaliseName" />
            </div>
          </div>
        </div>
        <div v-show="onEdit">
            <button class="button" @click="Sure">确定</button>
            <el-button class="button" @click="onEdit = false">取消</el-button>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/views/user/style.css'
import { ref, reactive,onMounted, onUpdated,nextTick } from "vue";
import { reqUserInfo, reqAddUpdateUser, reqPersonalise, reqOccupation } from "@/api/acl/user/index";
import { UserResponseData,personaliseResponseData,OccupationResponseData,PersonaliseList, Records, User } from "@/api/acl/user/type";
import { ElMessage } from "element-plus";
import { info, sassNull } from 'sass';
import { useData } from 'element-plus/es/components/table-v2/src/composables/use-data.mjs';
let userData=reactive({
  username:"Tom",
  userHead:"" as any,
  roleId:0,
  roleName:"普通用户",
  userId:1893746197410,
  phone:"10086" as any,
  email:"222234988@qq.com" as any,
  occupationId:1 as any,
  occupationName:"程序员" as any,
  // areaList:["游戏","学习"],
  // softwareList:["QQ","微信","wps"],
  numberOfDesktops:0,
  createTime:"2023年5月1日"
});
let areaList=reactive([
        {
            "personaliseId": 9,
            "personaliseName": "电子游戏",
            "personaliseType": "1",
            "occupationId": "4"
        },{
            "personaliseId": 11,
            "personaliseName": "家居及厨房用具",
            "personaliseType": "1",
            "occupationId": "4"
        }
      ])
      let softwareList=reactive([
        {
            "personaliseId": 9,
            "personaliseName": "电子游戏",
            "personaliseType": "2",
            "occupationId": "4"
        },{
            "personaliseId": 11,
            "personaliseName": "家居及厨房用具",
            "personaliseType": "2",
            "occupationId": "4"
        }
      ])
  let occupationList=reactive([{
  occupationId:1,
  occupationName:"学生"
},
{
  occupationId:2,
  occupationName:"教师",
}]);

const occuRefs=ref<any>([]);
const setOccuRef = (el: any,index:number) => {
  if (el) {
    occuRefs.value[index] = el; 
  }
}
const areaRefs=ref<any>([]);
const setAreaRef = (el: any,index:number) => {
  if (el) {
    areaRefs.value[index] = el; 
  }
}
const softwareRefs=ref<any>([]);
const setSoftwareRef = (el: any,index:number) => {
  if (el) {
    softwareRefs.value[index] = el; 
  }
}
const onEdit=ref(false) 

const Sure = () => {
  // 调用修改信息接口
  onEdit.value = false;
  console.log(onEdit.value);
};

// 挂载
onMounted(() => {
  getUserInfo();

  
});

const toEdit=()=>{
      onEdit.value = true;
      occuRefs.value?.forEach((item: any) => {
        if(item.childText===userData.occupationName){
          item.toColor();
        }else{
          console.log(item.text)
          item.toGray();
        }
      });   
      areaRefs.value?.forEach((item: any) => {
        item.toGray();
        areaList.filter(e=>e.occupationId===userData.occupationId).forEach(area => {
          if(item.childText===area.personaliseName){
          item.toColor();
          }
        });
      });   
      softwareRefs.value?.forEach((item: any) => {
        item.toGray();
        softwareList.filter(e=>e.occupationId===userData.occupationId).forEach(software => {
          if(item.childText===software.personaliseName){
          item.toColor();
          }
        });
      });   
};
// 获取用户信息
const getUserInfo = async () => {
  const result: UserResponseData = await reqUserInfo();
  if (result.code === 0) {
    userData = result.data.records;
  }
  const occupationResult: OccupationResponseData=await reqOccupation();
  if (occupationResult.code === 0) {
    occupationList = occupationResult.data.records;
  }
  const personResult: personaliseResponseData=await reqPersonalise();
  if (personResult.code === 0) {
    areaList=personResult.data.records.filter(e=>e.personaliseType==='1')
    softwareList=personResult.data.records.filter(e=>e.personaliseType==='2')
  }
};
// 更新用户信息
const updateUser = (row: User) => {
  centerDialogVisible.value = true;
};
// 定义确定按钮的事件回调
const save = async () => {
  // 点击保存,判断是更新还是添加
  let result: any = await reqAddUpdateUser(userData);
  if (result.code === 0) {
    
    // 提示消息
    ElMessage({
      message: userParams.id ? "更新成功" : "添加成功",
      type: "success",
    });
    // 重新获取数据
    getUserInfo();
  } else {
    ElMessage({
      message: "操作失败",
      type: "error",
    });
  }
};

// 校验函数
const validatorUsername = (rule: any, value: any, callback: any) => {
  if (value.trim().length >= 5) {
    callback();
  } else {
    callback(new Error("用户名长度不能小于5"));
  }
};
const validatorname = (rule: any, value: any, callback: any) => {
  if (value.trim().length >= 5) {
    callback();
  } else {
    callback(new Error("用户名长度不能小于5"));
  }
};
const validatorpassword = (rule: any, value: any, callback: any) => {
  if (value.trim().length >= 5) {
    callback();
  } else {
    callback(new Error("用户名长度不能小于5"));
  }
};

// 自定义校验规则
const rules = {
  username: [
    {
      required: true,
      message: "用户名不能为空",
      trigger: "blur",
      validator: validatorUsername,
    },
  ],
  name: [
    {
      required: true,
      message: "姓名不能为空",
      trigger: "blur",
      validator: validatorname,
    },
  ],
  password: [
    {
      required: true,
      message: "密码不能为空",
      trigger: "blur",
      validator: validatorpassword,
    },
  ],
};
</script>
<script lang="ts">
// import { onUpdated,nextTick } from "vue";
export default {
  data(){
    return{
      onEdit:false
    }
  },
  methods: {
    
}
}
</script>
<style scoped></style>
