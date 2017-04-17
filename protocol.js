'use strict'

const duck = require('protoduck')

// CacheProtocol
//
// https://developer.mozilla.org/en-US/docs/Web/API/Cache
//
module.exports = duck.define(['req', 'res'], {
  // Returns a Promise that resolves to the response associated with the first
  // matching request in the Cache object.
  match: ['req'],

  // Returns a Promise that resolves to the response associated with the first
  // matching request in the Cache object.
  matchAll: ['req'],

  // Takes a URL, retrieves it and adds the resulting response object to the
  // given cache. This is fuctionally equivalent to calling fetch(), then using
  // Cache.put() to add the results to the cache.
  add: ['req'],

  // Takes an array of URLs, retrieves them, and adds the resulting response
  // objects to the given cache.
  addAll: [],

  // Takes both a request and its response and adds it to the given cache.
  put: ['req', 'res'],

  // Finds the Cache entry whose key is the request, and if found, deletes the
  // Cache entry and returns a Promise that resolves to true. If no Cache entry
  // is found, it returns false.
  delete: ['req'],

  // Returns a Promise that resolves to an array of Cache keys.
  keys: ['req']
})
