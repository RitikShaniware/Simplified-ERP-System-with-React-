import {FC} from "react"
import {Navigate, Route, Routes} from "react-router-dom"

import {AdminLayout} from "./layouts/AdminLayout.tsx"

import Products from "./pages/Products.tsx"
import Orders from "./pages/Orders.tsx"
import Dashboard from "./pages/Dashboard.tsx"
import Calendar from "./pages/Calendar.tsx"


export const AppRouter: FC = () => {



	return (
		<Routes>
			<Route path="/" element={<AdminLayout/>}>
				<Route path="" element={<Navigate to="/dashboard"/>}/>
				<Route path="dashboard" element={<Dashboard/>}/>
				<Route path="products" element={<Products/>}/>
				<Route path="orders" element={<Orders/>}/>
				<Route path="calender" element={<Calendar/>}/>
			</Route>


		</Routes>
	)
}