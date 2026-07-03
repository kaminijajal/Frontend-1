import React from 'react'
import test from '../assets/test.png'

function MiniProfile1() {
  return (
    <div className='mini-profile'>
        <img src={test} alt=""/>
        <h2>Tset</h2>
        <p style={{fontFamily:'Jokerman,cursive'}}>Just testing</p>
    </div>
  )
}

export default MiniProfile1