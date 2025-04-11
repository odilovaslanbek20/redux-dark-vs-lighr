import { useDispatch, useSelector } from 'react-redux'

function Chiroq() {
	const dispatch = useDispatch()
	const isDarkMode = useSelector(state => state.darkMode)

	return (
		<>
			<section className='w-100 h-20 border rounded-xl p-2'>
				<div
					className={`w-full h-full border rounded-[8px] ${
						isDarkMode ? 'bg-[#fff]' : 'bg-[#000000]'
					} flex items-center justify-center`}
				>
					<p
						className={` ${
							isDarkMode ? 'text-black' : 'text-white'
						} text-xl font-semibold`}
					>
						Chiroq{' '}
						<span className='text-blue-500'>
							{isDarkMode ? 'Yoqildi' : "O'chirildi"}
						</span>{' '}
						💡
					</p>
				</div>
			</section>
			<div className='flex items-center gap-2'>
				<p
					onClick={() => dispatch({ type: 'LIGHT' })}
					className={` ${
						!isDarkMode ? 'text-white bg-black' : 'text-black bg-white'
					} px-3.5 py-1  rounded cursor-pointer`}
				>
					Light
				</p>
				<p
					onClick={() => dispatch({ type: 'TOGGLE' })}
					className={` ${
						!isDarkMode ? 'text-white bg-black' : 'text-black bg-white'
					} px-3.5 py-1  rounded cursor-pointer`}
				>
					Toggle
				</p>
				<p
					onClick={() => dispatch({ type: 'DARK' })}
					className={` ${
						!isDarkMode ? 'text-white bg-black' : 'text-black bg-white'
					} px-3.5 py-1 rounded cursor-pointer`}
				>
					Dark
				</p>
			</div>
		</>
	)
}

export default Chiroq
