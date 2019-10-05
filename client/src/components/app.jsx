import React from 'react';
import CreateChannelModal from './createchannelmodal';
import CreateChannelButton from './createchannelbutton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChannel: 'General',
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  componentDidMount() {

  }
  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }
  render() {
    const { isModalOpen } = this.state;
    return (
      <>
        <CreateChannelModal
          closeModal={this.toggleModal}
          visible={isModalOpen} />
        <div className="col channel-wrapper">
          <div className="channel-heading">
            <strong>Wave</strong>
            <img className="wave-svg" src="./images/wave4.svg"></img>
          </div>
          {/* <SearchChannels/>
          <ChannelList /> */}
          <CreateChannelButton
            openModal={this.toggleModal}
          />
          {/* <ExitButton /> */}
        </div>
        <div className="col messages-wrapper">
          {/* <CurrentChannel />
          <MessageList />
          <MessageInput /> */}
        </div>
      </>
    );
  }
}

export default App;
