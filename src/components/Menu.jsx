
import React, { useState } from 'react';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('menu1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">Our Menu</h2>
          <p className="section-subtitle">எங்கள் மெனு</p>
        </div>

        <div className="menu-tabs">
          <button
            className={`tab-btn ${activeTab === 'menu1' ? 'active' : ''}`}
            onClick={() => handleTabClick('menu1')}
          >
            Menu 1
          </button>
          <button
            className={`tab-btn ${activeTab === 'menu2' ? 'active' : ''}`}
            onClick={() => handleTabClick('menu2')}
          >
            Menu 2
          </button>
          <button
            className={`tab-btn ${activeTab === 'menu3' ? 'active' : ''}`}
            onClick={() => handleTabClick('menu3')}
          >
            Menu 3
          </button>
          <button
            className={`tab-btn ${activeTab === 'menu4' ? 'active' : ''}`}
            onClick={() => handleTabClick('menu4')}
          >
            Menu 4
          </button>
        </div>

        <div className="menu-content">
          <div id="menu1" className={`menu-panel ${activeTab === 'menu1' ? 'active' : ''}`}>
            <h3 className="menu-title">இரவு டின்னர் | Dinner Menu 1</h3>
            <div className="menu-grid">
              {/* Menu items for menu 1 */}
            </div>
          </div>

          <div id="menu2" className={`menu-panel ${activeTab === 'menu2' ? 'active' : ''}`}>
            <h3 className="menu-title">இரவு டின்னர் | Dinner Menu 2</h3>
            <div className="menu-grid">
              {/* Menu items for menu 2 */}
            </div>
          </div>

          <div id="menu3" className={`menu-panel ${activeTab === 'menu3' ? 'active' : ''}`}>
            <h3 className="menu-title">இரவு டின்னர் | Dinner Menu 3</h3>
            <div className="menu-grid">
              {/* Menu items for menu 3 */}
            </div>
          </div>

          <div id="menu4" className={`menu-panel ${activeTab === 'menu4' ? 'active' : ''}`}>
            <h3 className="menu-title">இரவு டின்னர் | Dinner Menu 4</h3>
            <div className="menu-grid">
              {/* Menu items for menu 4 */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
