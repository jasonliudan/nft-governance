import { decryptSignatrue } from '../utils/encrypt'

export default function VoteCard({ vote, tokenSymbol, choices }) {

    //Get Original Object
    const voteObj = {
        proposalHash: vote.proposalHash,
        choice: vote.choice,
        votingPower: vote.votingPower
    }

    const address = decryptSignatrue(JSON.stringify(voteObj), vote.signature)
    return (

        <div className="px-6 py-4 border-r border-l border-b cursor-pointer">
            <div className='flex justify-between mt-1 flex-row'>
                <p>{address.substring(0, 6)}...{address.substring(address.length - 4, address.length)}</p>
                <p className='sm:ml-2'>{choices && choices[vote.choice]}</p>
                <p className='sm:ml-2'>{vote.votingPower.toFixed(2)} {tokenSymbol}</p>
            </div>
        </div>

    )
}
