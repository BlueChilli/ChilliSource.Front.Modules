/** Libraries */
import React from 'react';
import DropZone from 'react-dropzone';
import { Field } from 'redux-form';

/** Components */
import FormElementWrapper from '../../helpers/FormElementWrapper';
import Error from '../../General/Error';

/** Class RenderDropzone */
class RenderDropzone extends React.Component {
	onDrop = acceptedFiles => {
		const {
			input: { onChange },
		} = this.props;

		if (acceptedFiles.length > 0) {
			onChange(acceptedFiles[0]);
		}
	};

	resetDropZone = () => {
		this.props.input.onChange(null);
	};

	checkEXIFDataForOrientation = () => {
		const imageElement = document.getElementById('file-preview')[0];
		EXIF.getData(imageElement, () => {
			switch (parseInt(EXIF.getTag(this, 'Orientation'))) {
				case 2: {
					imageElement.classList.add('flip');
					break;
				}

				case 3: {
					imageElement.classList.add('rotate-180');
					break;
				}

				case 4: {
					imageElement.classList.add('flip-and-rotate-180');
					break;
				}

				case 5: {
					imageElement.classList.add('flip-and-rotate-270');
					break;
				}

				case 6: {
					imageElement.classList.add('rotate-90');
					break;
				}

				case 7: {
					imageElement.classList.add('flip-and-rotate-90');
					break;
				}

				case 8: {
					imageElement.classList.add('rotate-270');
					break;
				}
			}
		});
	};

	render() {
		const {
			input: { name, value },
			meta: { error, pristine },
			placeholder = 'Upload a photo',
			label,
			helperText,
			helperTextPosition = 'top',
			className,
			disabled = false,
			multiple = false,
		} = this.props;

		const invalid = !pristine && error;

		return (
			<FormElementWrapper className={className} _id="fe-textfield">
				{/* Label */}
				{label && (
					<div className="form-label">
						<label>{label}</label>
					</div>
				)}

				{/* Helper Text */}
				{helperText &&
					helperTextPosition === 'top' && (
						<div className="form-helper">
							<p className="helper-text top">{helperText}</p>
						</div>
					)}

				<div className={`form-input ${invalid && 'error'}`}>
					{/* Input */}
					{typeof value !== 'object' &&
						value.length === 0 && (
							<DropZone
								name={name}
								className="dropzone"
								onDrop={this.onDrop}
								multiple={multiple}
								disabled={disabled}
								accept="image/jpeg, image/png, image/jpg">
								<div className="dropzone-placeholder flex col center">
									<svg
										width="46px"
										height="46px"
										viewBox="0 0 46 46"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink">
										<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
											<g id="camera">
												<circle id="Oval-2" cx="23" cy="23" r="23" />
												<g id="Page-1" transform="translate(10.000000, 13.000000)" fill="#FFFFFF">
													<path
														d="M13,8.31168831 C11.13632,8.31168831 9.62,9.82649351 9.62,11.6883117 C9.62,13.5501299 11.13632,15.0649351 13,15.0649351 C14.86368,15.0649351 16.38,13.5501299 16.38,11.6883117 C16.38,9.82649351 14.86368,8.31168831 13,8.31168831"
														id="Fill-1"
													/>
													<path
														d="M13,17.6623377 C9.70242,17.6623377 7.02,14.9823377 7.02,11.6883117 C7.02,8.39428571 9.70242,5.71428571 13,5.71428571 C16.29758,5.71428571 18.98,8.39428571 18.98,11.6883117 C18.98,14.9823377 16.29758,17.6623377 13,17.6623377 M22.62,3.37662338 L18.72,3.37662338 C18.72,1.51168831 17.2068,0 15.34,0 L10.66,0 C8.7932,0 7.28,1.51168831 7.28,3.37662338 L3.38,3.37662338 C1.5132,3.37662338 0,4.88831169 0,6.75324675 L0,16.6233766 C0,18.4883117 1.5132,20 3.38,20 L22.62,20 C24.4868,20 26,18.4883117 26,16.6233766 L26,6.75324675 C26,4.88831169 24.4868,3.37662338 22.62,3.37662338"
														id="Fill-3"
													/>
												</g>
											</g>
										</g>
									</svg>

									<p>{placeholder}</p>
								</div>
							</DropZone>
						)}

					{/* When file uploaded/provided */}
					{value && (
						<div className="file-preview">
							<img
								id="file-preview"
								src={typeof value === 'string' ? value : value.preview}
								alt="uploaded-file-preview"
								onLoad={this.checkEXIFDataForOrientation}
							/>
							<svg
								width="32px"
								height="32px"
								viewBox="0 0 32 32"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								onClick={this.resetDropZone}>
								<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
									<g id="close">
										<circle id="Oval" cx="16" cy="16" r="16" />
										<polygon
											id="Shape"
											fill="#FFFFFF"
											transform="translate(16.000000, 16.000000) rotate(45.000000) translate(-16.000000, -16.000000) "
											points="26 14.5714286 17.4285714 14.5714286 17.4285714 6 14.5714286 6 14.5714286 14.5714286 6 14.5714286 6 17.4285714 14.5714286 17.4285714 14.5714286 26 17.4285714 26 17.4285714 17.4285714 26 17.4285714"
										/>
									</g>
								</g>
							</svg>
						</div>
					)}
				</div>

				{/* Helper Text */}
				{helperText &&
					helperTextPosition === 'bottom' && (
						<div className="form-helper margin-top-1">
							<p className="helper-text bottom">{helperText}</p>
						</div>
					)}

				{/* Error */}
				{invalid && (
					<div className="form-error">
						<Error invalid={invalid}>{error}</Error>
					</div>
				)}
			</FormElementWrapper>
		);
	}
}

class Dropzone extends React.Component {
	render() {
		return <Field {...this.props} component={RenderDropzone} />;
	}
}

export default Dropzone;
