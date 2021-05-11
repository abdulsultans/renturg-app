import React, { useState, useMemo } from 'react'
import api from '../../services/api'

import camera from '../../assets/camera.svg'
import './styles.css'

export default ({ history }) => {
  const [thumbnail, setThumbnail] = useState(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  const preview = useMemo(() =>
    thumbnail
      ? URL.createObjectURL(thumbnail)
      : null
  , [thumbnail])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = new FormData()
    const user_id = localStorage.getItem('user')

    data.append('thumbnail', thumbnail)
    data.append('title', title)
    data.append('desc', description)
    data.append('price', price)

    await api.post('/spots', data, {
      headers: { user_id }
    })

    history.push('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        id="thumbnail"
        style={{backgroundImage: `url(${preview})`}}
        className={
          thumbnail
            ? 'has-thumbnail'
            : ''
        }
      >
        <input
          type="file"
          onChange={
            event => setThumbnail(event.target.files[0])
          }
        />

        <img src={camera} alt="Select file" />
      </label>

      <label htmlFor="title">TITLE *</label>
      <input
        id="title"
        placeholder="Give Your Room Posting a Title"
        value={title}
        onChange={
          event => setTitle(event.target.value)
        }
      >
      </input>

      <label htmlFor="description">
        DESCRIPTION * <span>(Describe the rooms/space available)</span>
      </label>
      <input
        id="description"
        placeholder="Describe the room/space you are offering"
        value={description}
        onChange={
          event => setDescription(event.target.value)
        }
      >
      </input>

      <label htmlFor="price">
        PRICE/DAY * <span>(Leave blank to if FREE)</span>
      </label>
      <input
        id="price"
        placeholder="What's the daily price?"
        value={price}
        onChange={
          event => setPrice(event.target.value)
        }
      >
      </input>

      <button type="submit" className="btn">Submit</button>
    </form>
  )
}
