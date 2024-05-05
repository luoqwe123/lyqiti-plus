<script setup lang='ts'>
import show from "./index.vue"
import { ref } from "vue"
//记录播放视频的变量
let recordViodeStart = ref<number>(1)
//背景元素的对象
let backViodeObject: any = ref({ 1: true })
let receive = defineProps({
    title: Object, //主题
    text: Object, //内容
    count: String, //需要创建的组件数
})
let arr: any = [];
for (let i = 1; i <= Number(receive.count); i++) {
    arr.push(i);
}
const changeBoFanEl = (item: number) => {

    backViodeObject.value[recordViodeStart.value] = false
    backViodeObject.value[item] = true
    recordViodeStart.value = item
}
defineOptions({
    name:'ly-box'
})
</script>

<template>
    <div class="center-container">
        <div class="box" v-for="item in arr">
            <show :id="(item>9)?item:('0'+item)" :title="(receive.title as any)[item]" :text="(receive.text as any)[item]" :data-id="item"
                @decideStart="changeBoFanEl(item)" :viodeStart="backViodeObject[item]"
                :textColor="backViodeObject[item] ? 'white' : 'black'" ></show>
        </div>

    </div>
</template>



<style lang="scss" scoped>
.center-container {
    display: flex;
    flex-wrap: wrap;
}
</style>