const Stats = ({ items }) => {
  const numItems = items.length
  const numPacked = items.filter((item) => item.packed).length

  return (
    <>
      <p style={{ color: '#8381E5', textAlign: 'center', margin: '100px 0 0' }}>
        You have {numItems} items on your list, and you already packed {numPacked} ( 0% )
      </p>
    </>
  )
}

export default Stats
