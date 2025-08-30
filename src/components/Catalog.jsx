import { FaCity } from "react-icons/fa";
import { MdCasino } from "react-icons/md";
import { GiWhiteTower } from "react-icons/gi";
import Locations from "../data/locations.json";
import Location from "./Location";

function Catalog() {
  return (
    <section className="flex flex-col gap-3">
      <div>
        <h1 className="text-xl font-bold">Travel Locations</h1>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-[50px] w-[50px] bg-white rounded-md flex flex-col items-center justify-center gap-1">
            <span className="text-sm">All</span>
          </div>
          <div className="h-[50px] w-[50px] bg-white rounded-md flex flex-col items-center justify-center gap-1">
            <FaCity />
            <span className="text-sm">Cites</span>
          </div>
          <div className="h-[50px] w-[50px] bg-white rounded-md flex flex-col items-center justify-center gap-1">
            <MdCasino />
            <span className="text-sm">Distractions</span>
          </div>
          <div className="h-[50px] w-[50px] bg-white rounded-md flex flex-col items-center justify-center gap-1">
            <GiWhiteTower />
            <span className="text-sm">History</span>
          </div>
        </div>
        <div>
          {Locations.map((loc) => (
            <Location location={loc} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Catalog;
