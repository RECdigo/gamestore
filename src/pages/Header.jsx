import React, {useContext} from 'react'
import './header.css'
import userImg from '../images/avatar.jpg'
import { AppContext } from '../App'

function Header({ toggleActive, active }) {
  
  const {library, bag} = useContext(AppContext)

  return (
    <header>
        <a href="#" className="menu" onClick={toggleActive} style={active ? {marginLeft: '120px'} : {}}>
         <i class="bi bi-sliders"></i>
        </a>
        <div className="userItems">
            <a href="#" className="icon">
                <i class="bi bi-heart-fill"></i>
                <span className="like">{library.length}</span>
            </a>
            <a href="#" className="icon">
              <i class="bi bi-bag-fill"></i>
              <span className="bag">{bag.length}</span>
            </a>
            <div className="avatar">
                <a href="#" className=""><img src={userImg} alt="User Image" /></a>
                <div className="user">
                    <span>User Name</span>
                    <a href="#" className="">View Profile</a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
