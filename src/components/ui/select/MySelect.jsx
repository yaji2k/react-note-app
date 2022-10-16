import React from 'react'

const MySelect = ({ value, sorts, defaultValue, onChange }) => {
  const options = sorts.map(sort => (
    <option key={sort.value} value={sort.value}>{sort.name}</option>
  ))

  return (
    <select value={value} onChange={onChange}>
      <option disabled value={defaultValue}>{defaultValue}</option>
      {options}
    </select>
  )
}

export default MySelect