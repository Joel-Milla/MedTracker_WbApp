import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import MenuIcon from '@mui/icons-material/Menu';
import Icon from '@mui/material/Icon';
import InboxIcon from '@mui/icons-material/Inbox';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';

import './NavigationMenu.css';

const drawerWidth = 240;

interface Props {
	children?: React.ReactNode;
	appBarVisibleOnMobile?: 'block' | 'none';
	appBarVisibleOnDesktop: 'block' | 'none';
	title: string;
	selectedOption: 'Datos' | 'Análisis' | 'Notificaciones' | 'Perfil' | 'Ajustes';
}

function NavigationMenu(props: Props) {
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [isClosing, setIsClosing] = React.useState(false);

	const handleDrawerClose = () => {
		setIsClosing(true);
		setMobileOpen(false);
	};

	const handleDrawerTransitionEnd = () => {
		setIsClosing(false);
	};

	const handleDrawerToggle = () => {
		if (!isClosing) {
			setMobileOpen(!mobileOpen);
		}
	};

	const drawerItems = [
		{ 'title': 'Datos', 'icon': InboxIcon, 'action': () => { } },
		{ 'title': 'Análisis', 'icon': BarChartIcon, 'action': () => { } },
		{ 'title': 'Notificaciones', 'icon': NotificationsIcon, 'action': () => { } },
		{ 'title': 'Perfil', 'icon': AccountCircleIcon, 'action': () => { } },
		{ 'title': 'Ajustes', 'icon': SettingsIcon, 'action': () => { } },
	];

	const drawer = (
		<div>
			<Toolbar className='bg-primary'>
				<Icon component={MedicalServicesIcon} className='icon-white' />
				<Typography variant="h6" noWrap component="div" className='text-white'>
					MedTracker
				</Typography>
			</Toolbar>
			<Divider />
			<List>
				{drawerItems.map((item, index) => (
					<ListItem key={item.title} disablePadding>
						<ListItemButton selected={item.title === props.selectedOption}>
							<ListItemIcon>
								{<item.icon />}
							</ListItemIcon>
							<ListItemText primary={item.title} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
		</div>
	);

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
					display: { xs: props.appBarVisibleOnMobile, sm: props.appBarVisibleOnDesktop },
				}}
				className='bg-primary'
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						{props.title}
					</Typography>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{
					width: { sm: drawerWidth },
					flexShrink: { sm: 0 }
				}}
				aria-label="mailbox folders"
			>

				<Drawer
					variant="temporary"
					open={mobileOpen}
					onTransitionEnd={handleDrawerTransitionEnd}
					onClose={handleDrawerClose}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{ flexGrow: 1, p: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
			>
				<Toolbar
					sx={{
						display: { xs: props.appBarVisibleOnMobile, sm: props.appBarVisibleOnDesktop },
					}}
				/>
				{props.children}
			</Box>

		</Box>
	);
}

export default NavigationMenu;