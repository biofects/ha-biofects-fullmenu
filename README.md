# HA-Biofects-FullMenu

A Home Assistant custom plugin that provides a full-page interactive menu with rotating particles, glowing orb effects, and customizable items.

## 💸 Donations Appreciated!

---
## 💸 Donations Appreciated!
If you find this plugin useful, please consider donating. Your support is greatly appreciated!

### Sponsor me on GitHub
[![Sponsor Me](https://img.shields.io/badge/Sponsor%20Me-%F0%9F%92%AA-purple?style=for-the-badge)](https://github.com/sponsors/biofects?frequency=recurring&sponsor=biofects) 

### or
## Paypal

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TWRQVYJWC77E6)
---


## Features

* Interactive full-screen menu
* Rotating particles and glowing orb effects
* Customizable items


## Installation

### HACS Installation

1. Go to **HACS** → **Frontend** → **+ Explore & Download Repositories**.
2. Search for `HA-Biofects-FullMenu`.
3. Install it.

This will place the files in `/config/www/community/ha-biofects-fullmenu/`.

### Manual Installation

1. Copy the contents of this repository into:

   ```
   /config/www/community/ha-biofects-fullmenu/
   ```
2. Ensure the JavaScript file exists at:

   ```
   /config/www/community/ha-biofects-fullmenu/ha-biofects-fullmenu.js
   ```

### Add Resource in Home Assistant

Add the following to your **Lovelace resources** (Configuration → Dashboards → Resources):

```yaml
url: /hacsfiles/ha-biofects-fullmenu/ha-biofects-fullmenu.js
type: module
```

## Usage

Once installed, add the card to your dashboard:

```yaml
type: custom:ha-biofects-fullmenu
```

#### Basic Example

```
yaml
views:
  - title: Frontpage
    path: full-page-menu
    panel: true
    cards:
      - type: custom:ha-biofects-fullmenu
        items:
          - label: Home
            url: /lovelace/home
          - label: Settings
            url: /lovelace/settings
          - label: Devices
            url: /lovelace/devices
          - label: Alerts
            url: /lovelace/alerts
          - label: Profile
            url: /lovelace/profile
```

##### Advanced Exmaple
```
yaml
views:
  - title: Frontpage
    path: full-page-menu
    panel: true
    cards:
      - type: custom:ha-biofects-fullmenu
        particleCount: 100
        backgroundColor: '#300000'
        gridColor: rgba(255, 0, 0, 0.1)
        lineColor: rgba(255, 0, 0, 0.5)
        orbColor: rgba(255, 0, 0, 1)
        particleColor: rgba(255, 0, 0, 0.5)
        glowColor: '#ff0000'
        textColor: '#fff'
        itemBorderColor: rgba(255, 0, 0, 0.5)
        hoverGlowColor: rgba(255, 0, 0, 0.8)
        defaultItemColor: '#ff6666'
        items:
          - label: Home
            url: /lovelace/home
          - label: Settings
            url: /lovelace/settings
          - label: Devices
            url: /lovelace/devices
          - label: Alerts
            url: /lovelace/alerts
          - label: Profile
            url: /lovelace/profile
```


---

If you want to remove the tpobar and the sidebar I use a great plugin called Kiosk Mode. 
- [Kiosk Mode](https://github.com/maykar/kiosk-mode) – Hides UI elements for a streamlined experience.

---



## Options
| **Option**          | **Description**                                                       | **Default**                        |
|---------------------|-----------------------------------------------------------------------|------------------------------------|
| `particleCount`      | Number of floating particles                                          | 40                                 |
| `backgroundColor`    | Background color of the menu                                          | `#0a192f`                          |
| `gridColor`          | Color of the background grid                                          | `rgba(0, 255, 255, 0.1)`           |
| `lineColor`          | Color of the rotating dashed lines                                    | `rgba(0, 255, 255, 0.5)`           |
| `orbColor`           | Color of the glowing orb                                              | `rgba(0, 255, 255, 1)`             |
| `particleColor`      | Color of the floating particles                                       | `rgba(0, 255, 255, 0.5)`           |
| `glowColor`          | Color of the glow effect                                              | `#0ff`                             |
| `textColor`          | Color of the menu item text                                           | `#fff`                             |
| `itemBorderColor`    | Border color of the menu items                                        | `rgba(0, 255, 255, 0.5)`           |
| `hoverGlowColor`     | Color of the glow effect on hover                                     | `rgba(0, 255, 255, 0.8)`           |
| `defaultItemColor`   | Background color of the menu items                                    | `#1a3a5a`                          |



## 🐛 Support & Issues
If you encounter bugs or have feature requests, feel free to [open an issue](https://github.com/biofects/ha-biofects-fullmenu) on the GitHub repository.

---

## 📜 License
This project is licensed under the MIT License.
