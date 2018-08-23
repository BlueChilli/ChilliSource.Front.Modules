import React from 'react';

interface PortalModalProps {
	isOpen: boolean;
	title?: string;
	explanation?: string;
	onClose?: (event: React.MouseEvent<HTMLElement>) => void;
	children: React.ComponentType;
}

export default class PortalModal extends React.Component<PortalModalProps> {}
