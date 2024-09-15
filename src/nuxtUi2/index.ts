import { getComponentMap, getPropsMap } from './mapping'

export function nuxtUi2() {
  return {
    uiName: '@nuxt/ui2',
    map: getPropsMap(),
    lib: '@nuxt/ui',
    prefix: 'U',
  }
}

export function nuxtUi2Components() {
  return {
    map: getComponentMap(),
    isSeperatorByHyphen: false,
    prefix: 'U',
    lib: '@nuxt/ui',
    isReact: false,
  }
}
