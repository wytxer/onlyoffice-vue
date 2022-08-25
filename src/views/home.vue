<template>
  <div class="page-home">
    <ex-card title="基础使用" description="支持配置 api.js 路径和配置项">
      <onlyoffice-editor :src="src" :config="editorConfig1" @ready="onReady1" />
    </ex-card>
    <ex-card title="打包后使用" description="异步加载。">
      <lib-onlyoffice-editor :src="src" :config="editorConfig2" @ready="onReady2" />
    </ex-card>
  </div>
</template>

<script>
import merge from 'lodash.merge'
import { OnlyofficeEditor as LibOnlyofficeEditor } from '../../lib/onlyoffice-editor.umd.min'

const editorConfig = {
  document: {
    fileType: 'docx',
    key: 'test5.docx',
    title: '测试文档.docx',
    url: 'http://IP/static/test5.docx'
  },
  editorConfig: {
    callbackUrl: 'http://IP/api/v1/onlyoffice/callback'
  }
}

export default {
  components: {
    LibOnlyofficeEditor
  },
  data () {
    return {
      src: 'http://IP/web-apps/apps/api/documents/api.js',
      editorConfig1: merge({}, editorConfig),
      editorConfig2: merge({}, editorConfig)
    }
  },
  created () {
    // 模拟配置项变更
    setTimeout(() => {
      this.editorConfig2 = {
        document: {
          fileType: 'docx',
          key: 'test2.docx',
          title: 'test2.docx',
          url: 'http://IP/static/test2.docx'
        },
        editorConfig: {
          callbackUrl: 'http://IP/api/v1/onlyoffice/callback'
        }
      }
    }, 8000)
  },
  methods: {
    onReady1 (editor) {
      console.log('onReady1', editor)
    },
    onReady2 (editor) {
      console.log('onReady2', editor)
    }
  }
}
</script>
