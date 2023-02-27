type SearchProps = {
	loadUser: (userName: string) => Promise<void>;
}

import { BsSearch } from "react-icons/bs";
import { useState } from "react";

const Search = ({loadUser}: SearchProps) => {
	const [userName, setUserName] = useState("");

	return (
		<div>
			<h2>Busque um usuário(a):</h2>
			<p>E conheça seu repositórios mais bem avaliados</p>
			<div>
				<input 
					type="text" 
					placeholder="Digite o nome do usuário(a)" 
					onChange={(e) => setUserName(e.target.value)}
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
