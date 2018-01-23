import React, {Component} from "react";
import {connect} from "react-redux";
import fetchEndpoint from "./fetchEndpoint";
import {saveState} from "./actions";
import "./css.css";

export default options => (WrappedComponent) => {
	class AppWrapper extends Component {
		constructor(props) {
			super(props);
			this.state = {
				loaded: false,
				failed: false,
			};
		}

		render() {
			if (this.state.loaded) {
				return <WrappedComponent {...this.props} />;
			} else if (this.state.failed) {
				return (<div className="swagger-error">
					<h1>application failed to start</h1>
					<p>please try again in a few minutes.</p>
				</div>);
			}
			return (
				<div>
					<div className="edbspinner"/>
					<div className="ets-fetching-text">{options.fetchingText}</div>
				</div>
			);
		}

		componentWillMount() {
			fetchEndpoint({
				endpoint: options.endpoint,
				cacheLife: options.cacheLife,
				id: options.id
			}).then(data => {
				console.log("data", data);
				this.props.dispatch(saveState(data));
				this.setState({loaded: true});
			}).catch((error) => {
				console.error("Loading endpoint failed", error);
				this.setState({failed: true});
			});
		}
	}

	return connect()(AppWrapper);
};