import React, { useContext } from 'react'
import "./Main.css"
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'

function Main() {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}= useContext(Context)
  return (
    
    <div className='main'>
        <div className="nav">
            <p>gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
          {!showResult
          ?<>
              <div className="greet">
            <p><span>Hello Dev.</span></p>
            <p>How can i help u today</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>suggest beatiful place for road trips</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>summarize urban planning</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>gym schedule</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p>improve readability of code</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
          </>
          :<div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading
              ?<div className='loader'>
                <hr />
                <hr />
                <hr />
              </div>
              :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
              
            </div>
          </div>
          }
          <div className="main-bottom">
            <div className="search-box">
              <input onChange={(e)=>setInput(e.target.value)} type="text" placeholder='enter a prompt here'/>
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
              </div>
            </div>
            <p className='bottom-info'>gemini may display inaacurate info including about people</p>
          </div>
        </div>
    </div>
  )
}

export default Main