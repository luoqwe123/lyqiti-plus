import aliShow from './index.vue'

//为组件单独提供install安装方法，供按需引入
aliShow.install = (app: any) => {
    app.component(aliShow.name, aliShow)
}

export default aliShow  