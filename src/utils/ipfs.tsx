const ipfs = require("nano-ipfs-store").at(process.env.IPFS_SERVER_URL)

export const decodeHash = async (hash) => {
    const decoded = await ipfs.cat(hash)
    return JSON.parse(decoded)
}
