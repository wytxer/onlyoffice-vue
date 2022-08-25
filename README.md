# ONLYOFFICE VUE

基于 Vue2 的 Onlyoffice 编辑器。


## 快速使用

1、安装

```bash
pnpm add onlyoffice-vue
```

2、使用

```html
<template>
  <onlyoffice-editor :src="src" :config="editorConfig" @ready="onReady" />
</template>

<script>
export default {
  data () {
    return {
      src: 'http://IP/web-apps/apps/api/documents/api.js',
      editorConfig: {
        document: {
          fileType: 'docx',
          key: 'key.docx',
          title: '测试.docx',
          url: 'http://IP/static/test.docx'
        },
        editorConfig: {
          callbackUrl: 'http://IP/api/v1/onlyoffice/callback'
        }
      }
    }
  },
  methods: {
    // 编辑器加载完毕后回调 ready 函数，editor 为当前编辑器实例
    onReady (editor) {}
  }
}
</script>
```

[查看更多 Onlyoffice 使用方式](https://blog.bszhct.com/2022/08/15/onlyoffice-quick-start/)


## License

[MIT](/LICENSE)
