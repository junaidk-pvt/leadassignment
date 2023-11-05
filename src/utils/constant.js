export const countries = [
    { label: 'Andorra', value: 'AD' },
    { label: 'Argentina', value: 'AR' },
    { label: 'American Samoa', value: 'AS' },
    { label: 'Austria', value: 'AT' },
    { label: 'Australia', value: 'AU' },
    { label: 'Bangladesh', value: 'BD' },
    { label: 'Belgium', value: 'BE' },
    { label: 'Bulgaria', value: 'BG' },
    { label: 'Brazil', value: 'BR' },
    { label: 'Canada', value: 'CA' },
    { label: 'Switzerland', value: 'CH' },
    { label: 'Czech Republic', value: 'CZ' },
    { label: 'Germany', value: 'DE' },
    { label: 'Denmark', value: 'DK' },
    { label: 'Dominican Republic', value: 'DO' },
    { label: 'Spain', value: 'ES' },
    { label: 'Finland', value: 'FI' },
    { label: 'Faroe Islands', value: 'FO' },
    { label: 'France', value: 'FR' },
    { label: 'Great Britain', value: 'GB' },
    { label: 'French Guyana', value: 'GF' },
    { label: 'Guernsey', value: 'GG' },
    { label: 'Greenland', value: 'GL' },
    { label: 'Guadeloupe', value: 'GP' },
    { label: 'Guatemala', value: 'GT' },
    { label: 'Guam', value: 'GU' },
    { label: 'Guyana', value: 'GY' },
    { label: 'Croatia', value: 'HR' },
    { label: 'Hungary', value: 'HU' },
    { label: 'Isle of Man', value: 'IM' },
    { label: 'India', value: 'IN' },
    { label: 'Iceland', value: 'IS' },
    { label: 'Italy', value: 'IT' },
    { label: 'Jersey', value: 'JE' },
    { label: 'Japan', value: 'JP' },
    { label: 'Liechtenstein', value: 'LI' },
    { label: 'Sri Lanka', value: 'LK' },
    { label: 'Lithuania', value: 'LT' },
    { label: 'Luxembourg', value: 'LU' },
    { label: 'Monaco', value: 'MC' },
    { label: 'Moldavia', value: 'MD' },
    { label: 'Marshall Islands', value: 'MH' },
    { label: 'Macedonia', value: 'MK' },
    { label: 'Northern Mariana Islands', value: 'MP' },
    { label: 'Martinique', value: 'MQ' },
    { label: 'Mexico', value: 'MX' },
    { label: 'Malaysia', value: 'MY' },
    { label: 'Holland', value: 'NL' },
    { label: 'Norway', value: 'NO' },
    { label: 'New Zealand', value: 'NZ' },
    { label: 'Philippines', value: 'PH' },
    { label: 'Pakistan', value: 'PK' },
    { label: 'Poland', value: 'PL' },
    { label: 'Saint Pierre and Miquelon', value: 'PM' },
    { label: 'Puerto Rico', value: 'PR' },
    { label: 'Portugal', value: 'PT' },
    { label: 'French Reunion', value: 'RE' },
    { label: 'Russia', value: 'RU' },
    { label: 'Sweden', value: 'SE' },
    { label: 'Slovenia', value: 'SI' },
    { label: 'Svalbard & Jan Mayen Islands', value: 'SJ' },
    { label: 'Slovak Republic', value: 'SK' },
    { label: 'San Marino', value: 'SM' },
    { label: 'Thailand', value: 'TH' },
    { label: 'Turkey', value: 'TR' },
    { label: 'United States', value: 'US' },
    { label: 'Vatican', value: 'VA' },
    { label: 'Virgin Islands', value: 'VI' },
    { label: 'Mayotte', value: 'YT' },
    { label: 'South Africa', value: 'ZA' },
  ];
  

  export const PincodeRegex = (countryCode)=>{
    switch (countryCode) {
        case 'AD':
          return /\d{3}/; // Andorra
        case 'AR':
          return /\d{4}/; // Argentina
        case 'AS':
          return /\d{5}/; // American Samoa
        case 'AT':
          return /\d{4}/; // Austria
        case 'AU':
          return /\d{4}/; // Australia
        case 'BD':
          return /\d{4}/; // Bangladesh
        case 'BE':
          return /\d{4}/; // Belgium
        case 'BG':
          return /\d{4}/; // Bulgaria
        case 'BR':
          return /\d{8}/; // Brazil
        case 'CA':
          return /[A-Z]\d[A-Z] \d[A-Z]\d/; // Canada
        case 'CH':
          return /\d{4}/; // Switzerland
        case 'CZ':
          return /\d{6}/; // Czech Republic
        case 'DE':
          return /\d{5}/; // Germany
        case 'DK':
          return /\d{4}/; // Denmark
        case 'DO':
          return /\d{5}/; // Dominican Republic
        case 'ES':
          return /\d{5}/; // Spain
        case 'FI':
          return /\d{5}/; // Finland
        case 'FO':
          return /\d{3}/; // Faroe Islands
        case 'FR':
          return /\d{5}/; // France
        case 'GB':
          return /[A-Z]\d[A-Z] \d[A-Z]\d/; // Great Britain
        case 'GF':
          return /\d{5}/; // French Guyana
        case 'GG':
          return /[A-Z]\d[A-Z] \d[A-Z]\d/; // Guernsey
        case 'GL':
          return /\d{4}/; // Greenland
        case 'GP':
          return /\d{5}/; // Guadeloupe
        case 'GT':
          return /\d{5}/; // Guatemala
        case 'GU':
          return /\d{5}/; // Guam
        case 'GY':
          return /\d{5}/; // Guyana
        case 'HR':
          return /\d{5}/; // Croatia
        case 'HU':
          return /\d{4}/; // Hungary
        case 'IM':
          return /[A-Z]\d[A-Z] \d[A-Z]\d/; // Isle of Man
        case 'IN':
          return /\d{6}/; // India
        case 'IS':
          return /\d{3}/; // Iceland
        case 'IT':
          return /\d{5}/; // Italy
        case 'JE':
          return /[A-Z]\d[A-Z] \d[A-Z]\d/; // Jersey
        case 'JP':
          return /\d{7}/; // Japan
        case 'LI':
          return /\d{4}/; // Liechtenstein
        case 'LK':
          return /\d{5}/; // Sri Lanka
        case 'LT':
          return /\d{5}/; // Lithuania
        case 'LU':
          return /\d{4}/; // Luxembourg
        case 'MC':
          return /\d{5}/; // Monaco
        case 'MD':
          return /\d{4}/; // Moldavia
        case 'MH':
          return /\d{5}/; // Marshall Islands
        case 'MK':
          return /\d{4}/; // Macedonia
        case 'MP':
          return /\d{5}/; // Northern Mariana Islands
        case 'MQ':
          return /\d{5}/; // Martinique
        case 'MX':
          return /\d{5}/; // Mexico
        case 'MY':
          return /\d{5}/; // Malaysia
        case 'NL':
          return /\d{4}/; // Holland
        case 'NO':
          return /\d{4}/; // Norway
        case 'NZ':
          return /\d{4}/; // New Zealand
        case 'PH':
          return /\d{4}/; // Philippines
        case 'PK':
          return /\d{5}/; // Pakistan
        case 'PL':
          return /\d{5}/; // Poland
        case 'PM':
          return /\d{5}/; // Saint Pierre and Miquelon
        case 'PR':
          return /\d{5}/; // Puerto Rico
        case 'PT':
          return /\d{7}-\d{3}/; // Portugal
        case 'RE':
          return /\d{5}/; // French Reunion
        case 'RU':
          return /\d{6}/; // Russia
        case 'SE':
          return /\d{5}/; // Sweden
        case 'SI':
          return /\d{4}/; // Slovenia
        case 'SJ':
          return /\d{4}/; // Svalbard & Jan Mayen Islands
        case 'SK':
          return /\d{6}/; // Slovak Republic
        case 'SM':
          return /\d{5}/; // San Marino
        case 'TH':
          return /\d{5}/; // Thailand
        case 'TR':
          return /\d{5}/; // Turkey
        case 'US':
          return /\d{5}/; // United States
        case 'VA':
          return /\d{5}/; // Vatican
        case 'VI':
          return /\d{5}/; // Virgin Islands
        case 'YT':
          return /\d{5}/; // Mayotte
        case 'ZA':
          return /\d{4}/; // South Africa
        default:
          return null; // Handle other countries or invalid codes
      }
      
  } 