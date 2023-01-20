<template>
  <div id="app">
    <sp-form :model="model">
      
      <sp-form-item label="用户名:">
        <sp-input placeholder="请输入内容" v-model="model.text"></sp-input>
      </sp-form-item>

      <sp-form-item label="选择:">
        <sp-checkbox v-model="model.active">是否选中</sp-checkbox>
      </sp-form-item>

    </sp-form>
    <sp-button>shu</sp-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      model: {
        active: false,
        text: ''
      }
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
#app{
  width: 200px;
}
</style>
