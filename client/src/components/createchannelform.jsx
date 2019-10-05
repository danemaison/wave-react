import React from 'react';

class CreateChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }
  inputChangeHandler(e) {
    console.log(e.target.name);
    const input = e.target.name;
    const value = e.target.value;
    this.setState({ [input]: value });
  }
  render() {
    return (
      <>
        <h1>Create a Channel</h1>
        <form id="create-channel" className='channel-creation-form'>
          <label>Name
            <input
              autoComplete="off"
              type="text"
              name="name"
              id="channel-name"
              onChange={this.inputChangeHandler}/>
          </label>
          <label>Description
            <input
              autoComplete="off"
              type="text"
              name="description"
              id="channel-description"
              onChange={this.inputChangeHandler}/>
          </label>
          <button className="button-main">Create</button>
        </form>
      </>
    );
  }
}

export default CreateChannelForm;
