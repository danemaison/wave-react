import React from 'react';

function CreateChannelButton(props) {
  return (
    <div className="create-channel">
      <button
        onClick={props.openModal}
        className="button-create-channel">
        Create a Channel
      </button>
    </div>
  );
}

export default CreateChannelButton;
