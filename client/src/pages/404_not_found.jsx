import image from 'assets/404.png'

const style = {
	height: "100vh",
	width: "100vw",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontWeight: 900,
};

const imageStyle = {
	minWidth: 200,
	width: 400,
}

function NotFound() {
	return (
		<div style={style} className="flex-column flex-md-row" >
			<img src={image} style={imageStyle} alt="page not found" />
			<h1 className="text-dark">Page Not Found</h1>
		</div>
	);
}

export default NotFound;
