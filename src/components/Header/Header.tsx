import React from "react"
import cl from "./Header.module.css"

const Header = () => {
    return (
		<header className={cl.header}>
			<div className={cl.logo}>Logo</div>
			<div className={cl.btn}>
				<div className={cl.login}>Login</div>
			</div>
		</header>
	)
};

export default Header;
