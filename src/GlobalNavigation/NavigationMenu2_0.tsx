// External components
import { NavLink } from 'react-router-dom';
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

function NavigationMenu2_0() {
    // Styles to apply to the Draw container, to the selected menus icons of the selected menus.
    const drawerStyles = {
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250, bgcolor: '#E0EFEF' }
    };
    const selectedMenuStyles = 'bg-persian-green-500 text-white w-full';

    // Drawer list contains the view of the logo and all the navigations titles of the dashboard
    const DrawerList = (
        <>
            {/* The div contains the logo and the title of the navigation bar. Use flex to align Items center and to align image */}
            <div className='flex justify-center items-center gap-4 p-5'>
                <img src={MedTrackerIcon} alt="MedTracker logo" className='w-1/3'/>
                <h2 className='text-2xl font-bold'>MedTracker</h2>
            </div>
            <Divider />
            {/* A list containing the titles, and its icons as a list item */}
            <List>
                <ListItem key={"pacientes"} disablePadding>
                    {/* Use navlink to redirect the user when clicking the button and apply style when the user is on the redirected path. Use w-full to manually expand the buttons to occupy full width of parent element. */}
                    <NavLink
                        to='pacientes'
                        className={({ isActive }) => `${isActive ? selectedMenuStyles : 'w-full'}`} // set the width of the link to occupy 100% of the parent
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <PeopleAltIcon/>
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
        <Box>
            {/* Inside this box, show a drawer which is a wrapper that serves as a navBar to span the entire height and to be fixed. Inside the drawer contains the view that shows the logo and the buttons */}
            <Box
                // Accessibility
                component="nav"
                // sx serves to change the style of the box
                sx={{
                    width: { sm: 250 },
                    flexShrink: { sm: 0 }
                }}
                aria-label="mailbox folders"
            >
                <Drawer
                    // Apply drawerStyles style defined at the top of component and change the display based the size of the screen
                    variant="permanent"
                    sx={{
                        ...drawerStyles,
                        display: { xs: 'none', sm: 'block' },
                    }}
                    open
                >
                    {DrawerList}
                </Drawer>
            </Box>
        </Box>
    );
}

export default NavigationMenu2_0;