/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Switcher.scss';

class Switcher extends React.Component {
  inputSwitcher = React.createRef<HTMLInputElement>();

  // handleSwitcherChange() {
  //   // console.log('switcher', this.inputSwitcher.current.checked);
  // }

  render() {
    return (
      <div className="toggle-switch">
        <input
          type="checkbox"
          defaultChecked={false}
          // onChange={this.handleSwitcherChange}
          className="toggle-switch-checkbox"
          name="toggleSwitch"
          id="toggleSwitch"
          ref={this.inputSwitcher}
        />
        <label className="toggle-switch-label" htmlFor="toggleSwitch">
          <span className="toggle-switch-inner" />
          <span className="toggle-switch-switch" />
        </label>
      </div>
    );
  }
}

// class Switcher extends React.Component {

//     render() {
//       return (
//         <div className="toggle-switch">
//           <input
//             type="checkbox"
//             className="toggle-switch-checkbox"
//             name={this.props.Name}
//             id={this.props.Name}
//           />
//           <label className="toggle-switch-label" htmlFor={this.props.Name}>
//             <span className="toggle-switch-inner" />
//             <span className="toggle-switch-switch" />
//           </label>
//         </div>
//       );
//     }
//   }

export default Switcher;
