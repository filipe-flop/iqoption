import { Sidebar, Menu, MenuItem, useProSidebar  } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useTheme } from '../../pages/ThemeContext';

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
    const { isDarkTheme } = useTheme();

    // const isActive = (path) => {
    //     return location.pathname === path;
    // };

    const handleItemClick = (path) => {
        navigate(path);
    };

    const sidebarBackground = isDarkTheme ? '#2a3148' : '#F96302';

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
                            color: isDarkTheme ? "#8f9199" : "white",
                        "&:hover": {
                            backgroundColor: isDarkTheme ? "#394260" : "#FD8535",
                            color: isDarkTheme ? "white" : "#8f9199",
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
