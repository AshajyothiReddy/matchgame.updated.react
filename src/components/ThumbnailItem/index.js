import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onClickThumb} = props
  const {id, thumbnailUrl} = imageDetails

  const onChangeThumbnail = () => {
    onClickThumb(id)
  }
  return (
    <li>
      <button
        type="button"
        onClick={onChangeThumbnail}
        className="thumb-img-btn"
      >
        <img src={thumbnailUrl} className="thumb-img" alt="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
