import React from 'react';

class Select extends React.Component {
  option: React.LegacyRef<HTMLSelectElement> | undefined;

  constructor(props: { value: string }) {
    super(props);
    this.option = React.createRef();
    // this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  // handleSelectChange() {
  //   console.log('select', this.option.current?.value);
  // }

  render() {
    console.log('select', this.option);
    return (
      <select
        ref={this.option}
        // onChange={this.handleSelectChange}
        className="form__input"
        defaultValue="2"
      >
        <option value="1">I like travel</option>
        <option value="2">Travel - it is my hobby</option>
        <option value="3">I do not like travel</option>
      </select>
    );
  }
}

export default Select;
