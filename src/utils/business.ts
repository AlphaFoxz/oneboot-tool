import { useI18nStore } from '@/stores/i18n'

const $t = useI18nStore().actions.t

export function onCancel() {
  throw Error($t('error.userCancel'))
}

export function onError(str: string) {
  throw Error($t('signal.{str}', { str }))
}

export function isValidPath(path: string): boolean {
  return !!path && path.length > 0
}

export function isValidPackageName(name: string): boolean {
  return /^[a-zA-Z_][a-zA-Z0-9_]*(\.[a-zA-Z_][a-zA-Z0-9_])*$/.test(name)
}
