/** Libraries */
import React from 'react';
import { setConfiguration, Container, Row, Col } from 'react-grid-system';

/** Initialisation */
setConfiguration({
	gutterWidth: 16,
	containerWidths: [540, 750, 960, 960],
});

/** Class FluidContainer */
class FluidContainer extends React.Component {
	render() {
		return <Container fluid xs sm md {...this.props} />;
	}
}

/** Class CenteredComponent */
class CenteredComponent extends React.Component {
	render() {
		const { children, centerContent = false, removeTopOffset = false } = this.props;

		if (!children) {
			console.error('<CenteredComponent /> is being used without any children. Please fix this.');
			return <noscript />;
		}

		return (
			<Container>
				<Row>
					<Col
						xs={12}
						sm={6}
						md={6}
						lg={4}
						offset={{ xs: 0, sm: 3, md: 3, lg: 4 }}
						style={{ paddingTop: removeTopOffset ? 0 : 48 }}>
						{centerContent ? <div className="flex col center">{children}</div> : children}
					</Col>
				</Row>
			</Container>
		);
	}
}

export default CenteredComponent;

export { FluidContainer as Container, Row, Col };
