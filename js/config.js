window.ALAD_CONFIG = {
  "stageWidth": 1080,
  "stageHeight": 450,
  "fitMode": "cover",
  "bgColor": "#000000",
  "transition": 0.8,
  "backgroundFade": true,
  "clockTimezone": "America/Lima",
  "projectId": "p_mueidxh7aspx93",
  "backgrounds": [],
  "resources": [
    {
      "id": "r_mueieyg02fhvdn",
      "type": "api",
      "url": "https://docs.google.com/spreadsheets/d/15srWgvwc2y-oDT7mrih8COANShyVPragvgMEl_nSD6E/gviz/tq?tqx=out:json&gid=1578970820",
      "refreshMin": 1,
      "cache": false,
      "fields": [
        {
          "token": "{Foto}",
          "path": "[0].Foto"
        },
        {
          "token": "{Frase}",
          "path": "[0].Frase"
        },
        {
          "token": "{SoloNombre}",
          "path": "[0].SoloNombre"
        },
        {
          "token": "{SoloCargo}",
          "path": "[0].SoloCargo"
        }
      ]
    }
  ],
  "weather": {
    "enabled": false,
    "lat": -12.0464,
    "lon": -77.0428,
    "city": "Lima",
    "unit": "celsius",
    "refresh": 15
  },
  "apiRefreshMin": 1,
  "breakpoints": [
    {
      "id": "bp_720x630",
      "name": "720x630",
      "width": 720,
      "height": 630
    }
  ],
  "elements": [
    {
      "id": "foto_api",
      "type": "image",
      "imageSrc": "{Foto}",
      "x": 53,
      "y": 0,
      "width": 47,
      "height": 100,
      "objectFit": "cover",
      "zIndex": 10,
      "overrides": {
        "bp_720x630": {
          "x": 52,
          "y": 0,
          "width": 48,
          "height": 100
        }
      },
      "condition": {
        "type": "showFor",
        "delay": 3.1,
        "showFor": 99999
      }
    },
    {
      "id": "frase_api",
      "type": "text",
      "text": "{Frase}",
      "x": 8,
      "y": 32,
      "width": 42,
      "height": 38,
      "fitText": true,
      "fontSize": 48,
      "color": "#000000",
      "fontFamilyKey": "Myriad Pro Bold",
      "fontWeight": "normal",
      "align": "left",
      "valign": "center",
      "zIndex": 10,
      "overrides": {
        "bp_720x630": {
          "x": 6,
          "y": 30,
          "width": 43,
          "height": 42,
          "fontSize": 42
        }
      },
      "condition": {
        "type": "showFor",
        "delay": 3.6,
        "showFor": 99999
      }
    },
    {
      "id": "nombre_api",
      "type": "text",
      "text": "{SoloNombre} <span style='color: #f39c12;'>{SoloCargo}</span>",
      "x": 8,
      "y": 72,
      "width": 42,
      "height": 15,
      "fitText": true,
      "fontSize": 20,
      "color": "#000000",
      "fontFamilyKey": "Myriad Pro Semibold",
      "fontWeight": "normal",
      "align": "left",
      "zIndex": 10,
      "overrides": {
        "bp_720x630": {
          "x": 6,
          "y": 74,
          "width": 43,
          "height": 14,
          "fontSize": 18
        }
      },
      "condition": {
        "type": "showFor",
        "delay": 3.6,
        "showFor": 99999
      }
    }
  ]
};
