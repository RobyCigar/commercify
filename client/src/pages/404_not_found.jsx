const style = {
	height: "100vh",
	width: "100vw",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontWeight: 900,
};

function NotFound() {
	return (
		<div style={style}>
			<h1 className="text-dark">404 Not Found</h1>
		</div>
	);
}

export default NotFound;
