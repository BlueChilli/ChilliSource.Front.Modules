import React, {Fragment} from "react";
import {connect} from "react-redux";
import {hideModal} from "./actions";
import {Map} from "immutable";

export const createModalComponent = (id, promise = undefined, options = {}) => {

  const mstp = state => {
    return {
      modal: state.getIn(["modal", id]) || Map(),
      meta: state.getIn(["modal", id, "meta"]) || Map(),
      id
    }
  };

  const mdtp = dispatch => {
    return {
      dispatch,
      closeHandler: () => dispatch(hideModal(id))
    }
  };

  return (Wrapper) => {
    class ModalWrapperClass extends React.Component {

      constructor(props, context) {
        super(props, context);

        this.state = {
          isFetching: false,
          hasErrors: false,
          err: undefined
        };
      }

      componentDidMount() {
        // Close if ESC is hit

        if (options.noEsc !== true) {
          document.addEventListener("keydown", (event) => {
            if (event.keyCode === 27) {
              this.props.dispatch(hideModal(this.props.id));
            }
          }, false);
        }
      }

      componentWillUnmount() {
        document.removeEventListener("keydown", () => {
        }, false);
      }

      isOpen(props) {
        if (!props.modal.size) return false;

        return props.modal.get("isOpen");
      }

      componentWillReceiveProps(nextProps) {

        if (this.isOpen(nextProps) && this.isOpen(this.props) !== this.isOpen(nextProps)) {
          // Modal is triggered, let's do something
          if (promise) {
            this.setState({isFetching: true});
            nextProps.dispatch(promise(nextProps.meta)).then(foo => {
              this.setState({isFetching: false});
            }).catch(err => {
              // There's no error handler. It just fails.
              nextProps.dispatch(hideModal(nextProps.id));
              this.setState({isFetching: false});
            });
          } else {
            this.setState({isFetching: false});
          }
        }
      }

      render() {
        const showThis = (this.isOpen(this.props) && !this.state.isFetching && !this.state.hasErrors) === true;
        return (
          <Fragment>
            {showThis &&
            <Wrapper modal={this.props.modal} meta={this.props.meta} closeHandler={this.props.closeHandler}/>
            }

            {this.state.isFetching === true && (
              <div className="modal-loading-spinner "/>
            )}

          </Fragment>
        )
      }
    }

    return connect(mstp, mdtp)(ModalWrapperClass);

  }

};