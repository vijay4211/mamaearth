import BannerImage from "../assets/banner.gif";

function Banner() {
  return (
    <div>
      <img src={BannerImage} alt="banner" className="w-full object-fill"/>
    </div>
  );
}
export default Banner;
