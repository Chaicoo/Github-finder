type SearchProps = {
	loadUser: (userName: string) => Promise<void>;
}

import { BsSearch } from "react-icons/bs";
import { useState, KeyboardEvent } from "react";

import classStyle from "./Search.module.css";

const Search = ({loadUser}: SearchProps) => {
	const [userName, setUserName] = useState("");

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === "Enter") {
			loadUser(userName);
		}
	}

	return (
		<div className={classStyle.search}>
			<h2>Busque um usuário(a):</h2>
			<p>E veja as principais informações do seu perfil</p>
			<div className={classStyle.searchContainer}>
				<input 
					type="text" 
					placeholder="Digite o nome do usuário(a)" 
					onChange={(event) => setUserName(event.target.value)}
					onKeyDown={handleKeyDown}
				/>
				<button
					onClick={() => loadUser(userName)}
				>
					<BsSearch />
				</button>
			</div>
		</div>
	);
};

export default Search;
