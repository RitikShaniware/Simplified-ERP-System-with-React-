import {ActionIcon, AppShell, Burger, Button, Group, Image, ScrollArea, Title} from "@mantine/core"
import {Link, Outlet, useNavigate} from "react-router-dom"
import {
	IconAdjustments,
	IconCalendarStats,
	IconFileAnalytics,
	IconGauge,
	IconLock,
	IconLogout,
	IconNotes,
	IconPresentationAnalytics,
} from "@tabler/icons-react"
import classes from "./AdminLayout.module.css"
import {useDisclosure} from "@mantine/hooks"

// const linksss = [
// 	{label: "Dashboard", icon: IconGauge},
// 	{
// 		label: "Market news",
//
// 		icon: IconNotes,
// 		initiallyOpened: true,
// 		links: [
// 			{label: "Overview", link: "/"},
// 			{label: "Forecasts", link: "/"},
// 			{label: "Outlook", link: "/"},
// 			{label: "Real time", link: "/"},
// 		],
// 	},
// 	{
// 		label: "Releases",
// 		icon: IconCalendarStats,
// 		links: [
// 			{label: "Upcoming releases", link: "/"},
// 			{label: "Previous releases", link: "/"},
// 			{label: "Releases schedule", link: "/"},
// 		],
// 	},
// 	{label: "Analytics", icon: IconPresentationAnalytics},
// 	{label: "Contracts", icon: IconFileAnalytics},
// 	{label: "Settings", icon: IconAdjustments},
// 	{
// 		label: "Security",
// 		icon: IconLock,
// 		links: [
// 			{label: "Enable 2FA", link: "/"},
// 			{label: "Change password", link: "/"},
// 			{label: "Recovery codes", link: "/"},
// 		],
// 	},
// ]

export function AdminLayout() {
	const navigate = useNavigate()

	const[opened, {open: setOpen, close: setClose}] = useDisclosure()
	// useEffect(() => {
	// 	if (userRole !== 'Admin') navigate('/admin')
	// }, [userRole])

	const hideNavbar = () => {
		setOpen()

	}

	return (


		<AppShell
			header={{height: 60}}
			navbar={{width: 300, breakpoint: "sm", collapsed: {mobile: !opened}}}
			padding="md"
		>
			<AppShell.Header>
				<Group h="100%" px="md" justify="space-between">
					<div className="flex flex-row items-center align-middle gap-2">

						<Burger opened={opened} onClick={ opened ? setClose: setOpen} hiddenFrom="sm" size="sm"/>

						<Title order={3} >ERP Systems</Title>

					</div>

				</Group>
			</AppShell.Header>
			<AppShell.Navbar p="md">
				<nav className="px-2 ">


					<ScrollArea className={classes.links}>
						<div className={classes.linksInner}>
							<Button onClick={hideNavbar} component={Link} to="/dashboard" fullWidth
							        variant="light">Dashboard</Button>
							<Button onClick={hideNavbar} component={Link} to="/products" fullWidth
							        variant="light">Products</Button>

							<Button onClick={hideNavbar}
							        component={Link} to="/orders" fullWidth
							        variant="light">Orders</Button>
							<Button onClick={hideNavbar}
							        component={Link} to="/calender" fullWidth
							        variant="light">Calender</Button>

						</div>
					</ScrollArea>
				</nav>

			</AppShell.Navbar>
			<AppShell.Main><Outlet/></AppShell.Main>
		</AppShell>
	)
}
