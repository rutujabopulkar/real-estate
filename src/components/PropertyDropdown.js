import React, { useState, useEffect, useContext } from "react";

// icons
import { RiHome5Line, RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

//  headless ui
import { Menu } from "@headlessui/react";

// house context
import { HouseContext } from "./HouseContext";

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  console.log(properties);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        className="dropdown-btn w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{property}</div>

          <div className="text-[13px]">Select your Place</div>
        </div>
        {isOpen ? (
          <RiArrowDropDownLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDropUpLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {properties.map((property, index) => {
          return (
            <Menu.Item
              onClick={() => setProperty(property)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;