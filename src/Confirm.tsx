import { Component } from 'react';
import * as React from 'react';
import { ModalHeader, ModalFooter, ModalBody, Modal, Button } from 'reactstrap';

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
};


class Confirm extends Component<IConfirmProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isOpened: props.visible
    };
  }


  readonly onConfirm = (event: { stopPropagation: () => void; }) => {
    event.stopPropagation();
    this.setState({
      isOpened: false
    });
    this.props.onConfirm();
  }

  readonly onButtonClick = () => {
    if (!this.state.isOpened) {
      this.setState({
        isOpened: true
      });
    }
  }

  readonly onClose = (event: { stopPropagation: () => void; }) => {
    if (event) {
      event.stopPropagation();
    }
    this.setState({
      isOpened: false
    });

    if (this.props.onClose) {
      this.props.onClose();
    }

  }

  render() {
    let customBtn = React.Children.only(this.props.children) as any;
    let modal = (
      <Modal isOpen={this.state.isOpened} onHide={this.onClose} className={this.props.className}  >
        <ModalHeader>
          {this.props.title}
        </ModalHeader>
        <ModalBody>{this.props.body}</ModalBody>
        <ModalFooter>
          <Button  color="secondary" onClick={this.onClose} >
            {this.props.cancelText || "Cancelar"}
          </Button>
          <Button
          color="primary"
            onClick={this.onConfirm}>
            {this.props.confirmText}
          </Button>
        </ModalFooter>
      </Modal>
    );


    const content = React.cloneElement(
      customBtn,
      {
        onClick: this.onButtonClick,
      },
      customBtn.props.children,
      modal
    );

    return content;
  }
}

export default Confirm;
