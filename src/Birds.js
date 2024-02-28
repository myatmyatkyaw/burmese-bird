import React from 'react'
import useFetch from './useFetch'
import Birdlist from './Birdlist'

const Birds = () => {
    const { error, isPending, data: Tbl_Bird } = useFetch('https://bird-json-server.vercel.app/Tbl_Bird/')
  return (
    <div className="birds">
    { error && <div>{ error }</div> }
    { isPending && <div>Loading...</div> }
    { Tbl_Bird && <Birdlist birds={Tbl_Bird} /> }
  </div>
  )
}

export default Birds