import React, { useState } from 'react'
import ProfileData from './ProfileData'


const Profile = (props) => {

  const [loading, setLoading] = useState(true);
  
  return (
    <div className="col-md-6 col-lg-4 text-center px-2 py-3 d-flex align-items-center">
      <div className="row d-flex align-items-center w-100">

        <div className="col-8 d-md-none text-start text-sm-center"><ProfileData /></div>
        <div className="col-4 col-md-12 p-0 p-sm-4">

          {loading && <div className="d-flex justify-content-center text-success">
            <div className="spinner-border m-auto" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>} 

          <img onLoad={() => setLoading(false)} src="/images/CEO.png" style={{maxWidth : "15em"}} className={loading ? "d-none" :  "w-100 align-middle rounded-circle shadow"} alt="avatar" />
          <div className="d-none d-md-block pt-2"><ProfileData /></div>
        </div>

      </div>
    </div>
  )
}

export default Profile