import React, {useState} from 'react'
import './sidemenu.css'
import navListData from '../data/navListData'
import NavListItem from './NavListItem'
import socialListData from '../data/socialListData'
import SocialListItem from './SocialListItem'

function SideMenu({ active, sectionActive }) {
    const [navData, setNavData] = useState(navListData)
    const [socialData, setSocialData] = useState(socialListData)

        const handleNavOnclick = (id, target) => {
            
            const newNavData = navData.map(nav=>{
                nav.active=false
                if(nav._id === id) nav.active=true
                return nav
            })
            setNavData(newNavData)
            sectionActive(target)
        }
    
  return (
    <div className={`sideMenu ${active ? 'active' : undefined}`}>
        <a href="#" className="logo">
            <i className="bi bi-controller"></i>
            <span className="brand">Play</span>
        </a>
        <ul className="nav">
            {
                navData.map(item =>(
                    <NavListItem key={item._id} item={item} navOnClick={handleNavOnclick}/>
                ))
            }
            
        </ul>
        <ul className="social">
            {
                socialData.map(item =>(
                    <SocialListItem key={item._id} item={item}/>
                ))
            }
            
        </ul>
      
    </div>
  )
}

export default SideMenu
