import { createEl } from './functions';

export default class Weather {
  constructor() {
    this.date = new Date();
    this.changeState = {};
    this.weatherContainer = createEl('div', 'weather__today', null, null);
    this.dayShort = {
      en: ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'],
      ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      be: ['Няд', 'Пан', 'Аут', 'Сер', 'Чац', 'Пят', 'Суб'],
    };
    this.monthFull = {
      en: ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      ru: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
      be: ['Студзеня', 'Лютага', 'Сакавiка', 'Красавiка', 'Мая', 'Чэрвеня', 'Лiпеня', 'Жнiуня', 'Верасня', 'Кастрычнiка', 'Лiстапада', 'Снежня'],
    };
    this.isoCountries = {
      AF: {
        name: 'Afghanistan',
      },
      AX: {
        name: 'Aland Islands',
      },
      AL: {
        name: 'Albania',
      },
      DZ: {
        name: 'Algeria',
      },
      AS: {
        name: 'American Samoa',
      },
      AD: {
        name: 'Andorra',
      },
      AO: {
        name: 'Angola',
      },
      AI: {
        name: 'Anguilla',
      },
      AQ: {
        name: 'Antarctica',
      },
      AG: {
        name: 'Antigua And Barbuda',
      },
      AR: {
        name: 'Argentina',
      },
      AM: {
        name: 'Armenia',
      },
      AW: {
        name: 'Aruba',
      },
      AU: {
        name: 'Australia',
      },
      AT: {
        name: 'Austria',
      },
      AZ: {
        name: 'Azerbaijan',
      },
      BS: {
        name: 'Bahamas',
      },
      BH: {
        name: 'Bahrain',
      },
      BD: {
        name: 'Bangladesh',
      },
      BB: {
        name: 'Barbados',
      },
      BY: {
        name: 'Belarus',
      },
      BE: {
        name: 'Belgium',
      },
      BZ: {
        name: 'Belize',
      },
      BJ: {
        name: 'Benin',
      },
      BM: {
        name: 'Bermuda',
      },
      BT: {
        name: 'Bhutan',
      },
      BO: {
        name: 'Bolivia',
      },
      BA: {
        name: 'Bosnia And Herzegovina',
      },
      BW: {
        name: 'Botswana',
      },
      BV: {
        name: 'Bouvet Island',
      },
      BR: {
        name: 'Brazil',
      },
      IO: {
        name: 'British Indian Ocean Territory',
      },
      BN: {
        name: 'Brunei Darussalam',
      },
      BG: {
        name: 'Bulgaria',
      },
      BF: {
        name: 'Burkina Faso',
      },
      BI: {
        name: 'Burundi',
      },
      KH: {
        name: 'Cambodia',
      },
      CM: {
        name: 'Cameroon',
      },
      CA: {
        name: 'Canada',
      },
      CV: {
        name: 'Cape Verde',
      },
      KY: {
        name: 'Cayman Islands',
      },
      CF: {
        name: 'Central African Republic',
      },
      TD: {
        name: 'Chad',
      },
      CL: {
        name: 'Chile',
      },
      CN: {
        name: 'China',
      },
      CX: {
        name: 'Christmas Island',
      },
      CC: {
        name: 'Cocos (Keeling) Islands',
      },
      CO: {
        name: 'Colombia',
      },
      KM: {
        name: 'Comoros',
      },
      CG: {
        name: 'Congo',
      },
      CD: {
        name: 'Congo, Democratic Republic',
      },
      CK: {
        name: 'Cook Islands',
      },
      CR: {
        name: 'Costa Rica',
      },
      CI: {
        name: 'Cote D\'Ivoire',
      },
      HR: {
        name: 'Croatia',
      },
      CU: {
        name: 'Cuba',
      },
      CY: {
        name: 'Cyprus',
      },
      CZ: {
        name: 'Czech Republic',
      },
      DK: {
        name: 'Denmark',
      },
      DJ: {
        name: 'Djibouti',
      },
      DM: {
        name: 'Dominica',
      },
      DO: {
        name: 'Dominican Republic',
      },
      EC: {
        name: 'Ecuador',
      },
      EG: {
        name: 'Egypt',
      },
      SV: {
        name: 'El Salvador',
      },
      GQ: {
        name: 'Equatorial Guinea',
      },
      ER: {
        name: 'Eritrea',
      },
      EE: {
        name: 'Estonia',
      },
      ET: {
        name: 'Ethiopia',
      },
      FK: {
        name: 'Falkland Islands (Malvinas)',
      },
      FO: {
        name: 'Faroe Islands',
      },
      FJ: {
        name: 'Fiji',
      },
      FI: {
        name: 'Finland',
      },
      FR: {
        name: 'France',
      },
      GF: {
        name: 'French Guiana',
      },
      PF: {
        name: 'French Polynesia',
      },
      TF: {
        name: 'French Southern Territories',
      },
      GA: {
        name: 'Gabon',
      },
      GM: {
        name: 'Gambia',
      },
      GE: {
        name: 'Georgia',
      },
      DE: {
        name: 'Germany',
      },
      GH: {
        name: 'Ghana',
      },
      GI: {
        name: 'Gibraltar',
      },
      GR: {
        name: 'Greece',
      },
      GL: {
        name: 'Greenland',
      },
      GD: {
        name: 'Grenada',
      },
      GP: {
        name: 'Guadeloupe',
      },
      GU: {
        name: 'Guam',
      },
      GT: {
        name: 'Guatemala',
      },
      GG: {
        name: 'Guernsey',
      },
      GN: {
        name: 'Guinea',
      },
      GW: {
        name: 'Guinea-Bissau',
      },
      GY: {
        name: 'Guyana',
      },
      HT: {
        name: 'Haiti',
      },
      HM: {
        name: 'Heard Island & Mcdonald Islands',
      },
      VA: {
        name: 'Holy See (Vatican City State)',
      },
      HN: {
        name: 'Honduras',
      },
      HK: {
        name: 'Hong Kong',
      },
      HU: {
        name: 'Hungary',
      },
      IS: {
        name: 'Iceland',
      },
      IN: {
        name: 'India',
      },
      ID: {
        name: 'Indonesia',
      },
      IR: {
        name: 'Iran, Islamic Republic Of',
      },
      IQ: {
        name: 'Iraq',
      },
      IE: {
        name: 'Ireland',
      },
      IM: {
        name: 'Isle Of Man',
      },
      IL: {
        name: 'Israel',
      },
      IT: {
        name: 'Italy',
      },
      JM: {
        name: 'Jamaica',
      },
      JP: {
        name: 'Japan',
      },
      JE: {
        name: 'Jersey',
      },
      JO: {
        name: 'Jordan',
      },
      KZ: {
        name: 'Kazakhstan',
      },
      KE: {
        name: 'Kenya',
      },
      KI: {
        name: 'Kiribati',
      },
      KR: {
        name: 'Korea',
      },
      KW: {
        name: 'Kuwait',
      },
      KG: {
        name: 'Kyrgyzstan',
      },
      LA: {
        name: 'Lao People\'s Democratic Republic',
      },
      LV: {
        name: 'Latvia',
      },
      LB: {
        name: 'Lebanon',
      },
      LS: {
        name: 'Lesotho',
      },
      LR: {
        name: 'Liberia',
      },
      LY: {
        name: 'Libyan Arab Jamahiriya',
      },
      LI: {
        name: 'Liechtenstein',
      },
      LT: {
        name: 'Lithuania',
      },
      LU: {
        name: 'Luxembourg',
      },
      MO: {
        name: 'Macao',
      },
      MK: {
        name: 'Macedonia',
      },
      MG: {
        name: 'Madagascar',
      },
      MW: {
        name: 'Malawi',
      },
      MY: {
        name: 'Malaysia',
      },
      MV: {
        name: 'Maldives',
      },
      ML: {
        name: 'Mali',
      },
      MT: {
        name: 'Malta',
      },
      MH: {
        name: 'Marshall Islands',
      },
      MQ: {
        name: 'Martinique',
      },
      MR: {
        name: 'Mauritania',
      },
      MU: {
        name: 'Mauritius',
      },
      YT: {
        name: 'Mayotte',
      },
      MX: {
        name: 'Mexico',
      },
      FM: {
        name: 'Micronesia, Federated States Of',
      },
      MD: {
        name: 'Moldova',
      },
      MC: {
        name: 'Monaco',
      },
      MN: {
        name: 'Mongolia',
      },
      ME: {
        name: 'Montenegro',
      },
      MS: {
        name: 'Montserrat',
      },
      MA: {
        name: 'Morocco',
      },
      MZ: {
        name: 'Mozambique',
      },
      MM: {
        name: 'Myanmar',
      },
      NA: {
        name: 'Namibia',
      },
      NR: {
        name: 'Nauru',
      },
      NP: {
        name: 'Nepal',
      },
      NL: {
        name: 'Netherlands',
      },
      AN: {
        name: 'Netherlands Antilles',
      },
      NC: {
        name: 'New Caledonia',
      },
      NZ: {
        name: 'New Zealand',
      },
      NI: {
        name: 'Nicaragua',
      },
      NE: {
        name: 'Niger',
      },
      NG: {
        name: 'Nigeria',
      },
      NU: {
        name: 'Niue',
      },
      NF: {
        name: 'Norfolk Island',
      },
      MP: {
        name: 'Northern Mariana Islands',
      },
      NO: {
        name: 'Norway',
      },
      OM: {
        name: 'Oman',
      },
      PK: {
        name: 'Pakistan',
      },
      PW: {
        name: 'Palau',
      },
      PS: {
        name: 'Palestinian Territory, Occupied',
      },
      PA: {
        name: 'Panama',
      },
      PG: {
        name: 'Papua New Guinea',
      },
      PY: {
        name: 'Paraguay',
      },
      PE: {
        name: 'Peru',
      },
      PH: {
        name: 'Philippines',
      },
      PN: {
        name: 'Pitcairn',
      },
      PL: {
        name: 'Poland',
      },
      PT: {
        name: 'Portugal',
      },
      PR: {
        name: 'Puerto Rico',
      },
      QA: {
        name: 'Qatar',
      },
      RE: {
        name: 'Reunion',
      },
      RO: {
        name: 'Romania',
      },
      RU: {
        name: 'Russian Federation',
      },
      RW: {
        name: 'Rwanda',
      },
      BL: {
        name: 'Saint Barthelemy',
      },
      SH: {
        name: 'Saint Helena',
      },
      KN: {
        name: 'Saint Kitts And Nevis',
      },
      LC: {
        name: 'Saint Lucia',
      },
      MF: {
        name: 'Saint Martin',
      },
      PM: {
        name: 'Saint Pierre And Miquelon',
      },
      VC: {
        name: 'Saint Vincent And Grenadines',
      },
      WS: {
        name: 'Samoa',
      },
      SM: {
        name: 'San Marino',
      },
      ST: {
        name: 'Sao Tome And Principe',
      },
      SA: {
        name: 'Saudi Arabia',
      },
      SN: {
        name: 'Senegal',
      },
      RS: {
        name: 'Serbia',
      },
      SC: {
        name: 'Seychelles',
      },
      SL: {
        name: 'Sierra Leone',
      },
      SG: {
        name: 'Singapore',
      },
      SK: {
        name: 'Slovakia',
      },
      SI: {
        name: 'Slovenia',
      },
      SB: {
        name: 'Solomon Islands',
      },
      SO: {
        name: 'Somalia',
      },
      ZA: {
        name: 'South Africa',
      },
      GS: {
        name: 'South Georgia And Sandwich Isl.',
      },
      ES: {
        name: 'Spain',
      },
      LK: {
        name: 'Sri Lanka',
      },
      SD: {
        name: 'Sudan',
      },
      SR: {
        name: 'Suriname',
      },
      SJ: {
        name: 'Svalbard And Jan Mayen',
      },
      SZ: {
        name: 'Swaziland',
      },
      SE: {
        name: 'Sweden',
      },
      CH: {
        name: 'Switzerland',
      },
      SY: {
        name: 'Syrian Arab Republic',
      },
      TW: {
        name: 'Taiwan',
      },
      TJ: {
        name: 'Tajikistan',
      },
      TZ: {
        name: 'Tanzania',
      },
      TH: {
        name: 'Thailand',
      },
      TL: {
        name: 'Timor-Leste',
      },
      TG: {
        name: 'Togo',
      },
      TK: {
        name: 'Tokelau',
      },
      TO: {
        name: 'Tonga',
      },
      TT: {
        name: 'Trinidad And Tobago',
      },
      TN: {
        name: 'Tunisia',
      },
      TR: {
        name: 'Turkey',
      },
      TM: {
        name: 'Turkmenistan',
      },
      TC: {
        name: 'Turks And Caicos Islands',
      },
      TV: {
        name: 'Tuvalu',
      },
      UG: {
        name: 'Uganda',
      },
      UA: {
        name: 'Ukraine',
      },
      AE: {
        name: 'United Arab Emirates',
      },
      GB: {
        name: 'United Kingdom',
      },
      US: {
        name: 'United States',
      },
      UM: {
        name: 'United States Outlying Islands',
      },
      UY: {
        name: 'Uruguay',
      },
      UZ: {
        name: 'Uzbekistan',
      },
      VU: {
        name: 'Vanuatu',
      },
      VE: {
        name: 'Venezuela',
      },
      VN: {
        name: 'Viet Nam',
      },
      VG: {
        name: 'Virgin Islands, British',
      },
      VI: {
        name: 'Virgin Islands, U.S.',
      },
      WF: {
        name: 'Wallis And Futuna',
      },
      EH: {
        name: 'Western Sahara',
      },
      YE: {
        name: 'Yemen',
      },
      ZM: {
        name: 'Zambia',
      },
      ZW: {
        name: 'Zimbabwe',
      },
    };
  }

  render() {
    const countryInfo = createEl('div', 'country__info', null, this.weatherContainer);
    createEl('div', 'town', null, countryInfo);
    createEl('div', 'country', null, countryInfo);

    const dateCont = createEl('div', 'date', null, this.weatherContainer);
    createEl('div', 'today', null, dateCont);

    const showData = createEl('div', 'show__data', null, this.weatherContainer);
    createEl('div', 'show__temperature-now', null, showData);
    const description = createEl('div', 'description__weather', null, showData);
    createEl('img', 'weather__icon', null, description);

    const descriptionWeatherInfo = createEl('div', 'description__weather-info', null, description);
    createEl('div', 'summary', null, descriptionWeatherInfo);

    const feelsLike = createEl('div', 'apparent__temperature', null, descriptionWeatherInfo);
    createEl('span', 'description__weather-text', 'Feels like:', feelsLike);
    createEl('span', 'description__weather-temperature', null, feelsLike);

    const wind = createEl('div', 'wind__speed', null, descriptionWeatherInfo);
    createEl('span', 'description__weather-text', 'Wind:', wind);
    createEl('span', 'description__weather-wind', null, wind);

    const humidity = createEl('div', 'humidity', null, descriptionWeatherInfo);
    createEl('span', 'description__weather-text', 'Humidity:', humidity);
    createEl('span', 'description__weather-humidity', null, humidity);

    return this.weatherContainer;
  }

  convertCountryCode(code) {
    return this.isoCountries[code].name;
  }

  localDate(tz, lng) {
    const d = this.date;
    let unixDate = Math.round(d.getTime() / 1000);
    unixDate += tz;
    const d2 = new Date(unixDate * 1000);
    const dayWeek = this.dayShort[lng][d2.getUTCDay()];
    const dayMonth = d2.getUTCDate();
    const month = this.monthFull[lng][d2.getMonth()];
    const time = `${d2.getUTCHours()}:${d2.getMinutes()}`;
    return `${dayWeek} ${dayMonth} ${month} ${time}`;
  }

  change() {
    this.weatherContainer.querySelector('.show__temperature-now').innerText = ` ${(parseInt(this.changeState.main.temp, 10) >= 273) ? (parseInt(this.changeState.main.temp, 10) - 273) : -(273 - parseInt(this.changeState.main.temp, 10))}°`;
    this.weatherContainer.querySelector('.town').innerText = this.changeState.name;
    this.weatherContainer.querySelector('.country').innerText = this.convertCountryCode(this.changeState.sys.country);
    this.weatherContainer.querySelector('.today').innerText = this.localDate(this.changeState.timezone, 'en');
    this.weatherContainer.querySelector('.summary').innerText = this.changeState.weather[0].main;
    this.weatherContainer.querySelector('.description__weather-temperature').innerText = ` ${(parseInt(this.changeState.main.feels_like, 10) >= 273) ? (parseInt(this.changeState.main.feels_like, 10) - 273) : -(273 - parseInt(this.changeState.main.feels_like, 10))} °`;
    this.weatherContainer.querySelector('.description__weather-wind').innerText = ` ${this.changeState.wind.speed} m/s`;
    this.weatherContainer.querySelector('.description__weather-humidity').innerText = ` ${this.changeState.main.humidity} %`;
    this.weatherContainer.querySelector('.weather__icon').src = `https://openweathermap.org/img/wn/${this.changeState.weather[0].icon}@2x.png`;
  }
}
