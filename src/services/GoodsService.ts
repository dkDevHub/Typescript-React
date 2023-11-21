import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import type { IGoods } from '../models/IGoods'

export const goodsAPI = createApi({
	reducerPath: 'goodsAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
	tagTypes: ['Goods'],
	endpoints: build => ({
		fetchGoods: build.query<IGoods[], number>({
			query: (limit: number) => ({
				url: `/products?limit=${limit}`,
			}),
			providesTags: result => ['Goods'],
		}),
	}),
})
