import { useRoutes } from 'react-router'
import Header from './components/Header/Header'
import Courses from './views/Courses/Courses'
import Portfolio2 from './views/Portfolio2/Portfolio'
import Skills from './views/Skills/Skills'

const routes = [
	{ path: '/', element: <Portfolio2 /> },
	{ path: '/skills', element: <Skills /> },
	{ path: '/courses', element: <Courses /> }
]

const App = () => {
	const element = useRoutes(routes)
	return (
		<div className="bg-gray-200 h-screen overflow-hidden">
			<Header />
			<main className="overflow-hidden bg-gray-200 ">{element}</main>
		</div>
	)
}

export default App
