import React from "react";
import MenuItem from "../../Components/Menuitem/Menuitem";
import SubHeading from "../../Components/SubHeading/SubHeading";
import menu from "./menu.png";
import { wines, cocktails } from "./data";
import "./SpecialMenu.css";
const SpecialMenu = () => {
  return (
    <div className="app_specialMenu">
      <div className="app_specialMenu_title">
        <SubHeading title="Menu that fits your palette" />
        <h1 className="headtext__comorant">Today's Special</h1>
      </div>
      <div className="app_specialMenu_menu">
        <div className="app_specialMenu_menu_wine">
          <p
            className="app_specialMenu_menu_heading"
            style={{ color: "#DCCA87" }}
          >
            Wine & Beer
          </p>

          <div className="app_specialMenu_menu_items">
            {wines.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </div>
        </div>
        <div className="app_specialMenu_menu_img">
          <img src={menu} alt="menu img" />
        </div>
        <div className="app_specialMenu_menu_cocktails">
          <p
            className="app_specialMenu_menu_heading"
            style={{ color: "#DCCA87" }}
          >
            Cocktails
          </p>
          <div className="app_specialMenu_menu_items">
            {cocktails.map((cocktail, index) => (
              <MenuItem
                key={cocktail.title + index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </div>
        </div>
        <div style={{ marginTop: "15px" }}>
          <button type="button" className="custom_button">
            View more
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
