import './index.css'

const SpecificCategory = props => {
  const {eachCategoryItem} = props
  return (
    <div className="specific-category-song-container">
      <img
        src={eachCategoryItem.images[0].url}
        className="specific-category-img"
        alt={`${eachCategoryItem.name}`}
      />
    </div>
  )
}
export default SpecificCategory
