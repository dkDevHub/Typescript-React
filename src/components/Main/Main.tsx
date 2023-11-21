import React, { useState } from 'react'
import cl from "./Main.module.css"
import GoodsList from "../Goods/GoodsList";
import { goodsAPI } from "../../services/GoodsService";
import Modal from '../UI/Modal';

const Main = () => {
    const { data: goodsList, isLoading, error } = goodsAPI.useFetchGoodsQuery(12)

    if (isLoading || !goodsList) return (
        <>Loading...</>
    )

    return (
			<div className={cl.main}>
				<div className={cl.content}>
					<GoodsList goodsList={goodsList} />
				</div>
				<Modal/>
			</div>
		)
};

export default Main;
