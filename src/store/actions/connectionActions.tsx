import * as ActionTypes from '../constants'

//Metamask
export const setEthAddress = (ethAddress) => {
  return {
    type: ActionTypes.SET_ETH_ADDRESS,
    ethAddress,
  }
}
export const unsetEthAddress = () => {
  return {
    type: ActionTypes.UNSET_ETH_ADDRESS,
  }
}
