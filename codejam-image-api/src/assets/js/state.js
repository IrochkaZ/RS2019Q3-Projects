const state = {
  tools: {
    pencil: true,
    bucket: false,
    picker: false,
  },
  colors: {
    current: '#c4c4c4',
    prev: '#41f795',
  },
  canvasSize: {
    width: 0,
    height: 0,
  },
  blockSize: {
    width: 0,
    height: 0,
  },
  api: {
    url: 'https://api.unsplash.com/photos/random',
    key: '4dc7bf52cd0116045a1668d9c6809696591d70a85a44b56b005d4326e3e7bbee',
    img: new Image(),
    isSet: false,
  },
  domToolActive: document.querySelector('.tools__color > .active'),
};

export default state;
