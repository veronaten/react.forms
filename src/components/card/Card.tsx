/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './Card.scss';
import like from '../../assets/icons/like.png';
import save from '../../assets/icons/save.png';

interface CardProps {
  name: string | undefined;
  description: string | undefined;
  link: string | undefined;
  picture: string | undefined;
}

interface CardState {
  count: number;
}

class Card extends React.Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);
    this.state = {
      count: 0,
    };

    this.addLike = this.addLike.bind(this);
  }

  addLike() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const { name, description, link, picture } = this.props;
    const { count } = this.state;
    return (
      <div className="card">
        <div className="card__img">
          <img src={picture} alt="city" />
        </div>
        <div className="card__description">
          <a href={link}>
            <h3 className="card__title">{name}</h3>
          </a>
          <div className="card__text">{description}</div>
          <div className="card__buttons">
            <button
              type="button"
              onClick={this.addLike}
              className="card__buttons_like"
            >
              <img src={like} alt="like" />
              <span>{count}</span>
            </button>
            <button type="button" className="card__buttons_save">
              <img src={save} alt="save" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// const Card = ({ name, description, link, picture, ...props }: CardProps) => {
//   console.log();
//   return (
// <div className="card">
//   <div className="card__img">
//     <img src={picture} alt="city" />
//   </div>
//   <div className="card__description">
//     <a href={link}>
//       <h3 className="card__title">{name}</h3>
//     </a>
//     <div className="card__text">{description}</div>
//     <div className="card__buttons">
//       <button type="button" className="card__buttons_like">
//         <img src={like} alt="like" />
//         <span>{count}</span>
//       </button>
//       <button type="button" className="card__buttons_save">
//         <img src={save} alt="save" />
//       </button>
//     </div>
//   </div>
// </div>
//   );
// };

export default Card;
