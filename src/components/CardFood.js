import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class CardFood extends Component {
  render() {
    const {
      link,
      src,
      name,
      index } = this.props;
    return (
      <Link to={ link } className="link">
        <div data-testid={ `${index}-recipe-card` } className="div-card">
          <img
            data-testid={ `${index}-card-img` }
            src={ src }
            alt={ name }
            className="img-card"
          />
          <h1 data-testid={ `${index}-card-name` } className="name-food">{ name }</h1>
        </div>
      </Link>
    );
  }
}
CardFood.propTypes = {
  index: PropTypes.number,
  src: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string,
}.isRequired;

export default CardFood;
