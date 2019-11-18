import React from "react";
import AccessibleIconCustom from "../Icons/AccesibleIconCustom";
import AddIcon from "../Icons/AddIcon";
import CarIconCustom from "../Icons/CarIconCustom";
import DangerIcon from "../Icons/DangerIcon";
import EmptyStarIcon from "../Icons/EmptyStarIcon";
import EventIcon from "../Icons/EventIcon";
import FilledStarIcon from "../Icons/FilledStarIcon";
import FoodIcon from "../Icons/FoodIcon";
import GarbageIcon from "../Icons/GarbageIcon";
import GraffitiIconCustom from "../Icons/GraffitiIconCustom";
import HomeIconCustom from "../Icons/HomeIconCustom";
import MapMarkerIcon from "../Icons/MapMarkerIcon";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import MapSignIcon from "../Icons/MapSignIcon";
import MsgIcon from "../Icons/MsgIcon";
import MusicIcon from "../Icons/MusicIcon";
import NatureIcon from "../Icons/NatureIcon";
import MenuIconCustom from "../Icons/MenuIconCustom";
import ParkingIcon from "../Icons/ParkingIcon";
import PetIcon from "../Icons/PetIcon";
import SchoolHouseIcon from "../Icons/SchoolHouseIcon";
import SettingsIconCustom from "../Icons/SettingsIconCustom";
import TownHallIconCustom from "../Icons/TownHallIcon";
import WaterIcon from "../Icons/WaterIcon";
import { ICONLABEL } from "../../constants";

class Icon extends React.Component {
  render() {
    switch (this.props.category) {
      case ICONLABEL.accessibility:
        return <AccessibleIconCustom />;
      case ICONLABEL.add:
        return <AddIcon />;
      case ICONLABEL.car:
        return <CarIconCustom />;
      case ICONLABEL.danger:
        return <DangerIcon />;
      case ICONLABEL.events:
        return <EventIcon />;
      case ICONLABEL.food:
        return <FoodIcon />;
      case ICONLABEL.garbage:
        return <GarbageIcon />;
      case ICONLABEL.graffiti:
        return <GraffitiIconCustom />;
      case ICONLABEL.home:
        return <HomeIconCustom />;
      case ICONLABEL.mapLogo:
        return <MapOutlinedIcon />;
      case ICONLABEL.mapMarker:
        return <MapMarkerIcon />;
      case ICONLABEL.mapSign:
        return <MapSignIcon />;
      case ICONLABEL.menu:
        return <MenuIconCustom />;
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
        return <SettingsIconCustom />;
      case ICONLABEL.starEmpty:
        return <EmptyStarIcon />;
      case ICONLABEL.starFilled:
        return <FilledStarIcon />;
      case ICONLABEL.townhall:
        return <TownHallIconCustom />;
      case ICONLABEL.water:
        return <WaterIcon />;
      default:
        // TODO pick a default icon
        return <MapMarkerIcon />;
    }
  }
}

export default Icon;
