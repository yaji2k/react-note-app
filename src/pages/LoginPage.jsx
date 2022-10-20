import React from 'react'
import MyInput from '../components/ui/inputs/MyInput'
import MyButton from '../components/ui/buttons/MyButton'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const { user, setUser } = useAuth()
  const navigate = useNavigate()

  const login = (e) => {
    e.preventDefault()
    setUser({ nam: 'Timur' })
    navigate('/posts')
  }

  return (
    <form
      className="login-form"
      onSubmit={login}
    >
      <div>
        <MyInput/>
      </div>
      <div className="login-form__item">
        <MyInput/>
      </div>
      <MyButton
        className="login-form__item"
      >Войти</MyButton>
    </form>
  )
}

export default LoginPage