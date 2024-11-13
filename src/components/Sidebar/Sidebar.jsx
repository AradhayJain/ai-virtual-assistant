import React, { useState } from 'react'
import "./Sidebar.css"
import {assets} from '../../assets/assets'

function sidebar() {
    const [extended,setExtended]=useState(false)
  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={()=>setExtended(prev=>!prev)} src={assets.menu_icon} alt="" className="menu" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="" />
                {extended?<p>New chat</p>:null}
            </div>
            {extended
            ?<div className="recent">
                <p className="recent-title">recent</p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>what is react....</p>
                </div>

            </div>
            :null
            }
            
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended?<p>activity</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extended?<p>settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default sidebar