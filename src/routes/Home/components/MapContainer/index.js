import React from "react";
import { View } from "native-base";
import MapView , { PROVIDER_GOOGLE } from "react-native-maps";

import styles from "./MapContainerStyles.js";

import SearchBox from "../SearchBox";
import SearchResults from "../SearchResults";



export const MapContainer = ({region, 
        getInputData , 
        toggleSearchResultModal, 
        getAddressPredictions,
        resultTypes,
		predictions,
        getSelectedAddress,
        selectedAddress,
        carMarker,
		nearByDrivers }) => {

     const { selectedPickUp, selectedDropOff } = selectedAddress || {};

     
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={region}
                showsUserLocation={true}>
               
               
					<MapView.Marker
						coordinate={region}
						pinColor="red"

					/>	

                {
					nearByDrivers && nearByDrivers.map((marker, index)=>
						<MapView.Marker
							key={index}
							coordinate={{latitude:marker.coordinate.coordinates[0], longitude:marker.coordinate.coordinates[1] }}
							image={carMarker}
						/>	
					)
				}


             </MapView>

             <SearchBox getInputData={getInputData}
                        toggleSearchResultModal={toggleSearchResultModal}
                        getAddressPredictions={getAddressPredictions}
                        selectedAddress={selectedAddress} />

            { (resultTypes.pickUp || resultTypes.dropOff) &&
			<SearchResults predictions={predictions}  getSelectedAddress={getSelectedAddress}/>
			}
            
        </View>
    )
}

export default MapContainer;