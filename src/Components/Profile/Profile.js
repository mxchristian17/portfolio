import React from 'react'
import ProfileData from './ProfileData'


const Profile = () => {
  return (
    <div className="col-md-6 col-lg-4 text-center px-2 py-3 d-flex align-items-center">
      <div className="row d-flex align-items-center">

        <div className="col d-md-none text-start text-sm-center"><ProfileData /></div>
        
        <div className="col">
          <img src="/images/CEO.png" className="w-75 align-middle rounded-circle shadow" alt="avatar" />
          <div className="d-none d-md-block pt-2"><ProfileData /></div>
        </div>

      </div>
    </div>
  )
}

export default Profile