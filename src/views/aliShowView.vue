<template>
    <div class="container">
        <ly-box :title="title" :text="text" count="2"> </ly-box>
    </div>
</template>

<script setup lang='ts'>
import { ref } from "vue"
let text = ref({
  1: '阿里云在云计算等前沿技术领域持续探索，为全球数十亿用户提供可靠的云计算支持，服务全球12亿民众智能化和便利化，助力全球300万企业发展和创新，加速社会信息化发展。',
  2: '在阿里云，你将有机会接触前沿技术课题，参与行业顶级交流。在这里，你可以尽情展现自我，与一群优秀的人干有意思的事，我们将提供丰富的资源助力你与同领域的伙伴一起精进专业，拓展视野，实现可持续成长。',
})
let title = ref({
  1: '智慧在此交汇，创新在此迸发',
  2:  '可持续成长'
})
</script>

<style lang="scss" scoped>

</style>