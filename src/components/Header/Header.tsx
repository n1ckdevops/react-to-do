import { NavLink } from 'react-router-dom'
import { HeaderBlock, Link, WrapperHeader } from './Header.styled'
export const Header = () => {

  return (
    <HeaderBlock>
      <WrapperHeader>
        <Link to='/' >To-Do</Link >
        <Link to='/list' >List</Link >
      </WrapperHeader>
    </HeaderBlock>
  )
}