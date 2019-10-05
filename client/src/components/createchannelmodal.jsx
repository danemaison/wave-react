import React from 'react';
import CreateChannelForm from './createchannelform';

function CreateChannelModal(props) {
  return (
    <div id="channel-overlay" className={props.visible ? 'channel-overlay visible' : 'channel-overlay'}>
      <div className="channel-overlay-wave"></div>
      <div className="channel-overlay-container">
        <div onClick={props.closeModal} className="cancel">
          <i className="fas fa-times fa-2x"></i>
          <br />
          esc
        </div>
        <CreateChannelForm />
      </div>
    </div>
  );
}

export default CreateChannelModal;
