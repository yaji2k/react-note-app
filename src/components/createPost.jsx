import React, { useState } from 'react'
import MyInput from './ui/inputs/MyInput'
import MyButton from './ui/buttons/MyButton'

const CreatePost = ({ createPost, post, onInputTitle, onInputText }) => {

  const styleInput = {
    width: '100%',
    marginBottom: '8px'
  }
  return (
    <form>
      <div style={styleInput}>
        <MyInput value={post.title} onChange={onInputTitle}/>
      </div>
      <div style={styleInput}>
        <MyInput value={post.body} onChange={onInputText}/>
      </div>
      <div style={{paddingTop: '12px'}}>
        <MyButton  onClick={createPost}>Save</MyButton>
      </div>
    </form>
  )
}

export default CreatePost