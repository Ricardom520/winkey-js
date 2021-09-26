const http = require('http')
const url = require('url')

const version = '0.0.1'

class winkey {
  constructor() {
    http.createServer(function(req, res) {
      const urlPath: string = url.parse(req.url)
    })
  }
}

export default (): string => {
  return `this version is ${version}`
}