<template>
  <div :id="editorId"></div>
</template>

<script>
import merge from 'lodash.merge'

let script
// 脚本标识
const scriptId = 'onlyoffice-editor'
// 异步加载 api.js
const loadScript = src => new Promise((resolve, reject) => {
  script = document.querySelector(`#${scriptId}`)
  // 加载成功
  const onLoad = () => {
    resolve()
    script.removeEventListener('load', onLoad)
  }
  // 加载失败
  const onError = () => {
    reject(new Error(`脚本 ${src} 加载失败`))
    script.removeEventListener('error', onError)
  }
  if (!script) {
    script = document.createElement('script')
    script.id = scriptId
    script.src = src
    script.addEventListener('load', onLoad)
    script.addEventListener('error', onError)
    document.head.appendChild(script)
  } else if (window.DocsAPI) {
    resolve()
  } else {
    script.addEventListener('load', onLoad)
    script.addEventListener('error', onError)
  }
})

export default {
  name: 'onlyoffice-editor',
  props: {
    /**
     * Onlyoffice 配置项
     */
    config: {
      type: Object,
      required: true,
      validator: value => value && Object.prototype.toString.call(value) === '[object Object]' && Object.keys(value).length > 0
    },
    /**
     * Onlyoffice api.js 路径地址
     */
    src: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      // 编辑器配置项，完整配置项参见：https://api.onlyoffice.com/editors/config/
      editorConfig: {
        // 编辑器宽度
        width: 1200,
        // 编辑器高度
        height: 600,
        // 编辑器类型，支持 word、cell（表格）、slide（PPT）
        documentType: 'word',
        // 文档配置
        document: {
          // 权限
          permissions: {
            // 启用评论
            comment: false,
            // 启用下载
            download: true,
            // 启用编辑
            edit: true,
            // 启用导出
            print: true,
            // 启用预览
            review: true
          }
        },
        editorConfig: {
          // 回调地址
          callbackUrl: this.src,
          // 设置语言
          lang: 'zh-CN',
          // customization 字段相关配置详解：https://api.onlyoffice.com/editors/config/editor/customization
          customization: {
            // 强制保存
            forcesave: true,
            features: {
              // 关闭拼写检查
              spellcheck: false
            }
          }
        }
      },
      scriptId,
      editorId: `editor-${new Date().getTime().toString('32')}`
    }
  },
  watch: {
    config: {
      handler () {
        this.initEditor()
      },
      deep: true
    },
    src () {
      this.initEditor()
    }
  },
  mounted () {
    this.initEditor()
  },
  beforeDestroy () {
    // 组件销毁前销毁编辑器
    if (this.editor) {
      this.editor.destroyEditor()
      this.editor = null
    }
  },
  methods: {
    // 初始化编辑器
    initEditor () {
      loadScript(this.src).then(this.createEditor)
    },
    // 创建编辑器
    createEditor () {
      if (this.editor) {
        this.editor.destroyEditor()
        this.editor = null
      }
      this.editor = new window.DocsAPI.DocEditor(this.editorId, merge({}, this.editorConfig, this.config))
      this.$emit('ready', this.editor)
    }
  }
}
</script>
