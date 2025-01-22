var APP_DATA = {
  "scenes": [
    {
      "id": "0--",
      "name": "Колонный зал",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0082707629644716,
          "pitch": -0.024735858113393405,
          "rotation": 0,
          "target": "1-----"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.7656217049066267,
          "pitch": 0.1783815814213181,
          "title": "Сотрудник музея",
          "text": "Занят работой"
        }
      ]
    },
    {
      "id": "1-----",
      "name": "Колонный зал - тень",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "2-----"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.7442637057823225,
          "pitch": 0.21357241626611767,
          "title": "Случайный посетитель",
          "text": "Пишет сообщение в чат"
        }
      ]
    },
    {
      "id": "2-----",
      "name": "Колонный зал - свет",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "3----"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.7253613910613526,
          "pitch": 0.22662585465917928,
          "title": "Смотритель зала",
          "text": "Проверяет рабочий чат Горного музея"
        }
      ]
    },
    {
      "id": "3----",
      "name": "Хищник в колонном зале",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "0--"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.7817529357497772,
          "pitch": 0.1820736300315957,
          "title": "Возможно человек",
          "text": "Кто то проник в колонный зал и замаскировался"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
