import { createEl } from './functions';

export default class Map {
  constructor() {
    this.mapContainer = createEl('div', 'map-responsive', null, null);
    this.data = {
      srcMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143494.86491623629!2d38.8346975935457!3d55.80873818252006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414b1c7e8e89e903%3A0x2489581359276ac7!2z0J7RgNC10YXQvtCy0L4t0JfRg9C10LLQviwg0JzQvtGB0LrQvtCy0YHQutCw0Y8g0L7QsdC7Lg!5e0!3m2!1sru!2sru!4v1452761646368',
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
