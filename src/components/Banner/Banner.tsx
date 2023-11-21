import React, {FC} from "react"
import cl from './Banner.module.css'

interface BannerProps {
	text: string
}

const Banner: FC<BannerProps> = ({text}) => {
	return (
		<div className={cl.banner}>
			<span className={cl.text}>{text}</span>
		</div>
	)
}

export default Banner;
