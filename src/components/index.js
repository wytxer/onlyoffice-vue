import OnlyofficeEditor from './onlyoffice-editor'

const components = [
  OnlyofficeEditor
]

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  OnlyofficeEditor
}
export default {
  install,
  version: '1.0.0'
}
