import { Avatar } from '@material-ui/core'
import Search from '@material-ui/icons/Search'
import React from 'react'
import '../css/Header.css'
import { useDataLayerValue } from '../DataLayer';

function Header({ spotify }) {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <Search />
        <input type="text" placeholder='Search for Artist, Songs or Podcast' />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header
