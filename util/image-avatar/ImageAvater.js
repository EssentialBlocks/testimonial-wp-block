import PropTypes from "prop-types";
import "./style.scss";

const { useState } = wp.element;

const ImageAvater = ({ imageUrl, onDeleteImage }) => {
	const [hover, setHover] = useState(false);
	const [deleteHover, setDeleteHover] = useState(false);

	const deleteButtonStyle = {
		visibility: hover ? "visible" : "hidden",
		backgroundColor: deleteHover ? "white" : "#64666a",
		color: "#b4b5b7",
		position: "absolute",
		right: 34,
		fontSize: 16,
		alignSelf: "center",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 3,
		cursor: "pointer",
	};

	return (
		<div
			className="image-avatar"
			style={{ backgroundImage: `url(${imageUrl})` }}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<span
				className="image-avatar-delete dashicons dashicons-trash"
				onMouseEnter={() => setDeleteHover(true)}
				onMouseLeave={() => setDeleteHover(false)}
				style={deleteButtonStyle}
				onClick={() => onDeleteImage()}
			></span>
		</div>
	);
};

ImageAvater.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	onDeleteImage: PropTypes.func.isRequired,
};

export default ImageAvater;
