import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar  } from 'react-pro-sidebar';
import styles from './Sidebar.module.css';

import { GiCrane } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
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
            width='180px'
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
                            color: "white"
                        },
                        };
                    }
                    },
                }}
        >
            <MenuItem 
                icon={
                    <GiHamburgerMenu 
                        size={30}
                        onClick={() => {
                            collapseSidebar();
                        }}
                    />
                }
                
            >   </MenuItem>
            <MenuItem icon={<GiCargoCrate size={30}/>}> Navio </MenuItem>
            <MenuItem icon={<LuContainer size={30}/>}> Pátio </MenuItem>
            <MenuItem icon={<FaWarehouse size={30}/>}> CFS </MenuItem>
            <MenuItem icon={<LuContainer size={30}/>}> Depot </MenuItem>
            <MenuItem icon={<FaTruckMoving size={30}/>}> Gate </MenuItem>
        </Menu>
        {/* <Menu className={styles.menu}>
            <MenuItem className={styles.menuItem} icon={<LuContainer size={24}/>}> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
        </Menu> */}
        </Sidebar>
        </div>
    );
}

export default AppSidebar;
