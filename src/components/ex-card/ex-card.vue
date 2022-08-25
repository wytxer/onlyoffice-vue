<template>
  <div class="ex-card">
    <div v-if="title" class="ex-card__title">
      {{ title }}
    </div>
    <div v-if="description" class="ex-card__description">
      {{ description }}
    </div>
    <div class="ex-card__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ex-card',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.ex-card {
  margin-bottom: 32px;
  padding: 24px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
  &__title {
    color: rgba(0, 0, 0, 0.85);
    font-size: 18px;
    padding-bottom: 8px;
  }
  &__description {
    color: #5e6d82;
    padding-bottom: 8px;
  }
  &__body {
    padding-top: 16px;
  }
}
</style>
