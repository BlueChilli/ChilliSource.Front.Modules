import React from 'react';
import { storiesOf } from '@storybook/react';
import BurgerMenu from './comps/BurgerMenu';
import PortalModal from '../modules/PortalModal';
import './helpers/storybook.css';

/** Class ModalDemo */
class ModalDemo extends React.Component {
	state = {
		modalIsOpen: false,
	};

	toggleModalState = () =>
		this.setState(prevState => ({
			modalIsOpen: !prevState.modalIsOpen,
		}));

	render() {
		const { modalIsOpen } = this.state;

		return (
			<div className="flex col">
				<button className="button button-primary" onClick={this.toggleModalState}>
					Show Modal
				</button>

				<PortalModal isOpen={modalIsOpen} title="Demo Modal" onClose={this.toggleModalState}>
					Hi there! This is a modal built with React Portals
				</PortalModal>
			</div>
		);
	}
}

storiesOf('Components', module)
	.add('Hamburger Menu', () => <BurgerMenu />)
	.add('Modal', () => <ModalDemo />);
