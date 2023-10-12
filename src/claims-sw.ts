import {
  cleanupOutdatedCaches,
  createHandlerBoundToURL,
  precacheAndRoute,
} from 'workbox-precaching'
import { clientsClaim } from 'workbox-core'
import { NavigationRoute, registerRoute } from 'workbox-routing'

declare let self: ServiceWorkerGlobalScope

// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST)

// clean old assets
cleanupOutdatedCaches()

// eslint-disable-next-line no-useless-escape
const allowlist: undefined | RegExp[] = [/^\/(?:[a-z0-9\/\-?=&])*$/]

// to allow work offline
registerRoute(
  new NavigationRoute(createHandlerBoundToURL('index.html'), { allowlist })
)

self.skipWaiting()
clientsClaim()
