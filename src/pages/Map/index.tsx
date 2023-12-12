import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api'
import { MapHeader } from './components/MapHeader';

import styles from './map.module.css'
import { useState } from 'react';
import { MapModal } from './components/MapModal';

const containerStyle = {
  width: '100dvw',
  height: '100dvh'
}

export function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyB-Z1vHMjuGkZ6ovkcZwypA9KWzS6qU5Rc'
  })

  const markers = [
    {
      id: 0,
      name: 'Grau Técnico Campinas: Administração, Enfermagem e Radiologia',
      lat: -22.908044,
      lng: -47.06069,
    },
    {
      id: 1,
      name: 'JIMI Aviamentos e Artesanatos',
      lat: -22.9088179,
      lng: -47.0637339,
    },
    {
      id: 2,
      name: "McDonald's",
      lat: -22.9067511,
      lng: -47.0615529,
    }
  ]

  const [clickedMarker, setClickedMarker] = useState<typeof markers[0] | null>(null)

  return (
    <main>
      <MapHeader />
      { isLoaded ? (
        <GoogleMap
          mapContainerStyle={{...containerStyle}}
          zoom={15}
          center={{ lat: -22.908987, lng: -47.062173 }}
          options={{
            fullscreenControl: false,
            zoomControlOptions: {
              position: window.google.maps.ControlPosition.LEFT_BOTTOM
            },
            panControlOptions: {
              position: window.google.maps.ControlPosition.LEFT_CENTER
            },
            styles: [{
              featureType: "all",
              elementType: 'all',
              stylers: [{ visibility: 'off'}]
            }]
          }}
          onClick={() => {setClickedMarker(null)}}
        >
          {
            markers.map((marker) => {
              return (
              <MarkerF
                key={marker.id}
                label={{
                  text: marker.name,
                  color: "#FFFFFFAA",
                  className: styles['marker-label']
                }}
                position={{ lat: marker.lat, lng: marker.lng }}
                onClick={() => {setClickedMarker(marker)}}
              />
            )})
          }
        </GoogleMap>
      ) : <></>}

      {clickedMarker && (
        <MapModal
          name={clickedMarker.name}
        />
      )}

    </main>
  )
}
