import toaster from 'toasted-notes';
import { MessageOptionalOptions } from 'toasted-notes/lib/ToastManager';
import * as React from 'react';
import { Alert } from 'reactstrap';
import { PositionsType } from 'toasted-notes/lib/Message';

const options: MessageOptionalOptions = {
  duration: 2000,
  position: 'top-right',
}

class Toaster {

  show(message: string, color: string = "light", position: PositionsType = 'bottom-left', ) {
    return toaster.notify(({ }) => (
      <Alert color={color}>
        {message}
      </Alert>
    ), {
        ...options,
        position
      });
  }

  error(message: string) {
    return toaster.notify(({ }) => (
      <Alert color="danger">
        {message}
      </Alert>
    ), {
        ...options,
        type: 'error',
      });
  }


  info(message: string) {
    return toaster.notify(({ }) => (
      <Alert color="info">
        {message}
      </Alert>
    ), {
        ...options,
        type: 'error',
      });
  }

  success(message: string) {
    return toaster.notify(({ }) => (
      <Alert color="success">
        {message}
      </Alert>
    ), {
        ...options,
        type: 'error',
      });
  }

}

export default Toaster;

