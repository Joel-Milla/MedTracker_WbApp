// External components
import { NavLink, useLocation  } from 'react-router-dom';
// ************** MUI ************
// External components
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
// MUI Icons
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
// ************** MUI ************
// Logo
import MedTrackerIcon from "../assets/logo_medtracker.svg";

function NavigationMenu() {
    // The location is used to know which is the current path. this works to show that 'Pacientes' is selected on the root path.
    const location = useLocation(); // Hook to get current location
    const isSelected = location.pathname === '/' || location.pathname === '/pacientes';

    // Width and type of display to be applied to both the drawer and the box depending on the size of the screen
    // xs-0px, sm-600px, md-900px, lg-1200px, xl-1536px 
    const responsiveWidth = { md: 180, lg: 250 }
    const responsiveDisplay = { xs: 'none', sm: 'none', md: 'block' } // From medium to greater, show it as a block

    // Styles to apply to the Draw container, to the selected menus icons of the selected menus.
    const drawerStyles = {
        '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: responsiveWidth,
            bgcolor: '#E0EFEF'
        }
    };
    const selectedMenuStyles = 'bg-persian-green-500 text-white w-full';

    // Drawer list contains the view of the logo and all the navigations titles of the dashboard
    const DrawerList = (
        <>
            {/* The div contains the logo and the title of the navigation bar. Use flex to align Items center and to align image. Show logo together when greater than 1280px */}
            <div className='flex flex-col justify-center items-center gap-4 p-2 xl:flex-row'>
                <img src={MedTrackerIcon} alt="MedTracker logo" className='w-1/3 xl:w-1/5' />
                <h2 className='text-2xl font-bold'>MedTracker</h2>
            </div>
            <Divider />
            {/* A list containing the titles, and its icons as a list item */}
            <List>
                <ListItem key={"pacientes"} disablePadding>
                    {/* Use navlink to redirect the user when clicking the button and apply style when the user is on the redirected path. Use w-full to manually expand the buttons to occupy full width of parent element. */}
                    <NavLink
                        to='pacientes'
                        className={({ isActive }) => `${(isActive || isSelected) ? selectedMenuStyles : 'w-full'}`} // set the width of the link to occupy 100% of the parent
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <PeopleAltIcon />
                            </ListItemIcon>
                            <ListItemText primary="Pacientes" />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem key={"dashboard"} disablePadding>
                    <NavLink
                        to='dashboard'
                        className={({ isActive }) => `${isActive ? selectedMenuStyles : 'w-full'}`}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <BarChartIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem key={"notificaciones"} disablePadding>
                    <NavLink
                        to='notificaciones'
                        className={({ isActive }) => `${isActive ? selectedMenuStyles : 'w-full'}`}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <NotificationsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Notificaciones" />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem key={"perfil"} disablePadding>
                    <NavLink
                        to='perfil'
                        className={({ isActive }) => `${isActive ? selectedMenuStyles : 'w-full'}`}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Perfil" />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem key={"ajustes"} disablePadding>
                    <NavLink
                        to='ajustes'
                        className={({ isActive }) => `${isActive ? selectedMenuStyles : 'w-full'}`}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Ajustes" />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
            </List>
            <Divider />
        </>
    );

    return (
        <Box
            sx={{ zIndex: '40' }} // Use a z index to show the modal view of the chart above the navigation menu.
        >
            {/* Inside this box, show a drawer which is a wrapper that serves as a navBar to span the entire height and to be fixed. Inside the drawer contains the view that shows the logo and the buttons */}
            <Box
                // Accessibility
                component="nav"
                // sx serves to change the style of the box
                sx={{
                    width: responsiveWidth,
                    flexShrink: { sm: 0 }
                }}
                aria-label="mailbox folders"
            >
                <Drawer
                    // Apply drawerStyles style defined at the top of component and change the display based the size of the screen
                    variant="permanent"
                    sx={{
                        ...drawerStyles,
                        display: responsiveDisplay,
                    }}
                    open
                >
                    {DrawerList}
                </Drawer>
            </Box>
        </Box>
    );
}

export default NavigationMenu;