<script setup lang='ts'>
import { ref } from "vue"
//收集数据
let data = defineProps({
    id: String,
    title: String,
    text: String, 
    viodeStart: Boolean,
    textColor: String,
     //是否显示横杠,同时控制序号的该变
})
let emit = defineEmits(["decideStart"])



let showId = ref(data.id)
// 鼠标进入后适当改变样式
const hasChange = () => {
    emit("decideStart");
    if(!data.viodeStart) {
        let arr = [(data.id as String)[0]];
        let str = "+1234567890:;*?"
        let timer = setInterval(() => {
            let index = Math.floor(Math.random() * str.length)
            arr[1] = str[index];
            showId.value = arr.join("")

        }, 50)
        setTimeout(() => {
            clearInterval(timer)
            showId.value = data.id
        }, 400)
    }

   
}

</script>

<template>
    <div class="show-container">
        <div class="viode">
            <video id="video-background" v-if="data.viodeStart">
                <source src="./one.mp4" type="video/mp4">
            </video>
            <div class="content" @mouseenter="hasChange" :style="{ color: data.textColor }">
                <div class="introduce">
                    <div class="top-id">{{ showId }}</div>
                    <div class="button-part">
                        <div class=" title">
                            <span class="lever" :style="{ width:data.viodeStart?14+'px':0}"></span>
                            {{ data.title }}
                        </div>
                        <div class="essay">
                            {{ data.text }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.show-container {
    margin-bottom: 20px;
    margin-left: 20px;
    margin-top: 20px;
    width: 563px;
    height: 270px;
    background-color: white;
}

.viode {
    width: 563px;
    height: 270px;
    position: relative;
}

#video-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 563px;
    height: 270px;
    object-fit: cover;
    z-index: 1;
}

.content {
    width: 563px;
    height: 270px;
    position: relative;
    z-index: 2;

    color: black;


}

.content .introduce {

    padding: 31px 38px 28px 38px;

}

.title {
    font-size: 25px;

    height: 50px;
}

.lever {
    width: 0;
    display: inline-block;
    background: white;
    transition: width 0.3s;
    height: 3px;
    border-radius: 1px;
    transform: translate3d(0, -8px, 0);

}

.top-id {
    display: block;
    font-size: 20px;
    height: 20px;
    line-height: 20px;
    letter-spacing: .09px;

    transform-origin: 0 0;
    transform: scale(.5);
}

.button-part {
    margin-top: 52px;

}

.essay {
    font-size: 13px;
    max-height: 88px;
    max-width: 332px;
    line-height: 22px;
    letter-spacing: .4px;
}
</style>