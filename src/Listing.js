import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

function Listing({ items }) {
  return (
    <div className="item-list">
      {items.map((item) => <ListItem item={item} key={item.listing_id} />)}
    </div>
  );
}

Listing.defaultProps = {
  items: [],
};

Listing.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.any,
    ),
  ),
};

export default Listing;
