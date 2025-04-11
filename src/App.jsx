import { Link, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Chiroq from './pages/Chiroq'
import { useSelector } from 'react-redux'

function App() {
  const isDarkMode = useSelector(state => state.darkMode)

	return (
		<div
			className='min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center gap-10 px-4'
			style={{
				backgroundImage:
					"url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1470&q=80')",
			}}
		>
			<h1 className={`text-4xl md:text-5xl ${isDarkMode ? "text-white" : "text-black"} font-bold drop-shadow-lg`}>
				Welcome to My Website
			</h1>

			<div className='flex gap-6'>
				<Link
					to='/about'
					className={`px-6 py-3  text-gray-800 ${isDarkMode ? "text-white bg-black" : "text-black bg-white"} font-semibold rounded-xl shadow-md hover:bg-gray-100 transition duration-300`}
				>
					ABOUT
				</Link>
        <Link
					to='/chiroq'
					className={`px-6 py-3 bg-white text-gray-800 font-semibold rounded-xl ${isDarkMode ? "text-white bg-black" : "text-black bg-white"} shadow-md hover:bg-gray-100 transition duration-300`}
				>
					MAIN
				</Link>
			</div>

			<Routes>
				<Route path='/about' element={<About />} />
				<Route path='/chiroq' element={<Chiroq />} />
			</Routes>
		</div>
	)
}

export default App
