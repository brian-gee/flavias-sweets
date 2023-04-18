import { h, Component } from 'preact';

export default class PreContact extends Component {
  state = { value: '' };

  onSubmit = (e) => {
    alert('Submitted a todo');
    e.preventDefault();
  };

  onInput = (e) => {
    const { value } = e.target;
    this.setState({ value });
  };

  render(_, { value }) {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={value} onInput={this.onInput} />
        <p>You typed this value: {value}</p>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
