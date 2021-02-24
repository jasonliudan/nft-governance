function HeadOption({ selected, text, tabClicked }) {
  return (
    <span
      className={`cursor-pointer mr-4 ${selected ? 'font-semibold' : 'font-normal'
        }`}
      onClick={tabClicked}
    >
      {text}
    </span>
  )
}
export default function TabView({ options, selectedId, onTabChanged }) {
  return (
    <div className="overflow-scroll w-full border-t border-b sm:overflow-hidden sm:rounded-t-md sm:border ">
      <div className="p-6">
        {options.map((option, index) => (
          <HeadOption
            key={index}
            selected={selectedId === option.id}
            text={option.text}
            tabClicked={() => onTabChanged(option.id)}
          />
        ))}
      </div>
    </div>
  )
}
