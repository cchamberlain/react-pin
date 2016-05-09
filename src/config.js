import path from 'path'
import { createLogger } from 'bunyan'

export const appName = 'react-pin'

export const noop = () => {}
export const IS_HOT = process.env.NODE_ENV === 'hot'
export const IS_DEV = process.env.NODE_ENV !== 'production'
export const IS_BROWSER = typeof window === 'object'

export const baseUrl = '/'

export const log = !IS_DEV && IS_BROWSER ? ({ name: appName, trace: noop, debug: noop, info: noop, warn: noop, error: noop, fatal: noop }) : createLogger({ name: appName, level: 'info' })

export const __rootname = IS_BROWSER ? '/' : __dirname
export const resolveRoot = (...args) => IS_BROWSER ? `${__rootname}${args.join('/')}` : path.resolve(__rootname, ...args)
