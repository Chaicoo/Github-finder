import { UserProps } from "../types/user";

import Search from "../components/Search/Search";
import { useState } from "react";

const Home = () => {
	const [user, setUser] = useState<UserProps | null>(null);

	const loadUser = async (userName: string) => {
		const response = await fetch(
			`https://api.github.com/users/${userName}`
		);
		const data = await response.json();

		const {
			avatar_url,
			name,
			location,
			bio,
			followers,
			following,
			public_repos,
		} = data;

		const userData: UserProps = {
			avatar_url,
			name,
			location,
			bio,
			followers,
			following,
			public_repos,
		};

		setUser(userData);
	};

	return (
		<div>
			<Search loadUser={loadUser} />
			{user && (
				<div>
					<img src={user.avatar_url} alt={user.name} />
					<h2>{user.name}</h2>
					<p>{user.location}</p>
					<p>{user.bio}</p>
					<p>{user.followers} seguidores</p>
					<p>{user.following} seguindo</p>
					<p>{user.public_repos} repositórios públicos</p>

					<button>Ver repositórios</button>
				</div>
			)}
		</div>
	);
};

export default Home;
