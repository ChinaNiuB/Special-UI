<template>
    <transition name="dialog-fade">
        <!-- 对话框的遮罩  .self代表只有点击自己才能触发 -->
        <div class="s-dialog_wrapper" v-show="visible" @click.self="handleClose">
            <div class="s-dialog" :style="{width, marginTop:Top}">
                <div class="s-dialog_header">
                    <slot name="title">
                        <span class="s-dialog_title">{{ title }}</span>
                    </slot>
                    <button class="s-dialog_headerbtn" @click="handleClose">
                        <i class="s-icon-close">X</i>
                    </button>
                </div>
                <div class="s-dialog_body">
                    <!-- 默认插槽 -->
                    <slot></slot>
                </div>
                <div class="s-dialog_footer" v-if="$slots.footer">
                    <slot name="footer"></slot>    
                </div>
            </div>
        </div>
    </transition>
    
    
</template>

<script>
export default {
    name: 'sp-dialog',
    props: {
        title: {
            type: String,
            default: '提示'
        },
        width: {
            type: String,
            default: '20%'
        },
        Top: {
            type: String,
            default: '30vh'
        },
        visible: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClose() {
                this.$emit('update:visible', false);
            }
    },
};
</script>

<style lang="scss" scoped>
.s-dialog_wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0, 0, 0, 0.5);

    .s-dialog {
        position: relative;
        margin: 15vh auto 50px;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        width: 30%;

        &_header {
            padding: 20px 20px 10px;

            .s-dialog_title {
                line-height: 24px;
                font-size: 18px;
                color: #303133;
            }

            .s-dialog_headerbtn {
                position: absolute;
                top: 20px;
                right: 20px;
                padding: 0;
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 16px;

                .one-icon-close {
                    color: 909399
                }
            }
        }

        &_body {
            padding: 30px 20px;
            color: #606266;
            font-size: 14px;
            word-break: break-all;
        }

        &_footer {
            padding: 10px 20px 20px;
            text-align: right;
            box-sizing: border-box;

            ::v-deep .s-button:first-child {
                margin-right: 20px;
            }
        }
    }
}

.dialog-fade-enter-active{
    animation: fade .5s;
}
.dialog-fade-leave-active{
    animation: fade .5s reverse;
}
@keyframes fade {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>