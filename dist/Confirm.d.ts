import { Component } from 'react';
import * as React from 'react';
interface IConfirmProps {
    body: string;
    cancelText?: any;
    className?: string;
    confirmText?: any;
    onConfirm(): void;
    onClose?(): void;
    showCancelButton?: any;
    title: string;
    visible?: boolean;
}
declare class Confirm extends Component<IConfirmProps, any> {
    constructor(props: any);
    readonly onConfirm: (event: {
        stopPropagation: () => void;
    }) => void;
    readonly onButtonClick: () => void;
    readonly onClose: (event: {
        stopPropagation: () => void;
    }) => void;
    render(): React.DetailedReactHTMLElement<{
        onClick: () => void;
    }, HTMLElement>;
}
export default Confirm;
