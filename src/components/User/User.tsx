import { UserProps } from "../../types/user";
import { RiMapPinLine } from "react-icons/ri";
import classStyle from "./User.module.css";

const User = ({
	name,
	avatar_url,
	location,
	bio,
	followers,
	following,
	public_repos,
}: UserProps) => {
	return (
		<div className={classStyle.user}>
			<img src={avatar_url} alt={name} />
			<h2>{name}</h2>
			{
				location && (
					<span>
						<RiMapPinLine />
						{location}
					</span>
				)
			}
			<p>{bio}</p>
			<p>
				{followers} seguidores | {following} seguindo
			</p>
			<p>{public_repos} repositórios públicos</p>
		</div>
	);
};

export default User;
