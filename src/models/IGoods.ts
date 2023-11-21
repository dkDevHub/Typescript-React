interface IRating {
	rate: number
	count: number
}

export interface IGoods {
	id: number
	title: string
	description: string
	price: number
	category: string
	image: string
	rating: IRating
}
