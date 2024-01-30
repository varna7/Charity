import React from 'react'
import Member from '../../components/Member/Member'
import './GoverningBody.scss'

const GoverningBody = () => {
  return (
    <div className=''>
        <div className="head ">
            <h2>Governing Body</h2>
        </div>
        <div className="members ">
            <Member/>
            <Member/>
            

        </div>
        <div className="members">
        <Member/>
            <Member/>
            <Member/>
            
        </div>
        <br />
    </div>
  )
}

export default GoverningBody