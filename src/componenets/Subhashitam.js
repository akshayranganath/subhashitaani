import React, { useEffect, useState } from 'react'
import RenderImage from './RenderImage'

const Subhashitam = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const getImages = async () => {
    const response = await fetch('https://res.cloudinary.com/dbmataac4/image/list/subhaashitaani.json')
    const resp = await response.json()
    const images = Array()
    for (let i = 0; i < resp.resources.length; i++) {
      const url = `https://res.cloudinary.com/dbmataac4/image/upload/f_auto,q_auto,w_250,h_250,c_pad,e_unsharp_mask/${resp.resources[i].public_id}`
      console.log(url)
      images.push(url)
    }
    setData(images)
    setLoading(false)
  }

  useEffect(() => {
    getImages()
  }, [])

  return (
    <div class='container'>
      <div class='row'>
        <div class='twelve columns'>
          <h3>Here are the links</h3>
        </div>
      </div>
      <div class='row'>
        <div class='twelve columns'>
          {
            data && data.length > 0 && data.map((item) => <RenderImage url={item} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Subhashitam
