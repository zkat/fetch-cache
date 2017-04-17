'use strict'

const CacheProtocol = require('./protocol')
const LRU = require('lru-cache')

const Cache = module.exports = class Cache {
  constructor (opts) {
    this.lru = new LRU(opts)
  }
}

CacheProtocol.impl(Cache, {
  match (req) {
    return Promise.resolve(req)
  },
  matchAll (req) {
    return Promise.resolve([req])
  },
  add (req) {
    return Promise.resolve(req)
  },
  addAll (reqs) {
    return Promise.resolve(reqs)
  },
  put (req, res) {
    return Promise.resolve(res)
  },
  delete () {
    return Promise.resolve(false)
  },
  keys () {
    return Promise.resolve([])
  }
})
