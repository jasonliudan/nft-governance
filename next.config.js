require('dotenv').config()

module.exports = {
  env: {
    SERVER_URL: process.env.SERVER_URL,
    IPFS_SERVER_URL: process.env.IPFS_SERVER_URL,
    WEB3_PROVIDER: process.env.WEB3_PROVIDER
  },
}
