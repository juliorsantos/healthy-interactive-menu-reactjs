import BannerImage from './../../public/images/banner.jpg';

const Banner = () => {

  return (
    <div className="banner" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="container">
        <div className="infos text-center py-4">
          <h1>Become healthier.</h1>
          <h5>Order here. Now!</h5>
        </div>
        <div className="input-group d-none">
          <input
            type="text"
            className="form-control" />
          <button
            type='button'
            className='btn btn-secondary'>
            Search now 🔍
          </button>
        </div>
      </div>
      <div className="banner-overlay"></div>
    </div>
  )

}

export default Banner;