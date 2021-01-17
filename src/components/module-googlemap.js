import React from "react"
import GoogleMapReact from "google-map-react"

function createMapOptions(maps) {
  return {
    styles: [
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        elementType: "labels.text",
        stylers: [
          {
            color: "#1e0759",
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#307e89",
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        featureType: "landscape.man_made",
        elementType: "geometry",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "landscape.natural",
        stylers: [
          {
            color: "#e9f2ea",
          },
        ],
      },
      {
        featureType: "poi",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#fafafa",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            color: "#a0aca7",
          },
        ],
      },
      {
        featureType: "transit.line",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "transit.station.rail",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#e5e5e5",
          },
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "water",
        stylers: [
          {
            color: "#00a29a",
          },
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#c9c9c9",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#cfe2e1",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
    ],
  }
}

const CustomPin = () => (
  <div className="custom_pin">
    <svg
      version="1.1"
      id="custom_pin"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      viewBox="0 0 200 200"
    >
      <path
        d="M148.6 33.9C119.8 7 74.7 8.6 47.9 37.4 21 66.1 22.6 111.3 51.4 138.1c9.3 8.7 20.3 14.4 31.9 17.2l16.7 28.9 16.7-28.9c13.2-3.1 25.6-10.1 35.5-20.7 26.8-28.8 25.2-73.9-3.6-100.7z"
        fill="#109aa2"
      />
      <path
        className="st1"
        d="M55.7 87.8c0-14.5 7.5-28.6 20.2-37.3l.1 18.4s10.8-17.6 23-21.3v29.8c0 1.6 1.3 2.9 2.9 2.9s2.9-1.3 2.9-2.9V40.8c-6.9.7-16.5 5.7-23.1 13.1l-.1-12.4S50 53.8 50 87.9c0 14.4 6.6 27.9 18 37.6H57c-1.6 0-2.9 1.3-2.9 2.9 0 1.6 1.3 2.9 2.9 2.9h30l-8.7-5.3c-14.2-8.7-22.6-22.9-22.6-38.2"
        fill="#fff"
      />
      <path
        className="st1"
        d="M128.5 64.5h18.7c1.6 0 2.9-1.3 2.9-2.9 0-1.6-1.3-2.9-2.9-2.9h-18.7c-10.8 0-16.5 7.1-16.5 14 0 3.7 1.5 7.1 4.3 9.5 3 2.7 7.2 4.1 12.2 4.1 8.8 0 14.6 3.2 14.6 8.1 0 2.3-1.3 4.7-3.6 6.5-2.7 2.2-6.6 3.4-11 3.4h-24.1V90.8c0-1.6-1.3-2.9-2.9-2.9s-2.9 1.3-2.9 2.9v37.8c0 1.6 1.3 2.9 2.9 2.9s2.9-1.3 2.9-2.9v-18.5h24.1c12.7 0 20.3-8 20.3-15.7 0-3.9-1.9-7.4-5.4-9.9-3.6-2.6-8.6-3.9-14.9-3.9-3.6 0-6.5-.9-8.4-2.6-1.6-1.4-2.4-3.3-2.4-5.3 0-3.9 3.4-8.2 10.8-8.2M66.1 77.7c-1.5 0-2.7-1.2-2.7-2.7v-2c0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7v2.1c0 1.4-1.2 2.6-2.7 2.6M79.8 77.5c-1.5 0-2.7-1.2-2.7-2.7V73c0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7v1.8c0 1.5-1.2 2.7-2.7 2.7M76.8 91.6c-2.4 0-4-1-5.1-2.3-.9 1.1-2.2 1.9-4.2 1.9-1.4 0-2.7-.5-3.6-1.5-1.8-1.9-1.6-4.8-1.6-5.1.1-.9.8-1.6 1.7-1.5.9.1 1.6.8 1.5 1.7 0 .5.1 2 .8 2.7.2.2.5.4 1.2.4 2.2 0 2.5-2.3 2.5-2.7.1-.8.7-1.5 1.5-1.5.8-.1 1.5.6 1.7 1.4.1.6.7 3.4 4 3.2 1.7-.1 2.2-.9 2.4-1.1 1-1.5.2-4.5-.2-5.4-.3-.8.1-1.8.9-2.1.8-.3 1.8.1 2.1.9.2.5 1.9 5.2-.1 8.3-.7 1.1-2.1 2.4-4.9 2.6-.2.1-.4.1-.6.1"
        fill="#fff"
      />
    </svg>
  </div>
)

// const GoogleMapsViewer = () => {

//   const [isLoaded, setIsLoaded] = useState(false);

//   const isReady = () => {
//     setIsLoaded(true);
//   }

//   return (
//     <div className={"c-companymap" + ( isLoaded ? " u-is-googlemap--ready" : "" )}>
//       <SimpleMap />
//     </div>
//   )

// };

// class SimpleMap extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoaded: false
//     };
//   }
//   loadflag() {
//     console.log("OK");
//     this.setState({
//       isLoaded: true
//     });
//   };

//   //<div className={"c-companymap" + ( this.state.isLoaded ? " u-is-googlemap--ready" : "" )}>

//   static defaultProps = {
//     center: {
//       lat: 35.704263,
//       lng: 139.775102
//     },
//     zoom: 15
//   };

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: `${process.env.GATSBY_GOOGLE_MAPS_API_KEY}`}}
//         defaultCenter={this.props.center}
//         defaultZoom={this.props.zoom}
//         styles={this.props.styles}
//         options={createMapOptions}
//         onGoogleApiLoaded={this.loadflag()}
//       >
//         <CustomPin
//           lat={this.props.center.lat}
//           lng={this.props.center.lng}
//         />
//       </GoogleMapReact>
//     );
//   }
// }

export default function App({ isReady }) {
  const defaultProps = {
    center: {
      lat: 35.704263,
      lng: 139.775102,
    },
    zoom: 15,
  }

  return (
    // Important! Always set the container height explicitly
    <div className={"c-companymap"}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.GATSBY_GOOGLE_MAPS_API_KEY}` }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        styles={defaultProps.styles}
        options={createMapOptions}
        onTilesLoaded={isReady}
      >
        <CustomPin
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
        />
      </GoogleMapReact>
    </div>
  )
}
