import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import { MapHeader } from './components/MapHeader';

const containerStyle = {
  width: '100dvw',
  height: '100dvh'
}

export function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ''
  })

  return (
    <main>
      <MapHeader />
      { isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={15}
          center={{ lat: -22.908987, lng: -47.062173 }}
          options={{
            fullscreenControl: false,
          }}
        >
        </GoogleMap>
      ) : <></>}

    </main>
  )
}
