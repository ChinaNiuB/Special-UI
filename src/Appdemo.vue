<template>
  <div id="app">
    <!-- <div class="content">
      <sp-button>按钮</sp-button>
      <sp-button type="primary" @sss="fn" disabled>事件</sp-button>
      <sp-button type="success">按钮</sp-button>
      <sp-button type="info">按钮</sp-button>
      <sp-button type="warning">按钮</sp-button>
      <sp-button type="danger">按钮</sp-button>
    </div>
    
    <div class="content">
      <sp-button>按钮</sp-button>
      <sp-button plain type="primary">按钮</sp-button>
      <sp-button plain type="success">按钮</sp-button>
      <sp-button plain type="info">按钮</sp-button>
      <sp-button plain type="warning">按钮</sp-button>
      <sp-button plain type="danger">按钮</sp-button>
    </div>

    <div class="content">
      <sp-button round>按钮</sp-button>
      <sp-button round plain type="primary">按钮</sp-button>
      <sp-button round plain type="success">按钮</sp-button>
      <sp-button round plain type="info">按钮</sp-button>
      <sp-button round plain type="warning">按钮</sp-button>
      <sp-button round plain type="danger">按钮</sp-button>
    </div>

    <div class="content">
      <sp-button circle icon="s-icon-bluetoothoff">是</sp-button>
      <sp-button circle plain type="primary">是</sp-button>
      <sp-button circle plain type="success">是</sp-button>
      <sp-button circle plain type="info">是</sp-button>
      <sp-button circle plain type="warning">是</sp-button>
      <sp-button circle plain type="danger">是</sp-button>
    </div>

    <div class="content">
      <sp-button circle icon="s-icon-bluetoothoff"></sp-button>
      <sp-button circle icon="s-icon-bluetoothoff" plain type="primary"></sp-button>
      <sp-button circle icon="s-icon-bluetoothoff" plain type="success"></sp-button>
      <sp-button circle icon="s-icon-bluetoothoff" plain type="info"></sp-button>
      <sp-button circle icon="s-icon-bluetoothoff" plain type="warning"></sp-button>
      <sp-button circle icon="s-icon-bluetoothoff" plain type="danger"></sp-button>
    </div> -->
    <!-- <sp-dialog title="温馨提示"></sp-dialog> -->

    <!-- <sp-dialog>
      <template v-slot:title>
        <h1>dashab</h1>
      </template>
    </sp-dialog> -->
    <button @click="visible = true">按钮</button>

    <sp-dialog width="300px" Top="10vh" :visible.sync="visible">
      <h1>重点提示</h1>
      <template v-slot:footer>
        <sp-button type="primary" @click="visible = false">确定</sp-button>
        <sp-button @click="visible = false">取消</sp-button>
      </template>
    </sp-dialog>



    <!-- <sp-input placeholder="请输入用户名" type="password" name="username" disabled></sp-input> -->

    <!-- v-model语法糖,实质上等价于 -->
    <!-- <sp-input placeholder="请输入用户名" v-model="username"  clearable></sp-input> -->
    <!-- <input placeholder="请输入用户名" :value="username" @input="username = $event.target.value"> -->
    <!-- <sp-input placeholder="请输入用户名"  v-model="username" showpassword></sp-input> -->


    <!-- <sp-switch v-model="active" active-color="#13ce66" inactive-color="#ff4949" name="username"></sp-switch> -->




    <sp-radio v-model="gender" label="0">男</sp-radio>
    <sp-radio v-model="gender" label="1">女</sp-radio>
    <br>
    <sp-radio v-model="gender" label="0"></sp-radio>
    <sp-radio v-model="gender" label="1"></sp-radio>
    <br>
    <br>

    <sp-radio-group v-model="gender">
      <sp-radio label="0">男</sp-radio>
      <sp-radio label="1">女</sp-radio>
      <sp-radio label="4">尼玛</sp-radio>
    </sp-radio-group>


    <sp-checkbox v-model="active">是否选中</sp-checkbox>
    
    <sp-check-group v-model="hobby">
      <sp-checkbox label="抽烟"></sp-checkbox>
      <sp-checkbox label="喝酒"></sp-checkbox>
      <sp-checkbox label="烫头"></sp-checkbox>
    </sp-check-group>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    fn(e) {
      alert(e)
    },
  }
}
</script>

<style lang="scss">
.content {
  margin: 20px;
}
</style>
