import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api'
import { MapHeader } from './components/MapHeader';

import styles from './map.module.css'
import { useState } from 'react';
import { MapModal } from './components/MapModal';
import { useSearchParams } from 'react-router-dom';



const containerStyle = {
  width: '100dvw',
  height: '100dvh'
}

export function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyB-Z1vHMjuGkZ6ovkcZwypA9KWzS6qU5Rc'
  })

  type Marker = {
    id: number,
    name: string,
    lat: number,
    lng: number,
    street: string,
    startsCounting: number
  };

  const markers: Marker[] = [
    {
      id: 0,
      name: 'Grau Técnico Campinas: Administração, Enfermagem e Radiologia',
      lat: -22.908044,
      lng: -47.06069,
      street: 'Av.Dr.Moraes Salles, 488 - Centro, Campinas - SP, 13010 - 001, Brazil',
      startsCounting: 5,
    },
    {
      id: 1,
      name: 'JIMI Aviamentos e Artesanatos',
      lat: -22.9088179,
      lng: -47.0637339,
      street: 'Rua Dr. Costa Aguiar, 253 - Centro, Campinas - SP, 13010-061, Brazil',
      startsCounting: 3,
    },
    {
      id: 2,
      name: "McDonald's",
      lat: -22.9067511,
      lng: -47.0615529,
      street: 'Av. Francisco Glicério, 1000 - Centro, Campinas - SP, 13012-100, Brazil',
      startsCounting: 5,
    }
  ]

  const [searchParams] = useSearchParams();
  const routeEstablishmentId = searchParams.get('establishmentId');
  const [clickedMarker, setClickedMarker] = useState<Marker | null>(markers.find(marker => marker.id === Number(routeEstablishmentId)) || null)
  return (
    <main>
      <MapHeader />
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ ...containerStyle }}
          zoom={15}
          center={
            {
              lat: clickedMarker ? clickedMarker.lat : -22.908166,
              lng: clickedMarker ? clickedMarker.lng : -47.062173
            }
          }
          options={{
            fullscreenControl: false,
            zoomControlOptions: {
              position: window.google.maps.ControlPosition.LEFT_BOTTOM
            },
            panControlOptions: {
              position: window.google.maps.ControlPosition.LEFT_CENTER
            },
            styles: [{
              featureType: "poi",
              elementType: 'all',
              stylers: [{
                visibility: "off"
              }]
            }]
          }}
          onClick={() => { setClickedMarker(null) }}
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
                  onClick={() => { setClickedMarker(marker) }}
                />
              )
            })
          }
        </GoogleMap>
      ) : <></>}

      {clickedMarker ? (
        <MapModal
          name={clickedMarker.name} street={clickedMarker.street} stars={clickedMarker.startsCounting}
        />
      ) : null}

    </main>
  )
}
