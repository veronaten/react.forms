/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-cond-assign */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-constant-condition */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { timingSafeEqual } from 'crypto';
import React from 'react';
import Button from '../button/Button';
import Card from '../card/Card';
import Select from '../select/Select';
import './Forms.scss';

interface RefObject<T> {
  readonly current: T | null;
}
interface Form {
  inputText:
    | string
    | ((instance: HTMLInputElement | null) => void)
    | RefObject<HTMLInputElement>;

  inputDate:
    | string
    | ((instance: HTMLInputElement | null) => void)
    | RefObject<HTMLInputElement>;

  inputCheckbox:
    | ((instance: HTMLInputElement | null) => void)
    | RefObject<HTMLInputElement>;
}

interface FormState {
  city: string | undefined;
  date: string | undefined;
  addCard: boolean | undefined;
  isInvalid: {
    city: boolean | null;
    date: boolean | null;
    addCard: boolean | null;
  };
}

class Forms extends React.Component<Record<string, unknown>, FormState> {
  inputDate: React.RefObject<HTMLInputElement>;

  inputText: React.RefObject<HTMLInputElement>;

  inputCheckbox: React.RefObject<HTMLInputElement>;

  arrayData: Array<FormState> = [];

  constructor(props: { input: string | null | undefined }) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.checkValid = this.checkValid.bind(this);
    this.inputText = React.createRef();
    this.inputDate = React.createRef();
    this.inputCheckbox = React.createRef();
    this.state = {
      city: '',
      date: '',
      addCard: false,
      isInvalid: {
        city: !this.inputText.current?.value,
        date: !this.inputDate.current?.value,
        addCard: !!this.inputCheckbox.current?.checked,
      },
    };

    // this.valid = {
    //   city: !!this.inputText.current?.value,
    //   date: !!this.inputDate.current?.value,
    //   addCard: true,
    // };
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    this.setState({
      city: this.inputText.current?.value,
      date: this.inputDate.current?.value,
      addCard: this.inputCheckbox.current?.checked,
      isInvalid: {
        city: !!this.inputText.current?.value,
        date: !!this.inputDate.current?.value,
        addCard: !!this.inputCheckbox.current?.checked,
      },
    });

    this.arrayData.push({
      city: this.inputText.current?.value,
      date: this.inputDate.current?.value,
      addCard: this.inputCheckbox.current?.checked,
      isInvalid: {
        city: !!this.inputText.current?.value,
        date: !!this.inputDate.current?.value,
        addCard: !!this.inputCheckbox.current?.checked,
      },
    });

    const message = 'The new card is add.';

    alert(message);
    if (this.inputText.current) this.inputText.current.value = '';
    if (this.inputDate.current) this.inputDate.current.value = '';
    if (this.inputCheckbox.current) this.inputCheckbox.current.checked = false;
  }

  render() {
    const { addCard, city, date, isInvalid } = this.state;

    return (
      <div className="container">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="input"
            placeholder="Enter city"
            className="form__input"
            ref={this.inputText}
          />
          {!isInvalid.city && (
            <span className="form__error">Enter the name of city</span>
          )}
          <input type="date" className="form__input" ref={this.inputDate} />
          {!isInvalid.date && (
            <span className="form__error">Choose some date</span>
          )}

          <div className="checkbox__wrapper">
            <label htmlFor="checkbox" className="form__checkbox">
              Do you want to show new Card?
            </label>
            <input
              type="checkbox"
              className="checkbox"
              ref={this.inputCheckbox}
            />
          </div>
          <Button
            disabled={isInvalid.city && isInvalid.date && isInvalid.addCard}
          >
            Add new card
          </Button>
        </form>
        {addCard &&
          isInvalid.addCard &&
          this.arrayData.map(
            (item: { city: string | undefined; date: string | undefined }) => (
              <Card
                key={item.city}
                name={item.city}
                description={item.date}
                link={item.city}
                picture={item.city}
              />
            )
          )}
      </div>
    );
  }
}

export default Forms;

// disabled={!isInvalid.city && !isInvalid.date && !addCard}
