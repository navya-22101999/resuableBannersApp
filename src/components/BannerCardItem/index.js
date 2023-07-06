// Write your code here.
import './index.css'
const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={className}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button type="button" className="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
