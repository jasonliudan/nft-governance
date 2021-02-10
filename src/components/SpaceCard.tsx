export default function NavBar({ space }) {
  return (
    <div className="border rounded-md">
      <div className="p-6">
        <div className="d-inline-block v-align-middle line-height-0 my-6">
          <img
            src={space.logo}
            className="border rounded-full line-height-0 w-24 m-auto"
          />
        </div>
        <div className="text-center my-4">
          <h3 className="text-xl font-semibold">{space.name}</h3>
          <div className="text-gray">{space.id}</div>
        </div>
      </div>
    </div>
  )
}
