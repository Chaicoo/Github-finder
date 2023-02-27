import { Outlet } from "react-router-dom";

import classStyle from "./App.module.css";
import { BsGithub } from "react-icons/bs";

function App() {
	return (
		<div className={classStyle.app}>
			<h1>
				<BsGithub />
				<span> Github finder</span>
			</h1>
			<Outlet />
		</div>
	);
}

export default App;
