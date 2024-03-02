import React from 'react'

function SocialListItem({item}) {
  return (
    <div>
      <li>
        <a href="#" className={item.target}>
            <i className={`bi ${item.icon}`}></i>            
        </a>
      </li>
    </div>
  )
}

export default SocialListItem
