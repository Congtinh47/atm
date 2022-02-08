import CardCustom from "../../components/cardCustom";
import Navbar from "../navbar";
import { AtmShowPage } from "./styles";

function AtmPage() {
	// useEffect(() => {
	// 	(async () => {
	// 		const resp = await atmService.getAtm();
	// 		console.log(resp);
	// 	})();
	// }, []);
	return (
		<div>
			<Navbar />
			<AtmShowPage>
				<div className="atm-group">
					<CardCustom />
					<CardCustom />
					<CardCustom />
				</div>
				<div className="user-queue">user queue</div>
			</AtmShowPage>
		</div>
	);
}

export default AtmPage;
