import { Sidebar, Menu, MenuItem, useProSidebar  } from 'react-pro-sidebar';
import styles from './Sidebar.module.css';

import { Sling as Hamburger } from 'hamburger-react';
import { LuContainer } from "react-icons/lu";
import { GiCargoCrate } from "react-icons/gi";
import { FaWarehouse } from "react-icons/fa";
import { FaTruckMoving } from "react-icons/fa";

export const AppSidebar = () => {

    const { collapseSidebar } = useProSidebar();

    return (
        <div>
        <Sidebar 
            className={styles.sidebar}
            defaultCollapsed='true'
            backgroundColor='#2a3148'
            width='170px'
        >
            <Menu
                menuItemStyles={{
                    button: ({ level, active, disabled }) => {
                    if (level === 0) {
                        return {
                        color: disabled ? "#eee" : "#8f9199",
                        backgroundColor: active ? "#fff" : undefined,
                        "&:hover": {
                            backgroundColor: "#394260",
                            color: "white",
                            scale: 1.5,
                        },
                        };
                    }
                    },
                }}
        >
            <MenuItem 
                icon={
                    <div style={{ marginTop: "5px" }}>
                        <Hamburger
                            size={20}
                            onToggle={() => {
                                collapseSidebar();
                            }}
                            rounded
                        />
                    </div>
                }
                ></MenuItem>
            <MenuItem icon={<GiCargoCrate size={30}/>}> Navio </MenuItem>
            <MenuItem icon={<LuContainer size={30}/>}> Pátio </MenuItem>
            <MenuItem icon={<FaWarehouse size={30}/>}> CFS </MenuItem>
            <MenuItem icon={<LuContainer size={30}/>}> Depot </MenuItem>
            <MenuItem icon={<FaTruckMoving size={30}/>}> Gate </MenuItem>
        </Menu>
        </Sidebar>
        </div>
    );
}

export default AppSidebar;
