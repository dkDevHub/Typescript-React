import React, {FC} from "react"
import { IGoods } from "../../models/IGoods";
import Goods from "./Goods";

interface GoodsListProps {
	goodsList: IGoods[];
}

const GoodsList: FC<GoodsListProps> = ({ goodsList }) => {
	return (
		<>
			{goodsList.map((goods) => 
				<Goods key={goods.id} goods={goods}/>
			)}
		</>
	)
}

export default GoodsList;
