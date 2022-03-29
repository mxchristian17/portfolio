import React from 'react'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import ProfileData from './ProfileData'


const Profile = () => {

  
  
  return (
    <div className="col-md-6 col-lg-4 text-center px-2 py-3 d-flex align-items-center">
      <div className="row d-flex align-items-center w-100">

        <div className="col-8 d-md-none text-start text-sm-center"><ProfileData /></div>
        <div className="col-4 col-md-12 p-0 p-sm-4">
          <ProfilePicture />
          <div className="d-none d-md-block pt-2"><ProfileData /></div>
        </div>

      </div>
    </div>
  )
}

export default Profile