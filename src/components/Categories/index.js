import {Component} from 'react'
import {Link} from 'react-router-dom'
import SideNavBar from '../SideNavBar'
import BackArrow from '../BackArrow'
import SpecificCategory from '../SpecificCategory'
import './index.css'

class Categories extends Component {
  state = {categoriesData: []}

  componentDidMount() {
    this.getSpecificCategoriesData()
  }

  getSpecificCategoriesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const specificCategoriesApi = `https://api.spotify.com/v1/browse/categories/${id}/playlists?country=IN`
    const token = localStorage.getItem('pa_token', '')
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const getCategoriesResponse = await fetch(specificCategoriesApi, options)
    const getCategoriesDetails = await getCategoriesResponse.json()
    const categoriesItemData = getCategoriesDetails.playlists.items
    this.setState({categoriesData: categoriesItemData})
  }

  render() {
    const {categoriesData} = this.state
    return (
      <div className="categories-page-bg-container">
        <SideNavBar />
        <div className="categories-content-container">
          <Link to="/">
            <BackArrow />
          </Link>
          <div className="categories-content">
            {categoriesData.map(eachCategory => (
              <SpecificCategory
                eachCategoryItem={eachCategory}
                key={eachCategory.id}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default Categories
