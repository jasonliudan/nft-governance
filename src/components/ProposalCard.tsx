import Link from 'next/link'
import moment from 'moment'
import { decryptSignatrue } from '../utils/encrypt'

export default function ProposalCard({ proposal, id }) {
    const isProposalClosed = moment(proposal.end).diff(moment()) > 0 ? false : true

    //Get Original Object
    const proposalObj = {
        name: proposal.name,
        body: proposal.body,
        start: proposal.start,
        end: proposal.end,
        snapshot: proposal.snapshot,
        choices: proposal.choices
    }

    const address = decryptSignatrue(JSON.stringify(proposalObj), proposal.signature)
    return (
        <Link href={`/detail/${id}/proposal/${proposal.hash}`} passHref={true}>
            <div className="px-6 py-4 border-r border-l border-b cursor-pointer">
                <div className='flex'>
                    <div className={`w-min text-white px-2 py-1 rounded-full text-sm ${isProposalClosed ? 'bg-indigo-600' : 'bg-green-500'}`}>
                        {isProposalClosed ? 'Closed' : 'Active'}
                    </div>
                    &nbsp;&nbsp;
                    <h2 className='font-bold text-lg'>{proposal.name}</h2>
                </div>
                <div className='flex mt-1'>
                    <p>By {address.substring(0, 6)}...{address.substring(address.length - 4, address.length)}</p>
                    <p className='ml-2'>Start {moment(proposal.start).format('MM/DD/YYYY')} End {moment(proposal.end).format('MM/DD/YYYY')}</p>
                </div>
            </div>
        </Link>
    )
}
