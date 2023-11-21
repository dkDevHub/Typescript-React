import { combineReducers, configureStore } from '@reduxjs/toolkit'
import modalReducer from "./reducers/ModalStateSlice"
import { goodsAPI } from '../services/GoodsService'

const rootReducer = combineReducers({
	modalReducer,
	[goodsAPI.reducerPath]: goodsAPI.reducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(goodsAPI.middleware),
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
