<template>
    <label class="s-radio" :class="{'is-checked':label === model}">
        <span class="s-radio_input">
            <span class="s-radio_inner"></span>
            <input
             type="radio"
             class="s-radio_original"
             :value="label"
             :name="name"
             v-model="model">
        </span>
        <span class="s-radio_label">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>
<script>
export default {
    name: 'sp-radio',
    inject: {
        RadioGroup: {
            default: ''
        }
    },
    props: {
        label: {
            type:[String, Number, Boolean],
            default: ''
        },
        value: null,
        name: {
            type: String,
            default: ''
        }
    },
    computed: {
        model: {
            get() {
                return this.isGroup ? this.RadioGroup.value :  this.value
            },
            set(value) {
                this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
            }
        },
        // 判断有没有使用 radio-group 组件
        isGroup() {
            // 将类型转换为 Boolean值来判断
            return !!this.RadioGroup
        }
    }
}
</script>

<style lang="scss" scoped>
.s-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;

    .s-radio_input {
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;

        .s-radio_inner {
            border: 1px solid #dcdfe6;
            border-radius: 100%;
            width: 14px;
            height: 14px;
            background-color: #fff;
            position: relative;
            cursor: pointer;
            display: inline-block;
            box-sizing: border-box;

            &:after {
                width: 4px;
                height: 4px;
                border-radius: 100%;
                background-color: #fff;
                content: "";
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(0);
                transition: transform .15s ease-in;
            }
        }

        .s-radio_original {
            opacity: 0;
            outline: none;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0px;
            right: 0;
            bottom: 0;
            margin: 0;
        }
    }

    .s-radio_label {
        font-size: 14px;
        padding-left: 10px;
        ;
    }
}

// 选中的样式
.s-radio.is-checked {
    .s-radio_input {
        .s-radio_inner {
            border-color: #409eff;
            background-color: #409eff;

            &:after {
                transform: translate(-50%, -50%) scale(1);
            }
        }
    }

    .s-radio_label {
        color: #409eff;
    }
}
</style>