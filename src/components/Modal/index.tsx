import { Translator } from 'locale';
import React from 'react';
import { ModalContainer } from './styles';

type Props = {
  onCancel: ()=>void;
  onConfirm: ()=>void;
  show: boolean;
}

export const ConfirmModal = (props: Props) => (
  <ModalContainer 
    show={props.show} 
    className={'modal ' + (props.show && 'show')} 
    hidden={!props.show}
    aria-labelledby="#modalTitle"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h4 id="modalTitle">{Translator.i18n.t('cart.deleteModal.title')}</h4>
          <button type="button" className="btn btn-close" onClick={props.onCancel} aria-label="Close">
          </button>
        </div>
        <div className="modal-footer">
          <button className="btn btn-danger" onClick={props.onCancel}>{Translator.i18n.t('cart.deleteModal.cancel')}</button>
          <button className="btn btn-primary" onClick={props.onConfirm}>{Translator.i18n.t('cart.deleteModal.confirm')}</button>
        </div>
      </div>
    </div>
  </ModalContainer>
);
