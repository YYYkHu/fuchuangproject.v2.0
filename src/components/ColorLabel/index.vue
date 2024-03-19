<template>
  <div class="box" >
      <div @click="choose" class="btn choose" ref="label">{{ text }}</div>   
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
const props = defineProps({
  name: String,
  text: {
      type: String,
      default: 'button'
  }
})
const label = ref<HTMLElement | null>(null);
const childText=ref(props.text)
const toGray=()=>{
  if(label.value){
    label.value.classList.remove("choose")
  }
  
}
const toColor=()=>{
  if(label.value){
    label.value.classList.add("choose")
  }
}
const choose=()=>{
  toColor()
}
defineExpose({toColor,toGray,childText,choose})
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.box{
  display: inline-block;
}
.btn{
  /* width: 60px; */
  font-size: 8pt;
  border: 3px solid transparent;
  border-image: linear-gradient(90deg, #bebabd, #bcbdbf) 1;
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image:  linear-gradient(90deg, #bebabd, #bcbdbf);
}
.choose{
  border-image: linear-gradient(90deg, #f192ef, #7ba3f4) 1;
  background-image:  linear-gradient(90deg, #f192ef, #7ba3f4);
}
:hover.btn{
  border-image: linear-gradient(90deg, #f192ef, #7ba3f4) 1;
  background-image:  linear-gradient(90deg, #f192ef, #7ba3f4);
}
</style>