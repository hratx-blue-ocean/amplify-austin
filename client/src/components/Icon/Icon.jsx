import React from "React";
import Accessible_Icon from "../Icons/Accesible_Icon";
import AddIcon from "../Icons/AddIcon";
import Car_Icon from "../Icons/Car_Icon";
import DangerIcon from "../Icons/DangerIcon";
import EmptyStarIcon from "../Icons/EmptyStarIcon";
import EventIcon from "../Icons/EventIcon";
import FilledStarIcon from "../Icons/FilledStarIcon";
import FoodIcon from "../Icons/FoodIcon";
import GarbageIcon from "../Icons/GarbageIcon";
import Graffiti_Icon from "../Icons/Graffiti_Icon";
import HomeIcon from "../Icons/HomeIcon";
import MapMarkerIcon from "../Icons/MapMarkerIcon";
import MapSignIcon from "../Icons/MapSignIcon";
import MsgIcon from "../Icons/MsgIcon";
import MusicIcon from "../Icons/MusicIcon";
import NatureIcon from "../Icons/NatureIcon";
import Menu_Icon from "../Icons/Menu_Icon";
import ParkingIcon from "../Icons/ParkingIcon";
import PetIcon from "../Icons/PetIcon";
import SchoolHouseIcon from "../Icons/SchoolHouseIcon";
import Settings_Icon from "../Icons/Settings_Icon";
import TownHall_Icon from "../Icons/TownHall_Icon";
import WaterIcon from "../Icons/WaterIcon";
import { ICONLABEL } from "../../constants";

class Icon extends React.Component {
  constructor({ type }) {
    super({ type });
  }
  render() {
    switch (type) {
      case ICONLABEL.accessible:
        return <Accessible_Icon />;
      case ICONLABEL.add:
        return <AddIcon />;
      case ICONLABEL.car:
        return <Car_Icon />;
      case ICONLABEL.danger:
        return <DangerIcon />;
      case ICONLABEL.event:
        return <EventIcon />;
      case ICONLABEL.food:
        return <FoodIcon />;
      case ICONLABEL.garbage:
        return <GarbageIcon />;
      case ICONLABEL.graffiti:
        return <Graffiti_Icon />;
      case ICONLABEL.home:
        return <HomeIcon />;
      case ICONLABEL.mapMarker:
        return <MapMarkerIcon />;
      case ICONLABEL.mapSign:
        return <MapSignIcon />;
      case ICONLABEL.menu:
        return <Menu_Icon />;
      case ICONLABEL.message:
        return <MsgIcon />;
      case ICONLABEL.music:
        return <MusicIcon />;
      case ICONLABEL.nature:
        return <NatureIcon />;
      case ICONLABEL.parking:
        return <ParkingIcon />;
      case ICONLABEL.pet:
        return <PetIcon />;
      case ICONLABEL.school:
        return <SchoolHouseIcon />;
      case ICONLABEL.settings:
        return <Settings_Icon />;
      case ICONLABEL.starEmpty:
        return <EmptyStarIcon />;
      case ICONLABEL.starFilled:
        return <FilledStarIcon />;
      case ICONLABEL.townhall:
        return <TownHall_Icon />;
      case ICONLABEL.water:
        return <WaterIcon />;
      default:
        return undefined;
    }
  }
}

export default Icon;
