import React from 'react'
import Content from './main/Content'
import Topbar from './main/Topbar'
import '../css/Video.css'

function Main() {
  return (
    <>
      <div className="col-lg-10 mainContent">
        <div className="topbar row">
          <Topbar />
        </div>
        <Content/>
      </div>
    </>
  )
}

export default Main