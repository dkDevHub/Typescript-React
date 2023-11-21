import React from "react"
import cl from "./Modal.module.css"
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setModalActive } from "../../store/reducers/ModalStateSlice";
import FullGoods from "./FullGoods";

const Modal = () => {
    const dispatch = useAppDispatch()
    const {active, goods} = useAppSelector(state => state.modalReducer)
    const rootClassModal = active ? [cl.modal, cl.active] : [cl.modal]
    const rootClassModalContent = active ? [cl.modal_content, cl.active] : [cl.modal_content]

    if (goods == null) return <></>;
    

	return (
		<div className={rootClassModal.join(' ')} onClick={() => dispatch(setModalActive({active: false, goods:null}))}>
			<div
				className={rootClassModalContent.join(' ')}
				onClick={e => e.stopPropagation()}
			>
				<FullGoods goods={goods}/>
			</div>
		</div>
	)
}

export default Modal;
