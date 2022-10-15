import React from 'react';
import './Search.scss';

class Search extends React.Component<
  Record<string, never>,
  { value: string | null }
> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(): void {
    const value = localStorage.getItem('value' || '');
    this.setState({ value });
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { value } = this.state;

    localStorage.setItem('value', value || '');
  }

  render() {
    const { value } = this.state;
    return (
      <form className="input" onSubmit={this.handleSubmit}>
        <input
          type="input"
          name="value"
          value={value || ''}
          onChange={this.handleChange}
          placeholder="Enter text"
          className="input__box"
        />
        <button className="input__button" type="submit">
          GO
        </button>
      </form>
    );
  }
}

export default Search;
