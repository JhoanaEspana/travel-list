const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p style={{ color: '#8381E5', textAlign: 'center', margin: '100px 0 0' }}>
        Start adding some items to your packing list ✈️
      </p>
    )

  const numItems = items.length
  const numPacked = items.filter((item) => item.packed).length
  const percentage = Math.round((numPacked / numItems) * 100)

  return (
    <>
      <p style={{ color: '#8381E5', textAlign: 'center', margin: '100px 0 40px 0' }}>
        {percentage === 100
          ? 'You got everything! Ready to go ✈️'
          : `You have ${numItems} items on your list, and you already packed ${numPacked} (
        ${percentage}%)`}
      </p>
    </>
  )
}

export default Stats
