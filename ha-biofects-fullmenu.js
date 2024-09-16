class HABiofectsFullMenu extends HTMLElement {
  constructor() {
    super();
    this.defaults = {
      particleCount: 40,
      backgroundColor: '#0a192f',
      gridColor: 'rgba(0, 255, 255, 0.1)',
      lineColor: 'rgba(0, 255, 255, 0.5)',
      orbColor: 'rgba(0,255,255,1)',
      particleColor: 'rgba(0, 255, 255, 0.5)',
      glowColor: '#0ff',
      textColor: '#fff',
      itemBorderColor: 'rgba(0, 255, 255, 0.5)',
      hoverGlowColor: 'rgba(0, 255, 255, 0.8)',
      defaultItemColor: '#1a3a5a'
    };
    this.config = {};
  }

  set hass(hass) {
    this._hass = hass;
  }

  setConfig(config) {
    if (!config.items || !Array.isArray(config.items)) {
      throw new Error("You need to define an array of items");
    }
    
    // Reset config to defaults before applying new configuration
    this.config = { ...this.defaults };
    
    // Only apply values from config that are explicitly set
    Object.keys(config).forEach(key => {
      if (config[key] !== undefined && config[key] !== null) {
        this.config[key] = config[key];
      }
    });

    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ''; // Clear existing content
    }

    const shadow = this.shadowRoot || this.attachShadow({ mode: 'open' });
    const container = document.createElement('div');
    container.classList.add('menu');
    shadow.appendChild(container);

    // Create the blueprint background
    const background = document.createElement('div');
    background.classList.add('background');
    container.appendChild(background);

    // Create the rotating dashed lines
    const dashedLine1 = document.createElement('div');
    dashedLine1.classList.add('dashed-line', 'dashed-line-1');
    container.appendChild(dashedLine1);

    const dashedLine2 = document.createElement('div');
    dashedLine2.classList.add('dashed-line', 'dashed-line-2');
    container.appendChild(dashedLine2);

    // Create the glowing orb
    const glowingOrb = document.createElement('div');
    glowingOrb.classList.add('glowing-orb');
    container.appendChild(glowingOrb);

    // Create floating particles
    for (let i = 0; i < this.config.particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.width = `${Math.random() * 6 + 2}px`;
      particle.style.height = particle.style.width;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
      container.appendChild(particle);
    }

    // Create a container for the menu items
    const itemsContainer = document.createElement('div');
    itemsContainer.classList.add('items-container');
    container.appendChild(itemsContainer);

    // Generate menu items based on configuration
    const validItems = this.config.items.filter(item => item.label && item.url);
    const itemCount = validItems.length;

    validItems.forEach((item, index) => {
      const angle = (360 / itemCount) * index;

      const itemWrapper = document.createElement('div');
      itemWrapper.classList.add('menu-item-wrapper');
      itemWrapper.style.transform = `rotate(${angle}deg)`;

      const itemElement = document.createElement('div');
      itemElement.classList.add('menu-item');
      itemElement.innerHTML = `
        <div class="item-content" style="background-color: ${item.color || this.config.defaultItemColor};">
          <span class="item-text">${item.label}</span>
        </div>
      `;
      itemWrapper.appendChild(itemElement);
      itemsContainer.appendChild(itemWrapper);

      itemElement.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleClick(item.url);
      });
    });

    const style = document.createElement('style');
    style.textContent = `
      .menu {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        background-color: ${this.config.backgroundColor};
      }
      .background {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: 
          radial-gradient(circle, ${this.config.gridColor} 2px, transparent 2px),
          linear-gradient(${this.config.gridColor} 1px, transparent 1px),
          linear-gradient(90deg, ${this.config.gridColor} 1px, transparent 1px);
        background-size: 50px 50px, 20px 20px, 20px 20px;
        opacity: 0.3;
        animation: backgroundShift 30s linear infinite;
      }
      .dashed-line {
        position: absolute;
        border-radius: 50%;
        border: 4px dashed ${this.config.lineColor};
      }
      .dashed-line-1 {
        width: 80vmin;
        height: 80vmin;
        animation: rotate 30s linear infinite;
      }
      .dashed-line-2 {
        width: 90vmin;
        height: 90vmin;
        border: 2px dashed ${this.config.lineColor};
        animation: rotate 40s linear infinite reverse;
      }
      .glowing-orb {
        position: absolute;
        width: 20vmin;
        height: 20vmin;
        background: radial-gradient(circle, ${this.config.orbColor} 0%, ${this.config.orbColor.replace('1)', '0)')} 70%);
        border-radius: 50%;
        animation: glow 2s ease-in-out infinite alternate, pulse 4s ease-in-out infinite;
        z-index: 10;
      }
      .particle {
        position: absolute;
        background: ${this.config.particleColor};
        border-radius: 50%;
        animation: float 20s infinite linear;
      }
      .items-container {
        position: absolute;
        width: 70vmin;
        height: 70vmin;
        animation: rotate 20s linear infinite;
      }
      .menu-item-wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
      }
      .menu-item {
        position: absolute;
        transform: translate(-50%, -50%) translateX(35vmin);
        width: 15vmin;
        height: 15vmin;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .menu-item:hover {
        transform: translate(-50%, -50%) translateX(35vmin) scale(1.2);
        box-shadow: 0 0 25px ${this.config.hoverGlowColor};
      }
      .item-content {
        width: 12vmin;
        height: 12vmin;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 2px solid ${this.config.itemBorderColor};
        animation: pulse 2s ease-in-out infinite;
      }
      .item-text {
        color: ${this.config.textColor};
        font-weight: bold;
        text-align: center;
        display: inline-block;
        font-size: 2vmin;
        transform: rotate(90deg);
      }
      @keyframes rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes glow {
        from { 
          box-shadow: 0 0 2vmin ${this.config.glowColor}, 0 0 4vmin ${this.config.glowColor}, 0 0 6vmin ${this.config.glowColor};
          background: radial-gradient(circle, ${this.config.orbColor} 0%, ${this.config.orbColor.replace('1)', '0)')} 80%);
        }
        to { 
          box-shadow: 0 0 4vmin ${this.config.glowColor}, 0 0 8vmin ${this.config.glowColor}, 0 0 12vmin ${this.config.glowColor};
          background: radial-gradient(circle, ${this.config.orbColor} 0%, ${this.config.orbColor.replace('1)', '0)')} 90%);
        }
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      @keyframes float {
        0% { transform: translate(0, 0); }
        25% { transform: translate(10vw, 10vh); }
        50% { transform: translate(20vw, 0); }
        75% { transform: translate(10vw, -10vh); }
        100% { transform: translate(0, 0); }
      }
      @keyframes backgroundShift {
        0% { background-position: 0 0; }
        100% { background-position: 10vmin 10vmin; }
      }
    `;
    shadow.appendChild(style);
  }

  handleClick(url) {
    console.log('Navigating to:', url); // Debugging log
    if (this._hass && this._hass.navigate) {
      console.log('Using Home Assistant navigation');
      this._hass.navigate(url);
    } else if (window.history && window.history.pushState) {
      console.log('Using HTML5 History API');
      window.history.pushState(null, '', url);
      window.dispatchEvent(new Event('location-changed'));
    } else {
      console.log('Fallback: changing location directly');
      window.location.href = url;
    }
  }
}

customElements.define('ha-biofects-fullmenu', HABiofectsFullMenu);
