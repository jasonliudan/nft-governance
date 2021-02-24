import { bufferToHex } from 'ethereumjs-util'
import { recoverPersonalSignature } from 'eth-sig-util'

export const decryptSignatrue = (message, signature) => {
    const msgBufferHex = bufferToHex(Buffer.from(message, "utf8"))
    const address = recoverPersonalSignature({
        data: msgBufferHex,
        sig: signature
    })
    return address
}