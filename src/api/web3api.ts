import Web3 from 'web3'
import window from 'global'
import { tokens } from '../data/data'

let web3 = window.web3
let ethereum = window.ethereum
if (typeof web3 !== 'undefined') {
  web3 = new Web3(Web3.givenProvider)
} else {
  web3 = new Web3(
    new Web3.providers.HttpProvider(process.env.WEB3_PROVIDER)
  )
}

export async function getMetamaskAccount() {
  await ethereum.enable()
  const accounts = await web3.eth.getAccounts()
  return accounts[0]
}

export async function isMetamaskConnected() {
  const accounts = await web3.eth.getAccounts()
  if (accounts.length === 0) return false
  return accounts[0]
}

export async function getWeb3() {
  return web3
}

export async function handleMetamaskSignMessage(address, message) {
  try {
    const signature = await web3.eth.personal.sign(
      message,
      address,
      ""
    );
    return signature;
  } catch (err) {
    throw new Error("You need to sign the message to be able to log in.")
  }
}

export async function getERC20TokenBalance(walletAddress, tokenName) {
  const token = tokens.find(
    (token) => token.name.localeCompare(tokenName) === 0
  )
  let contract = new web3.eth.Contract(token.ABI, token.tokenAddress)
  const result = await contract.methods.balanceOf(walletAddress).call()

  return result / Math.pow(10, tokens[0].decimal)
}