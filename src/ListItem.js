/* eslint-disable camelcase */

import React from 'react';
import PropTypes from 'prop-types';

function ListItem({ item }) {
  const {
    url,
    MainImage,
    title,
    currency_code,
    price,
    quantity,
    error_messages,
  } = item;
  let priceStr;
  let quantityStyle;

  if (error_messages) return false;

  switch (currency_code) {
    case 'USD':
      priceStr = `$${price}`;
      break;
    case 'EUR':
      priceStr = `€${price}`;
      break;
    default:
      priceStr = `${price} ${currency_code}`;
  }

  if (quantity <= 10) quantityStyle = 'low';
  else if (quantity <= 20) quantityStyle = 'medium';
  else quantityStyle = 'high';

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage.url_570xN} alt="" />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">
          {(title.length > 50) ? `${title.substring(0, 50)}...` : title}
        </p>
        <p className="item-price">{priceStr}</p>
        <p className={`item-quantity level-${quantityStyle}`}>
          {`${quantity} left`}
        </p>
      </div>
    </div>
  );
}

ListItem.propTypes = {
  item: PropTypes.shape({
    listing_id: PropTypes.number,
    error_messages: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string,
    MainImage: PropTypes.shape({
      url_570xN: PropTypes.string,
    }),
    title: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
};

export default ListItem;
