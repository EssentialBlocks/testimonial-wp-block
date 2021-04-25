/**
 * WordPress dependencies
 */
const { RichText } = wp.blockEditor;

/**
 * Internal dependencies
 */
import {
	DEFAULT_BACKGROUND,
	DEFAULT_SHADOW_COLOR,
	DEFAULT_NAME_SIZE,
	DEFAULT_NAME_COLOR,
	DEFAULT_COMPANY_SIZE,
	DEFAULT_COMPANY_COLOR,
	DEFAULT_DESCRIPTION_SIZE,
	DEFAULT_DESCRIPTION_COLOR,
	DEFAULT_QUOTE_SIZE,
	DEFAULT_QUOTE_COLOR,
} from "./constants";

const Save = ({ attributes }) => {
	const {
		avatarInline,
		userName,
		companyName,
		description
	} = attributes;

	return (
		<div className="eb-testimonial-wrapper">
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
							className="username-one"
							value={userName}
						/>

						<RichText.Content
							tagName="p"
							className="company-one"
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
						className="description-one"
						value={description}
					/>
				</div>
			</div>
		</div>
	);
};

export default Save;
