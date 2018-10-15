/** Libraries */
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Alert from 'react-s-alert';

/**
 * @typedef ActionProps
 * @property {'Copy' | 'Collapse' | 'Expand'} type The type of action it is
 * @property {string} [className] Any additional className to give to the component
 * @property {string} [text] The text to copy to clipboard
 */

/**
 * @typedef ActionStateProps
 * @property {boolean} hasCopiedText Whether or not the text has been copied
 */

/**
 * @class Action
 * @augments React.Component<ActionProps, ActionStateProps>
 */
class Action extends React.Component {
	state = {
		hasCopiedText: false,
	};

	toggleCopyStatus = () =>
		this.setState(prevState => ({
			hasCopiedText: !prevState.hasCopiedText,
		}));

	componentDidUpdate(prevProps, prevState) {
		if (this.state.hasCopiedText && !prevState.hasCopiedText) {
			Alert.success('API path copied!');
			setTimeout(this.toggleCopyStatus, 2000);
		}
	}

	render() {
		const { type, className, text } = this.props;

		if (!type) {
			throw new Error('Action requires the `type` parameter to be defined.');
		}

		if (type === 'Copy') {
			if (!text) {
				throw new Error("Action with type = 'Copy' requires the `text` parameter to be defined.");
			}

			return (
				<CopyToClipboard text={text} onCopy={this.toggleCopyStatus}>
					<div className={`action copy flex center ${className ? className : ''}`}>
						<svg
							width="17px"
							height="22px"
							viewBox="0 0 17 22"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink">
							<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
								<path
									d="M-0.0173717905,5.22717467 L-0.0165918042,15.3329789 L-0.858898857,15.3329789 C-1.32439976,15.3329789 -1.70120591,14.9552204 -1.70120591,14.4906719 L-1.70120591,3.54351296 C-1.70120591,3.07801206 -1.32439976,2.70120591 -0.859851251,2.70120591 L15.1393917,2.70120591 C15.6048926,2.70120591 15.9816988,3.07896446 15.9816988,3.54351296 L15.9826526,4.38486762 L0.824935262,4.38486762 C0.359434362,4.38486762 -0.0173717905,4.76262617 -0.0173717905,5.22717467 Z M2.50867023,6.06943288 L18.5079132,6.06943288 C18.9724617,6.06943288 19.3502203,6.44623904 19.3502203,6.91173994 L19.3502203,17.8588989 C19.3502203,18.3234474 18.9734141,18.7012059 18.5079132,18.7012059 L2.50867023,18.7002518 C2.04412173,18.7002518 1.66636318,18.3234457 1.66636318,17.8579448 L1.66731704,6.91176265 C1.66731704,6.44626175 2.04412319,6.0694556 2.5086717,6.0694556 L2.50867023,6.06943288 Z"
									id="Shape"
									fillRule="nonzero"
									transform="translate(8.824507, 10.701206) rotate(90.000000) translate(-8.824507, -10.701206) "
								/>
							</g>
						</svg>
					</div>
				</CopyToClipboard>
			);
		}

		if (type === 'Collapse') {
			return (
				<div className={`action collapse flex center ${className ? className : ''}`}>
					<svg
						width="10px"
						height="24px"
						viewBox="0 0 10 24"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink">
						<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
							<path
								d="M5.33006816,13.399311 C5.03714363,13.0964858 4.56016084,13.1004481 4.27119859,13.399311 L0.235556699,17.5676029 C-0.478969993,18.293986 0.593797945,19.3825473 1.30830944,18.6561642 L3.70122902,16.2236726 C3.89717411,16.0257514 4.05551306,16.0930442 4.05551306,16.372116 L4.05551306,23.2300927 C4.05551306,23.6556267 4.39594435,24 4.81356397,24 C5.23315966,24 5.57161487,23.6556115 5.57161487,23.2300927 L5.57161487,16.372116 C5.57161487,16.0930442 5.72797268,16.0237703 5.92589891,16.2236726 L8.3188185,18.6561642 C9.03334519,19.3825473 10.1060473,18.2939658 9.39157124,17.5676029 L5.33006816,13.399311 Z M4.28305501,10.600689 C4.57597954,10.9035142 5.05296233,10.8995519 5.34395132,10.600689 L9.3915003,6.43239708 C10.106027,5.70601397 9.03325905,4.61745267 8.31874756,5.34383578 L5.92582797,7.77632744 C5.72988289,7.9742486 5.57154393,7.90695581 5.57154393,7.62788404 L5.57154393,0.769907323 C5.57154393,0.344373288 5.23111265,0 4.81349303,0 C4.39389734,0 4.05544213,0.344388489 4.05544213,0.769907323 L4.05544213,7.62788404 C4.05544213,7.90893695 3.89908431,7.97622973 3.70115809,7.77632744 L1.3082385,5.34383578 C0.593711809,4.61745267 -0.47899026,5.70603423 0.235485763,6.43239708 L4.28305501,10.600689 Z"
								id="collapse"
								fill="#4A4A4A"
								fillRule="nonzero"
							/>
						</g>
					</svg>
				</div>
			);
		}

		return (
			<div className={`action expand flex center ${className ? className : ''}`}>
				<svg
					width="10px"
					height="24px"
					viewBox="0 0 10 24"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink">
					<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
						<path
							d="M5.33006816,23.7743645 C5.03714363,24.0771897 4.56016084,24.0732274 4.27119859,23.7743645 L0.235556699,19.6060726 C-0.478969993,18.8796895 0.593797945,17.7911282 1.30830944,18.5175113 L3.70122902,20.950003 C3.89717411,21.1479241 4.05551306,21.0806313 4.05551306,20.8015596 L4.05551306,13.9435829 C4.05551306,13.5180488 4.39594435,13.1736755 4.81356397,13.1736755 C5.23315966,13.1736755 5.57161487,13.518064 5.57161487,13.9435829 L5.57161487,20.8015596 C5.57161487,21.0806313 5.72797268,21.1499053 5.92589891,20.950003 L8.3188185,18.5175113 C9.03334519,17.7911282 10.1060473,18.8797098 9.39157124,19.6060726 L5.33006816,23.7743645 Z M4.28305501,0.225635454 C4.57597954,-0.0771896933 5.05296233,-0.0732274194 5.34395132,0.225635454 L9.3915003,4.39392738 C10.106027,5.12031049 9.03325905,6.20887179 8.31874756,5.48248868 L5.92582797,3.04999702 C5.72988289,2.85207586 5.57154393,2.91936865 5.57154393,3.19844042 L5.57154393,10.0564171 C5.57154393,10.4819512 5.23111265,10.8263245 4.81349303,10.8263245 C4.39389734,10.8263245 4.05544213,10.481936 4.05544213,10.0564171 L4.05544213,3.19844042 C4.05544213,2.91738751 3.89908431,2.85009473 3.70115809,3.04999702 L1.3082385,5.48248868 C0.593711809,6.20887179 -0.47899026,5.12029023 0.235485763,4.39392738 L4.28305501,0.225635454 Z"
							id="open"
							fill="#4A4A4A"
							fillRule="nonzero"
						/>
					</g>
				</svg>
			</div>
		);
	}
}

export default Action;
