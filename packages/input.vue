<template>
    <div class="s-input" :class="{'s-input_suffix': showSuffix}">
        <input type="text" 
            class="s-input_inner" 
            :class="{'is-disabled': disabled}" 
            :placeholder="placeholder"
            :type="showSuffix ? (passwordvisible ? 'password' : 'text') : type" 
            :name="name" 
            :disabled="disabled"
            :value="value"
            @input="handleInput"
            >
        <span class="s-input_suffix" v-if="showSuffix">
            <i class="s-input_icon s-icon-bluetoothoff" v-if="clearable && value" @click="clear"></i>   
            <i class="s-input_icon s-icon-bluetoothoff" :class="{'s-icon-bluetoothoff-acitve': passwordvisible}" v-if="showpassword" @click="handlePassword"></i>    
        </span>
    </div>
</template>

<script>
export default {
    name: 'sp-input',
    props: {
        disabled: {
            type: Boolean,
            default:false
        },
        placeholder: {
            type: String,
            default:''
        },
        type: {
            type: String,
            default:'text'
        },
        name: {
            type: String,
            default:''
        },
        value: {
            type: String,
        },
        clearable:{
            type: Boolean,
            default: false
        },
        showpassword:{
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            passwordvisible: false
        };
    },
    computed: {
        showSuffix() {
            return this.clearable || this.showpassword;
        }
    },

    methods: {
        handleInput(e) {
            this.$emit('input', e.target.value);
        },
        clear() {
            this.$emit('input', '');
        },
        handlePassword() {
            this.passwordvisible = !this.passwordvisible;
        }
    },
};
</script>

<style lang="scss" scoped>
.s-input{
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .s-input_inner{
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,045,.355,1);
      width: 100%;
 
      &:focus{
        outline: none;
        border-color: #409eff;
      }
      // input禁用样式
      &.is-disabled{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor:not-allowed;
      }
    }
  }

  .s-input_suffix{
    .s-input_inner{
      padding-right: 30px;
    }
    .s-input_suffix{
      position: absolute;
      right: 10px;
      height: 100%;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i{
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
      }
      .s-icon-bluetoothoff-acitve{
        color: rgba($color: #6340af, $alpha: 1.0);
      }
    }
  }
</style>