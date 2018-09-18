import React from 'react';
import { ContainerProps, RowProps, ColProps } from 'react-grid-system';

interface CenteredComponentProps {
	/**
	 * This aligns all the content in the center
	 * vertically. Kinda like justify center. Default
	 * is left aligned.
	 */
	centerContent?: boolean;
	/**
	 * By default there is a 48px padding on top
	 * to separate the children from whatever is
	 * above this component.
	 */
	removeTopOffset?: boolean;
}

export default class CenteredComponent extends React.Component<CenteredComponentProps> {}

export class Container extends React.Component<ContainerProps> {}

export class Row extends React.Component<RowProps> {}

export class Col extends React.Component<ColProps> {}
