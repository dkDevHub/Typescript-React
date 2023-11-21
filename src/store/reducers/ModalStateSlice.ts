import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGoods } from '../../models/IGoods'

interface ModalState {
    active: boolean
    goods: IGoods | null
}

const initialState: ModalState = {
	active: false,
    goods: null
}

export const ModalStateSlice = createSlice({
	name: 'modal_state',
	initialState,
	reducers: {
		setModalActive(state, action: PayloadAction<ModalState>) {
			state.active = action.payload.active
			state.goods = action.payload.goods
		},
	},
})

export default ModalStateSlice.reducer
export const { setModalActive } = ModalStateSlice.actions
