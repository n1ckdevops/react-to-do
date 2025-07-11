import { HeaderBlock, Link, WrapperHeader } from './Header.styled'
import { useDispatch } from 'react-redux'
import { toggleThemeAction } from '../../feature/themeList'
export const Header = () => {
  const dispatch = useDispatch()
  const toggleTheme = () => {
    dispatch(toggleThemeAction())
  }
  return (
    <HeaderBlock>
      <WrapperHeader>
        <Link to='/' >To-Do</Link >
        <Link to='/list' >List</Link >
        <div className="toggleButton">
          <button style={{ position: 'absolute', right: '10px', top: '10px' }} onClick={toggleTheme}>Theme</button>
        </div>
      </WrapperHeader>
    </HeaderBlock>
  )
}