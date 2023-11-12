import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

export default function Folder({ folder }) {
	return (
		<Link
			to={{
				pathname: `/folder/${folder.id}`,
			}}
			state={{ folder: folder }}
		>
			<Button variant="outline-dark" className="text-truncate w-100">
				<FontAwesomeIcon icon={faFolder} className="mx-1" />
				{folder.name}
			</Button>
		</Link>
	);
}
