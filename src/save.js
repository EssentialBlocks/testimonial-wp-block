/**
 * WordPress dependencies
 */
const { RichText } = wp.blockEditor;

const Save = ({ attributes }) => {
	const {
		blockId,
		avatarInline,
		userName,
		companyName,
		description
	} = attributes;

	return (
		<div className={`eb-testimonial-wrapper ${blockId}`} data-id={blockId}>
			<div className="eb-testimonial-container">
				<div
					className={`eb-avatar-container ${
						avatarInline ? "avatar-inline" : "avatar-basic"
					} `}
				>
					<div className="image-container">
						<div className="eb-avatar-style" />
					</div>
					<div className="eb-userinfo-container">
						<RichText.Content
							tagName="p"
							className="eb-testimonial-username"
							value={userName}
						/>

						<RichText.Content
							tagName="p"
							className="eb-testimonial-company"
							value={companyName}
						/>
					</div>
				</div>

				<div className="eb-description-container">
					<div
						className="fas fa-quote-left eb-testimonial-quote-style"
					/>
					<RichText.Content
						tagName="p"
						className="eb-testimonial-description"
						value={description}
					/>
				</div>
			</div>
		</div>
	);
};

export default Save;
