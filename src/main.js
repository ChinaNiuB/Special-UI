import Vue from 'vue'
import App from './App.vue'
// import SpButton from './components/Button.vue'
// import SpDialog from './components/dialog.vue'
// import SpInput from './components/input.vue'
// import SpSwitch from './components/switch.vue'
// import SpRadio from './components/radio.vue'
// import SpRadioGroup from './components/radio-group.vue'
// import SpCheckBox from './components/check-box.vue'
// import SpCheckGroup from './components/checkbox-group.vue'
// import SpForm from './components/form.vue'
// import SpFormItem from './components/form-item.vue'
import SpUI from '../dist/special-ui.umd.min'
import '../dist/special-ui.css'
// import './assets/fonts/font.scss'

Vue.use(SpUI)
Vue.config.productionTip = false;
// Vue.component(SpButton.name, SpButton)
// Vue.component(SpDialog.name, SpDialog)
// Vue.component(SpInput.name, SpInput)
// Vue.component(SpSwitch.name, SpSwitch)
// Vue.component(SpRadio.name, SpRadio)
// Vue.component(SpRadioGroup.name, SpRadioGroup)
// Vue.component(SpCheckBox.name, SpCheckBox)
// Vue.component(SpCheckGroup.name, SpCheckGroup)
// Vue.component(SpForm.name, SpForm)
// Vue.component(SpFormItem.name, SpFormItem)

new Vue({
  render: h => h(App),
}).$mount('#app')
