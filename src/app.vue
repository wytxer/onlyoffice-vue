<template>
  <div id="app" class="page-app">
    <header class="page-app__header">
      Onlyoffice Vue
    </header>
    <div class="page-app__body">
      <router-view />
    </div>
  </div>
</template>

<style lang="less">
body {
  padding: 0;
  margin: 0;
}
html,
body {
  font-size: 14px;
  color: #333;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", "Arial", "sans-serif";
}
.page-app {
  &__header {
    color: #158dff;
    padding: 16px 32px;
    font-size: 24px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  &__body {
    padding: 16px 32px;
  }
}
</style>
