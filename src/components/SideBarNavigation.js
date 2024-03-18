import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { LiaLaptopSolid } from "react-icons/lia";
import { GiClothes } from "react-icons/gi";
import { GiGemNecklace } from "react-icons/gi";
import { MdNewReleases } from "react-icons/md";
import { FaHotjar } from "react-icons/fa";
import { CgArrowTopRight } from "react-icons/cg";

const SidebarNavigation = () => {
  return (
    <>
      <Sidebar>
        <Menu>
          <MenuItem
            icon={<FaHotjar style={{ color: "#ff851b", fontSize: "20px" }} />}
          >
            {" "}
            Hot today{" "}
          </MenuItem>
          <MenuItem
            icon={
              <CgArrowTopRight style={{ color: "#ff851b", fontSize: "20px" }} />
            }
          >
            {" "}
            Top offers{" "}
          </MenuItem>
          <MenuItem
            icon={
              <CgArrowTopRight style={{ color: "#ff851b", fontSize: "20px" }} />
            }
          >
            {" "}
            Games & consoles{" "}
          </MenuItem>
          <MenuItem
            icon={
              <CgArrowTopRight style={{ color: "#ff851b", fontSize: "20px" }} />
            }
          >
            {" "}
            Accesories{" "}
          </MenuItem>
          {/* <MenuItem> new arrivals </MenuItem> */}
          <SubMenu
            icon={
              <MdNewReleases style={{ color: "#ff851b", fontSize: "20px" }} />
            }
            label="new arrivals"
            open={true}
          >
           
            <MenuItem
              icon={
                <GiGemNecklace style={{ color: "#ff851b", fontSize: "20px" }} />
              }
            >
              {" "}
              SmartPhones
            </MenuItem>
            <MenuItem
              icon={
                <GiClothes style={{ color: "#ff851b", fontSize: "20px" }} />
              }
            >
              {" "}
              Aparrels
            </MenuItem>
            <MenuItem
              icon={
                <GiGemNecklace style={{ color: "#ff851b", fontSize: "20px" }} />
              }
            >
              {" "}
              Jewellery
            </MenuItem>
            <MenuItem
              icon={
                <LiaLaptopSolid
                  style={{ color: "#ff851b", fontSize: "20px" }}
                />
              }
            >
              {" "}
              Electronics
            </MenuItem>
            
          </SubMenu>
        </Menu>
      </Sidebar>
      ;
    </>
  );
};

export default SidebarNavigation;
