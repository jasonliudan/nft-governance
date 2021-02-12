export default function NavBar({ space }) {
  return (
    <div className="border rounded-md">
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
            <span className="absolute top-3 right-1 bg-green-500 rounded-full w-5 h-5 text-white text-center leading-5">
              {space.count}
            </span>
          )}
        </div>
        <div className="text-center my-4">
          <h3 className="text-xl font-semibold">{space.name}</h3>
          <div className="text-gray">{space.id}</div>
        </div>
      </div>
    </div>
  )
}
