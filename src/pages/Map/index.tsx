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
    description: string,
    lat: number,
    lng: number,
    address: string,
    startsCounting: number,
    comments: string[]
  };

  const markers: Marker[] = [
    {
      id: 0,
      name: 'Grau Técnico Campinas: Administração, Enfermagem e Radiologia',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quas reiciendis explicabo ratione dignissimos? Accusamus, voluptates enim! Eaque, harum ratione amet sed officiis ad illum commodi, laborum possimus magni eius?",
      lat: -22.908166,
      lng: -47.0597819,
      startsCounting: 5,
      address: 'Av. Dr. Moraes Salles, 488 - Centro, Campinas - SP, 13010-001, Brazil',
      comments: []
    },
    {
      id: 1,
      name: 'JIMI Aviamentos e Artesanatos',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quas reiciendis explicabo ratione dignissimos? Accusamus, voluptates enim! Eaque, harum ratione amet sed officiis ad illum commodi, laborum possimus magni eius?",
      lat: -22.90760,
      lng: -47.06366,
      startsCounting: 3,
      address: 'Rua Dr. Costa Aguiar, 253 - Centro, Campinas - SP, 13010-061, Brazil',
      comments: []
    },
    {
      id: 2,
      name: "McDonald's",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quas reiciendis explicabo ratione dignissimos? Accusamus, voluptates enim! Eaque, harum ratione amet sed officiis ad illum commodi, laborum possimus magni eius?",
      lat: -22.905674,
      lng: -47.059313,
      startsCounting: 5,
      address: 'Av. Francisco Glicério, 1000 - Centro, Campinas - SP, 13012-100, Brazil',
      comments: []
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
          center={{
            lat: clickedMarker ? clickedMarker.lat : -22.908166,
            lng: clickedMarker ? clickedMarker.lng : -47.062173
          }}
          options={{
            fullscreenControl: false,
            zoomControlOptions: {
              position: window.google.maps.ControlPosition.LEFT_BOTTOM
            },
            panControlOptions: {
              position: window.google.maps.ControlPosition.LEFT_CENTER
            },
            styles: [
              {
                featureType: "poi",
                elementType: 'all',
                stylers: [{
                  visibility: 'off'
                }]
              },
            ]
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
          name={clickedMarker.name}
          description={clickedMarker.description}
          comments={clickedMarker.comments}
          id={clickedMarker.id}
          stars={clickedMarker.startsCounting}
          address={clickedMarker.address}
        />
      ) : null}

    </main>
  )
}
