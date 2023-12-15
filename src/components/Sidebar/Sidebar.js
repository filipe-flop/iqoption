import { Sidebar, Menu, MenuItem, useProSidebar  } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import styles from './Sidebar.module.css';

import { Sling as Hamburger } from 'hamburger-react';
import { RiShipFill } from "react-icons/ri";
import { LuContainer } from "react-icons/lu";
import { GiCargoCrate } from "react-icons/gi";
import { FaWarehouse } from "react-icons/fa";
import { FaTruckMoving } from "react-icons/fa";

export const AppSidebar = () => {

    const { collapseSidebar } = useProSidebar();
    // const location = useLocation();
    const navigate = useNavigate();

    // const isActive = (path) => {
    //     return location.pathname === path;
    // };

    const handleItemClick = (path) => {
        navigate(path);
    };

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
                    button: ({ level, disabled }) => {
                    if (level === 0) {
                        return {
                        color: disabled ? "#eee" : "#8f9199",
                        // backgroundColor: active ? "#fff" : undefined,
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

            <MenuItem 
                icon={<RiShipFill size={30} />} 
                onClick={() => handleItemClick('/navio')}
            >
                <FormattedMessage id="sidebarNavio" /> 
            </MenuItem>

            <MenuItem 
                icon={<GiCargoCrate size={30} />} 
                onClick={() => handleItemClick('/patio')}
            > 
                <FormattedMessage id="sidebarPatio" /> 
            </MenuItem>

            <MenuItem 
                icon={<FaWarehouse size={30}/>}
            >
                <FormattedMessage id="sidebarCFS" /> 
            </MenuItem>

            <MenuItem 
                icon={<LuContainer size={30}/>}
            >
                <FormattedMessage id="sidebarDepot" />  
            </MenuItem>

            <MenuItem 
                icon={<FaTruckMoving size={30}/>}
            >
                <FormattedMessage id="sidebarGate" /> 
            </MenuItem>

        </Menu>
        </Sidebar>
        </div>
    );
}

export default AppSidebar;
