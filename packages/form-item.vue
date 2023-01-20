<template>
    <div class="s-form-item">
        <label :style="labelStyle" class="s-form-item_label">{{ label }}</label>
        <div class="s-form-item_content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sp-form-item',
    props: {
        label: {
            type: String,
            default: ''
        }
    },
    inject: ['Form'],
    computed: {
        labelStyle() {
            return {
                width: this.Form.labelWidth
            }
        }
    }
}
</script>
 
<style lang="scss" scoped>
.s-form-item {
    margin-bottom: 25px;

    .s-form-item_label {
        text-align: right;
        vertical-align: middle;
        float: left;
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        padding: 0 12px 0 0;
        box-sizing: border-box;
    }

    .s-form-item_content {
        display: flex;
        line-height: 40px;
        position: relative;
        font-size: 14px;
        overflow: hidde;
    }
}
</style>