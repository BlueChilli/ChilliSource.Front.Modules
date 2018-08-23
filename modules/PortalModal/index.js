/** Libraries */
import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from '../CenteredComponent';

/** Constants */
const modalRoot = document.getElementById('root');

/** Helpers */
import { Container } from '../CenteredComponent';

/** Class PortalModal */
class PortalModal extends React.Component {
	getModalContent = () => {
		const { title, children, onClose, explanation } = this.props;

		if (!onClose) {
			throw Error('Component "PortalModal" requires \'onClose\' parameter to be defined');
		}

		return (
			<div className="modal flex center">
				<div className="modal-content">
					<Container fluid>
						<Row>
							{title ? (
								<Col
									xs={12}
									style={{
										marginTop: 32,
									}}>
									<div className="full-width flex center">
										<h3 className="text-center">{title}</h3>
									</div>
								</Col>
							) : (
								<noscript />
							)}

							{explanation ? (
								<Col xs={12}>
									<div className="full-width flex center margin-top-1">
										<p className="text-center">{explanation}</p>
									</div>
								</Col>
							) : (
								<noscript />
							)}
						</Row>

						<Row style={{ overflow: 'visible' }}>
							<Col style={{ overflow: 'visible' }}>{children && children}</Col>
						</Row>
					</Container>

					<svg width="32px" height="32px" viewBox="0 0 32 32" onClick={onClose} className="close">
						<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
							<g id="close">
								<circle fill="#53BB7F" cx="16" cy="16" r="16" />
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
			</div>
		);
	};

	render() {
		const { isOpen } = this.props;

		if (isOpen) {
			return ReactDOM.createPortal(this.getModalContent(), modalRoot);
		}

		return <noscript />;
	}
}

export default PortalModal;
