const HighlightsBox = ({ small, children }) => {
  return (
    <div className={`${small ? "h-40" : "h-52"} w-82 m-auto py-6 bg-navyBlue-light text-gray-light`}>
      {children}
    </div>
  )
}

export default HighlightsBox
