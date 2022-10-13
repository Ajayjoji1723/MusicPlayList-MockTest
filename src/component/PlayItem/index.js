import './index.css'

const PlayItem = props => {
  const {trackDetails, deletePlayList} = props
  const {id, name, genre, duration, imageUrl} = trackDetails

  const onDeleteItem = () => {
    deletePlayList(id)
  }
  return (
    <li className="play-list-container">
      <img src={imageUrl} className="image" alt="track" />
      <div className="text-container">
        <p className="name">{name}</p>
        <p className="genre">{genre}</p>
      </div>
      <div className="response">
        <div className="duration-container">
          <p className="duration">{duration}</p>
          <button className="button" type="button" onClick={onDeleteItem}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              className="delete"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default PlayItem
