<template>
    <div class="s-checkbox-group">
      <slot></slot>
    </div>
  </template>
  <script>
  export default {
    name: 'sp-check-group',
    provide () {
      return {
        CheckboxGroup: this
      }
    },
    props: {
      value: {
        type: Array
      }
    }
  }
  </script>