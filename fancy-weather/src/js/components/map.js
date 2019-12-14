import { createEl } from './functions';

export default class Map {
  constructor() {
    this.mapContainer = createEl('div', 'map-responsive', null, null);
    this.data = {
      srcMap: ' ',
    };
  }

  render() {
    const mapFrame = createEl('iframe', 'iframe', null, this.mapContainer);
    mapFrame.src = this.data.srcMap;
    mapFrame.allowFullScreen = true;

    const coordinates = createEl('div', 'coordinates', null, this.mapContainer);
    const lat = createEl('p', 'latitude', null, coordinates);
    createEl('span', '', 'Latitude: ', lat);
    createEl('span', 'latitud-item', null, lat);

    const lng = createEl('p', 'longitude', null, coordinates);
    createEl('span', '', 'Longitude: ', lng);
    createEl('span', 'longitude-item', null, lng);

    return this.mapContainer;
  }

  change() {
    this.mapContainer.querySelector('.latitud-item').innerText = this.data.coord.lat;
    this.mapContainer.querySelector('.longitude-item').innerText = this.data.coord.lon;
    this.mapContainer.querySelector('iframe').src = `https://maps.google.com/maps/embed/v1/place?key=AIzaSyAWRS13kH7yjU7Qpbz9wk_PkFLs9m094xU&q=${this.data.coord.lat},${this.data.coord.lon}`;
  }
}
