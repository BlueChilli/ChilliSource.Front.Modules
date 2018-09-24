# Portal Modal

This component utilises `Portal`s from React 16 and up to create modal that can be, literally, inserted into any `domNode` you wish, wherever they might be in the DOM tree.

## Usage

- Basic

```js
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
```

## Properties

| Property      | Required | Optional | Type       | Description                                                                                                                                                                  |
| ------------- | -------- | -------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isOpen`      | `true`   |          | `boolean`  | Controls whether or not the modal is shown on the screen                                                                                                                     |
| `title`       |          | `true`   | `string`   | Adds a title to the modal. Styles are used from the `style-helpers/modal.scss`                                                                                               |
| `onClose`     | `true`   |          | `function` | A function to control the visiblity for the modal. This could probably update a local state variable which can hide and show the modal. See example above in [Usage](#usage) |
| `explanation` |          | `true`   | `string`   | Adds an explanation just below the title which could be used to further clarify what is being asked of the user in the modal                                                 |
| `children`    | `true`   |          | `any`      | Your content to render inside the modal. It can be any valid `React.ComponentType`                                                                                           |
