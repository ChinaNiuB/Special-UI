<template>
    <div class="s-switch" :class="{ 'is-checked': value }" @click="handleClick">
        <span class="s-switch_core" ref="core">
            <span class="s-switch_button"></span>
        </span>

        <input type="checkbox" class="s-switch_input" :name="name" ref="input">
    </div>
</template>

<script>
export default {
    name: 'sp-switch',

    data() {
        return {

        };
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        activeColor: {
            type: String,
            default: '',
        },
        inactiveColor: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        }
    },

    mounted() {
        this.setColor();
    },
    // watch: {
    //     'value'() {
    //         this.setColor()
    //     }
    // },
    methods: {
        handleClick() {
            // 这里的 !this.value处理完,还没响应到父组件修改,
            // 然后直接执行this.setColor函数更新是不行的,因为我们是根据父组件的v-model来判断是否变化,所有要包裹个$nextTick方法,
            // 等上一步操作父组件的DOM更新完再执行
            this.$emit('input', !this.value);
            this.$nextTick(() => {
                this.setColor();
            })
        },

        setColor() {
            // 修改开关颜色
            if (this.activeColor || this.inactiveColor) {
                let color = this.value ? this.activeColor : this.inactiveColor;
                this.$refs.core.style.borderColor = color;
                this.$refs.core.style.backgroundColor = color;
            }
            // 控制checkbox的值,input值同步value值
            this.$refs.input.checked = this.value
        }
    },
};
</script>

<style lang="scss" scoped>
.s-switch {
    display: inline-block;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;

    .s-switch_core {
        margin: 0;
        display: inline-block;
        position: relative;
        width: 40px;
        height: 20px;
        border: 1px solid #dcdfe6;
        outline: none;
        border-radius: 10px;
        box-sizing: border-box;
        background: #dcdfe6;
        cursor: pointer;
        transition: border-color .3s, background-color .3s;
        vertical-align: middle;

        .s-switch_button {
            position: absolute;
            top: 1px;
            left: 1px;
            border-radius: 100%;
            transition: all .3s;
            width: 16px;
            height: 16px;
            background-color: #fff;
        }
    }

    // 隐藏input标签
    .s-switch_input {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0;
    }
}

// 选中样式
.is-checked {
    .s-switch_core {
        border-color: #409eff;
        background-color: #409eff;

        .s-switch_button {
            transform: translateX(20px);
        }
    }
}
</style>
