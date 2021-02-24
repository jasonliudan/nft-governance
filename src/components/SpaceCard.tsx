import Link from 'next/link'

export default function SpaceCard({ space }) {
  return (
    <Link href={`/detail/${space.id}/all`} passHref={true}>
      <div
        className="border-l-0 border-t border-b cursor-pointer sm:border sm:rounded-md"
        style={{ borderColor: '#212f59' }}
      >
        <div className="p-6">
          <div
            className="d-inline-block v-align-middle line-height-0 m-auto relative"
            style={{ width: 'fit-content', zIndex: -1 }}
          >
            <img
              src={space.logo}
              className="border rounded-full line-height-0 w-24 m-auto"
            />
            {space.count > 0 && (
              <span
                className="absolute top-3 right-1 rounded-full w-5 h-5 text-white text-center leading-5"
                style={{ backgroundColor: '#5984ff' }}
              >
                {space.count}
              </span>
            )}
          </div>
          <div className="text-center my-4" style={{ color: '#212f59' }}>
            <h3 className="text-xl font-semibold">{space.name}</h3>
            <div className="text-gray">{space.symbol}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
