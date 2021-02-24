import axios from 'axios'
import { handleMetamaskSignMessage, getMetamaskAccount } from './web3api'

const ipfs = require("nano-ipfs-store").at(process.env.IPFS_SERVER_URL)

export const getProposals = async () => {
  const data = await axios
    .get(`${process.env.SERVER_URL}/proposals/get-proposals`)
    .catch((error) => error)
  return data.data
}
export const createProposal = async (proposal) => {
  const address = await getMetamaskAccount()
  const signedMessage = await handleMetamaskSignMessage(address, JSON.stringify(proposal))
  if (signedMessage) {
    const signedProposal = {
      ...proposal,
      signature: signedMessage
    }

    const ipfsHash = await ipfs.add(JSON.stringify(signedProposal))
    const data = await axios
      .post(`${process.env.SERVER_URL}/proposals/create-proposal`, {
        hash: ipfsHash
      }, {})
      .catch((error) => error)
    return data.data
  }
  return false
}

//Votes
export const getVotes = async (proposalHash) => {
  const data = await axios
    .get(`${process.env.SERVER_URL}/proposals/get-votes`, { params: { proposalHash } })
    .catch((error) => error)
  return data.data
}
export const createVote = async (vote) => {
  const address = await getMetamaskAccount()
  const signedMessage = await handleMetamaskSignMessage(address, JSON.stringify(vote))
  if (signedMessage) {
    const signedVote = {
      ...vote,
      signature: signedMessage
    }

    const ipfsHash = await ipfs.add(JSON.stringify(signedVote))
    const data = await axios
      .post(`${process.env.SERVER_URL}/proposals/create-vote`, {
        hash: ipfsHash
      }, {})
      .catch((error) => error)
    return data.data
  }
  return false
}