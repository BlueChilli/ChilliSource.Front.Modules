import { ComponentType } from 'react';

export function requireAuthentication(ComponentType): ComponentType;

export function doNotRequireAuthentication(ComponentType): ComponentType;
