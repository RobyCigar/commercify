import { Table, Button } from "reactstrap";
import styles from "./styles.module.css";
import trash from "assets/trash-alt.svg";

function ProductTable({ products, handleDelete }) {

	if(!products) {
		return (<div></div>)
	}

	return (
		<Table striped className="mx-auto m-5 container w-75">
			<thead>
				<tr className="d-flex">
					<th className="col-2">No</th>
					<th className={`col-4`}>Product Name</th>
					<th className={`col-4`}>Description</th>
					<th className={`col-2 text-center`}>Delete</th>
				</tr>
			</thead>
			<tbody>
				{products.map((val, index) => {
					return (
						<tr className="d-flex" key={val._id}>
							<th className="col-2" scope="row">
								{index + 1}
							</th>
							<td
								className={`col-4 font-weight-bold text-primary`}
							>
								{val.name}
							</td>
							<td className={`col-4`}>
								<p className={styles.desc}>{val.description}</p>
							</td>
							<td className={`col-2 d-flex`}>
								<Button
									onClick={() => handleDelete(val._id)}
									color="danger"
									className="mx-auto h-75"
								>
									<img
										src={trash}
										alt="delete"
										className={styles.trash}
									/>
								</Button>
							</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
}

export default ProductTable;
