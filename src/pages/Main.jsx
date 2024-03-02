import React, { useState, useRef, useContext } from 'react'
import SideMenu from '../components/SideMenu'
import Header from './Header'
import Home from './Home'
import './main.css'
import gamedata from '../data/gamesData.json'
import Categories from './Categories'
import MyLibrary from './MyLibrary'
import Bag from './Bag'
import { AppContext } from '../App'

function Main() {
  const {library, bag} = useContext(AppContext)

    const [active, setActive] = useState(false)
    const [gameData, setGameData] = useState(gamedata)
    
    const homeRef = useRef()
    const categoriesRef = useRef()
    const libraryRef = useRef()
    const bagRef = useRef()

    const sections = [
      {
        name:'home',
        ref:homeRef,
        active:true,
      },
      
      {
        name:'categories',
        ref:categoriesRef,
        active:false,
      },

      {
        name:'library',
        ref:libraryRef,
        active:false,
      },
      {
        name:'bag',
        ref:bagRef,
        active:false,
      },
    ]

    const handleToggleActive = () => {
     
      setActive(prevActive => !prevActive);

    }   

    const handleSectionActive = target => {

      sections.map(section=>{
        section.ref.current.classList.remove('active')
        if(section.ref.current.id===target) {
          section.ref.current.classList.add('active')

        }
        return section
      })

    }
    

  return (
    <main>
        <SideMenu active={active} sectionActive={handleSectionActive}/>
        <div className={`banner ${active ? 'active' : undefined}`}>

          {gameData && gameData.length > 0 && (

            <>
            <Header toggleActive={handleToggleActive} active={active} />
            <Home games={gameData} reference={homeRef}/>
            <Categories games={gameData} reference={categoriesRef} />
            <MyLibrary games={library} reference={libraryRef} />
            <Bag games={bag} reference={bagRef} />
            </>
          
          )
          }
        </div>
    </main>
  )
}

export default Main
