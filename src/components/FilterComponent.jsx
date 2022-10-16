import React, { useState } from 'react'
import MySelect from './ui/select/MySelect'
import classes from '../styles/filters.module.css'
import MyInput from './ui/inputs/MyInput'

const FilterComponent = ({ filter, changeFilter}) => {
  const [sorts] = useState([
    {
      value: 'title',
      name: 'По названию'
    },
    {
      value: 'body',
      name: 'По содержанию'
    }
  ])

  const onChangeSort = (e) => {
    const newFilter = {
      ...filter,
      sort: e.target.value
    }
    changeFilter(newFilter)
  }

  const onChangeSearch = (e) => {
    const newFilter = {
      ...filter,
      search: e.target.value
    }
    changeFilter(newFilter)
  }

  return (
    <div className={classes.filters}>
      <div style={{ marginBottom: '8px' }}>
        <MyInput onChange={onChangeSearch}/>
      </div>
      <MySelect
        value={filter.sort}
        sorts={sorts}
        defaultValue="Сортировка"
        onChange={onChangeSort}
      />
    </div>
  )
}

export default FilterComponent