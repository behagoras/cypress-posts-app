'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

const env = merge(prodEnv, {
  NODE_ENV: '"development"',
  apiKey: "AIzaSyAkwidNh8Xsse82xtZN1UbI4GML9yh3FOo",
  authDomain: "platzi-e2e.firebaseapp.com",
  databaseURL: "https://platzi-e2e.firebaseio.com",
  projectId: "platzi-e2e",
  storageBucket: "platzi-e2e.appspot.com",
  messagingSenderId: "314037765894",
  appId: "1:314037765894:web:0933653c2a44043c550087"
})

console.log(env)
module.exports = env
