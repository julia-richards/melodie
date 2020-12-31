import { useHistory } from "react-router-dom";

const Likes = (props) => {
	const [value, setValue] = useState("");
	const history = useHistory();

	const handleSearch = (e) => {
		e.preventDefault();
		history.push(`/search/${value}`);
	};

	return (
		<button
			className="button"
			onClick={() => dispatch(ticketActions.addTicket(eventId))}
		>
			Get Ticket
		</button>
	);
};

export default Likes;
