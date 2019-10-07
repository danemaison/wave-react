import React from 'react';
import CreateChannelModal from './createchannelmodal';
import CreateChannelButton from './createchannelbutton';
import Heading from './heading';
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
          <Heading />
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
