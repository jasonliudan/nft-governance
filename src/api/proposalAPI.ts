import axios from 'axios'
import { handleMetamaskSignMessage, getMetamaskAccount } from './web3api'

const ipfs = require("nano-ipfs-store").at("https://ipfs.infura.io:5001")

export const getProposals = async () => {
  const data = await axios
    .get(`${process.env.SERVER_URL}/proposals/get-proposals`)
    .catch((error) => error)
  return data.data
}
export const createProposal = async (proposal) => {
  const address = await getMetamaskAccount()
  const signedMessage = await handleMetamaskSignMessage(address, JSON.stringify(proposal))
  const signedProposal = {
    ...proposal,
    signature: signedMessage
  }

  const ipfsHash = await ipfs.add(JSON.stringify(signedProposal))
  const status = await axios
    .post(`${process.env.SERVER_URL}/proposals/create-proposal`, {
      hash: ipfsHash
    }, {})
    .catch((error) => error)
  return status.data
}