import React, {FC} from "react"
import { IGoods } from "../../models/IGoods";
import cl from "./Goods.module.css"
import { useAppDispatch } from "../../hooks/redux";
import { setModalActive } from "../../store/reducers/ModalStateSlice";

interface GoodsProps {
    goods: IGoods
}

const Goods: FC<GoodsProps> = ({goods}) => {
    const dispatch = useAppDispatch()
    
    return (
			<div
				className={cl.goods}
				onClick={() => dispatch(setModalActive({active: true, goods}))}
			>
				<div
					style={{ backgroundImage: `url(${goods.image})` }}
					className={cl.img}
				></div>
				<div className={cl.info}>
					<div className={cl.price}>{goods.price}$</div>
					<div className={cl.rate}>
						{goods.rating.rate}
						<span className='material-symbols-outlined'>star</span>
					</div>
				</div>
			</div>
		)
};

export default Goods;
