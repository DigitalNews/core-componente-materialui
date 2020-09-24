import * as React from "react";
import { Map as ReactMap, TileLayer, Marker, MapProps } from "react-leaflet";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import "leaflet/dist/leaflet.css";
import "./index.scss";

import * as L from "leaflet";

// delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
}));

interface IMapProps extends MapProps {
  /**
   * External classes
   */
  className?: string;
  /**
   * Map zoom
   */
  zoom?: number;
  /**
   * Map center
   */
  center: L.LatLngExpression;
  /**
   * data of the locations. Example: [{ location: { x: number, y: number } }]
   */
  pins: Array<any>;
}

/**
 * Component to display the map
 *
 * @param {Object} props
 */
const Map: React.FunctionComponent<IMapProps> = (props) => {
  const { zoom, center, pins, className, ...rest } = props;

  const classes = useStyles();

  return (
    <ReactMap
      zoom={zoom}
      center={center}
      className={clsx("map", classes.root, className)}
      {...rest}
    >
      <TileLayer
        className="map__tile-layer"
        detectRetina={true}
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pins &&
        pins.length &&
        pins.map((item, i) => (
          <Marker
            className="map__marker"
            position={[item.location.y, item.location.x]}
            key={i}
          />
        ))}
    </ReactMap>
  );
};

Map.defaultProps = {
  zoom: 10,
  center: [0, 0],
};

export default Map;
