import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Clear from "../assets/images/Clear.png";
import background from "../assets/images/Cloud-background.png";
import RoundedButton from "./RoundedButton";

const Today = () => {
  return (
    <div className="bg-navyBlue-light pb-24 xl:col-span-1 xl:row-span-3">
      <header className="m-auto max-w-screen-md flex justify-between px-3 pt-4 md:pt-10 md:px-8">
        <button className="bg-gray-dark text-gray-light px-4 max-h-10 text-base focus:ring-2 focus:ring-blue-400">
          Seach for places
        </button>
        <RoundedButton>
          <GpsFixedIcon />
        </RoundedButton>
      </header>
      <div className="h-bg bg-center relative flex align-middle">
        <img src={Clear} alt="clear" className="m-auto" />
        <div
          className="h-bg w-full bg-no-repeat bg-center absolute top-0 filter opacity-5"
          style={{ backgroundImage: `url(${background})` }}
        ></div>
      </div>
      <p className="m-auto -mt-12 w-max text-10xl text-gray-light">
        15<span className="m-auto text-5xl text-gray-text1 font-thin">℃</span>
      </p>
      <div className="m-auto mt-0 w-max text-gray-text1 text-4xl font-semibold">
        Shower
      </div>
      <div className="m-auto mt-12 w-max flex gap-4 text-gray-text1">
        <div>Today</div>
        <div>•</div>
        <div>Fri, 5 Jun</div>
      </div>
      <div className="m-auto mt-8 w-max flex gap-4 text-gray-text1">
        <LocationOnIcon />
        <p className="font-semibold">Helsinki</p>
      </div>
    </div>
  );
};

export default Today;
