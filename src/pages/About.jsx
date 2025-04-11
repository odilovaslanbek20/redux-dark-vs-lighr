import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function About() {
	const dispatch = useDispatch()
	const nameList = useSelector(state => state.name)
	const isDarkMode = useSelector(state => state.darkMode)
	const [name, setName] = useState('')
	const [error, setError] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()
		if (name.trim() === '') {
			setError(true)
			return
		} else {
			setError(false)
		}
		dispatch({ type: 'SET_NAME', payload: name })
		setName('')
	}

	return (
		<div className={`flex items-center justify-center  px-4`}>
			<div className={`w-full max-w-md ${!isDarkMode ? 'text-white' : 'text-gray-800'}`}>
				<form
					onSubmit={handleSubmit}
					className={`p-8 rounded-2xl shadow-2xl space-y-6 border ${!isDarkMode ? 'bg-gray-900 border-gray-300' : 'bg-white'} `}
				>
					<h2 className={`text-3xl font-bold text-center ${!isDarkMode ? 'text-white' : 'text-gray-800'}`}>
						👋 Join Us
					</h2>
					<p className={`text-center text-sm ${!isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
						Be part of our awesome community
					</p>

					<input
						value={name}
						onChange={e => setName(e.target.value)}
						type='text'
						placeholder='Full Name'
						className={`w-full px-4 py-3 rounded-xl border ${!isDarkMode ? 'border-gray-600 text-gray-300' : 'border-gray-300 text-gray-700'} focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:italic transition duration-300`}
					/>

					<button
						type='submit'
						className={`w-full py-3 rounded-xl font-semibold hover:shadow-md transition duration-300 ${!isDarkMode ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
					>
						Submit
					</button>
				</form>

				{nameList.length > 0 && (
					<div className={`mt-6 space-y-2 p-4 rounded-xl shadow-md border ${!isDarkMode ? 'bg-gray-800 border-gray-300' : 'bg-white'}`}>
						<h3 className={`text-lg font-semibold  ${!isDarkMode ? 'text-white' : 'text-gray-700'}`}>
							🙌 A'zolar ro‘yxati:
						</h3>
						<ul className='list-disc list-inside text-gray-600'>
							{nameList.map((item, index) => (
								<li key={index} className={`${!isDarkMode ? "text-white" : "text-gray-700"}`}>{item}</li>
							))}
						</ul>
					</div>
				)}

				{error && (
					<div className='mt-6 text-center text-lg font-medium bg-red-200 p-4 py-3 rounded-xl shadow-lg text-red-800'>
						<p className='font-semibold'>Siz ismingizni kiritmadingiz 🚫</p>
						<p className='text-sm'>
							Iltimos, ismni kiriting va qayta yuboring.
						</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default About
