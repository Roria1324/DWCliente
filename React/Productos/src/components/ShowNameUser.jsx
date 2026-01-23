import React from 'react'
import useSupabase from '../hooks/useSupabase'

const ShowNameUser = () => {

    const {dataSession} = useSupabase()

    return (
    <div>
        <p>Hello {dataSession.username}</p>
    </div>
  )
}

export default ShowNameUser