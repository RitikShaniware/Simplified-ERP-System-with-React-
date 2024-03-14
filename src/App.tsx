import {MantineProvider, ColorSchemeScript} from '@mantine/core'
import {AppRouter} from './appRouter.tsx'
import {BrowserRouter} from 'react-router-dom'
import {Notifications} from '@mantine/notifications'


function App() {
	
	return (
		<>
			<BrowserRouter>

					
					<ColorSchemeScript defaultColorScheme="auto"/>
					<MantineProvider defaultColorScheme="auto">
						<Notifications position="top-center" zIndex={9000}/>
						
						<AppRouter/>
					
					
					</MantineProvider>

			
			</BrowserRouter>
		</>
	)
}

export default App