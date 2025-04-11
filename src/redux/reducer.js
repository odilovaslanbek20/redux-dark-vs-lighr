const initialState = {
	name: [],
	darkMode: false,
}

export const nameReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_NAME':
			return {
				...state,
				name: [...state.name, action.payload],
			}
		case 'DARK':
			return {
				name: state.name,
				darkMode: false,
			}
		case 'LIGHT':
			return {
				name: state.name,
				darkMode: true,
			}
		case 'TOGGLE':
			return {
				name: state.name,
				darkMode: !state.darkMode,
			}

		default:
			return state
	}
}
