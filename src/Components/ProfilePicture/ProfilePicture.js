import React, { useState } from 'react'

const ProfilePicture = () => {

    const [loading, setLoading] = useState(true);

  return (
    <div>
        {loading && <div className="d-flex justify-content-center text-success">
            <div className="spinner-border m-auto" role="status">
              <span className="sr-only">Loading...</span>
            </div>
        </div>} 

        <img onLoad={() => setLoading(false)} src="/images/CEO.png" style={{maxWidth : "15em"}} className={loading ? "d-none" :  "w-100 align-middle rounded-circle shadow"} alt="avatar" />
    </div>
  )
}

export default ProfilePicture