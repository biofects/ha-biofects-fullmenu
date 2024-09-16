# 🚀 HA Biofects Full Menu

## 🔍 About this

HA Biofects Full Menu is a custom Home Assistant Lovelace card that creates a futuristic, interactive full-page menu with rotating particles, glowing orb effects, and customizable menu items. This card is designed to enhance your Home Assistant dashboard with an eye-catching navigation experience.


## Features

- **Rotating Particles**: Adds dynamic, customizable floating particles.
- **Glowing Orb**: Pulsating glowing orb animation in the center of the screen.
- **Menu Items**: Circular, configurable menu items around the orb.
- **Customizable Styling**: Particle count, colors, and glow effects are fully adjustable.



---

## 💸 Donations Welcome!
If you find this card useful, please consider donating. Your support is greatly appreciated!

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TWRQVYJWC77E6)

---


## 🚀 Installation Instructions

### HACS (Recommended)

#### Step-by-Step Guide

1. Ensure [HACS](https://hacs.xyz/) is installed in your Home Assistant.
2. Open the HACS panel, click the three dots in the top-right corner, and select **"Custom Repositories."**
3. Add the following URL as a **Custom Repository**:  
   [https://github.com/biofects/ha-biofects-fullmenu](https://github.com/biofects/ha-biofects-fullmenu)  
   and select **"Theme"** as the category.
4. Click **"Add,"** then navigate to the **"Theme"** tab, click **"+ Explore & Download Repositories"** and search for "Biofects."
5. Install the HA Biofects Full page Menu and restart Home Assistant.
6. **(ONLY IF, it does not show in resources.. This is old method)** Add the following to your resources: 

```
yaml
lovelace:
  mode: storage
    resources:
      - url: /hacsfiles/ha-biofects-fullmenu/ha-biofects-fullmenu.js
        type: module
```


## 🛠️ Usage Instructions

1. Create a new dashboard (I used FP) and make it default
2. Navigate to the page
3. Click on edit (the Pencil icon) in the upper right hand corner
4. Click on the 3 dots in the upper right hand corner
5. Select raw configuration editor
6. Add the the following

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
