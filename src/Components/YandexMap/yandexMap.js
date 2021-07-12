import React from 'react';
import { YMaps, Map, ZoomControl, SearchControl, GeolocationControl, Placemark} from 'react-yandex-maps';

export default class WaypointPicker extends React.Component {

    state = {
        marker: [],
        markerAddress: "",
        mapState: {
            center: [53.137327, 50.154460],
            zoom: 17
        }
    }

    geocode() { // получаем адрес по координатам установленного маркера и отображаем в нотификейшене.
        this.ymaps.geocode(this.state.marker)
            .then((result) => this.setState({ markerAddress: result.geoObjects.get(0).getAddressLine() }))
    }

    render() {
        return (
            <main style={{marginLeft: '10%'}}>
                <YMaps query={{apikey: 'cae24093-76cd-44ea-b082-0f7b0d1d7de9'}}>
                    <div>
                        <Map
                            modules={["Placemark", "geocode", "geoObject.addon.balloon"]}
                            onClick={(event) => { // устанавливаем маркер и записываем координаты в стейт
                                this.setState({ marker: event.get('coords') })
                                this.geocode() // отображаем адрес
                            }}
                            onLoad={(ymaps) => this.ymaps = ymaps}
                            state={this.state.mapState}
                            width='80%'
                        >
                            {this.state.marker &&
                            <Placemark
                                geometry={this.state.marker}
                            />}
                            <ZoomControl />

                            <SearchControl />
                            <GeolocationControl />
                        </Map>
                    </div>
                </YMaps>
                {this.state.markerAddress}
            </main>
        );
    }
}
