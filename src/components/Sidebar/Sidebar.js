import { Sidebar, Menu, MenuItem, useProSidebar  } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useTheme } from '../../context/ThemeContext';

import styles from './Sidebar.module.css';

import { Sling as Hamburger } from 'hamburger-react';
import { RiShipFill } from "react-icons/ri";
import { LuContainer } from "react-icons/lu";
import { GiCargoCrate } from "react-icons/gi";
import { FaWarehouse } from "react-icons/fa";
import { FaTruckMoving } from "react-icons/fa";
import { useState } from 'react';

export const AppSidebar = () => {

    const { collapseSidebar } = useProSidebar();
    // const location = useLocation();
    const navigate = useNavigate();
    const { isDarkTheme } = useTheme();
    const [active, setActive] = useState(false);

    // const isActive = (path) => {
    //     return location.pathname === path;
    // };

    const handleItemClick = (path) => {
        navigate(path);
        setActive(true);
        console.log(active);
    };

    // const sidebarBackground = isDarkTheme ? '#2a3148' : '#8f9199';
    const sidebarBackground = isDarkTheme ? '#2a3148' : 'white';

    return (
        <div>
        <Sidebar 
            className={`${styles.sidebar} no-border-right`}
            defaultCollapsed='true'
            backgroundColor={sidebarBackground}
            width='170px'
        >
            <Menu
                menuItemStyles={{
                    button: ({ level }) => {
                    if (level === 0) {
                        return {
                            // color: isDarkTheme ? "#8f9199" : "white",
                            color: "#8f9199",
                        "&:hover": {
                            backgroundColor: isDarkTheme ? "#394260" : "#e2e2e2",
                            color: isDarkTheme ? "white" : "#F96302",
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
