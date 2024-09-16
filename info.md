# HA Biofects Full Menu

A modern HUD-themed Home Assistant Full page Menu with neon effects, transparency, and glowing effects.

## Features

- Customizable menu items
- Futuristic HUD-style design
- Neon effects and glowing animations
- Responsive layout

## Usage

After installation, add the custom element to your Lovelace UI:

```yaml
type: custom:ha-biofects-fullmenu
items:
  - label: Dashboard
    url: /lovelace/0
  - label: Devices
    url: /config/devices/dashboard
  - label: Automations
    url: /config/automation/dashboard
```
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

**For more detailed information and advanced usage, please see the [README](https://github.com/biofects/ha-biofects-fullmenu/blob/main/README.md).**

