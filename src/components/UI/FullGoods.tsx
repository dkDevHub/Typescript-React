import React, {FC} from "react"
import { IGoods } from "../../models/IGoods";
import cl from "./FullGoods.module.css"

interface FullGoodsProps {
    goods: IGoods
}

const FullGoods: FC<FullGoodsProps> = ({goods}) => {
    return (
			<div className={cl.goods}>
				<img width={"300px"} src={goods.image} className={cl.img}></img>
				<div className={cl.info}>
					<div className={cl.title}>{goods.title}</div>
					<div className={cl.desc}>{goods.description}</div>
					<div className={cl.category}>{goods.category}</div>
					<div className={cl.price}>{goods.price}$</div>
				</div>
			</div>
		)
};

export default FullGoods;
