'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',

  VUE_MOGU_WEB: '"http://localhost:9527"',
  PICTURE_API: '"http://localhost:8607/mogu-picture"',
	WEB_API: '"https://mock.presstime.cn/mock/640e7f01a1c7a972361759c5/blog"',
  SEARCH_API: '"http://localhost:8607/mogu-search"',

})
