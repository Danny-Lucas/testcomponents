import React from 'react';
import PropTypes from 'prop-types';

const PaginationRow = ({ first_name, last_name }) => (
  <div>
    {first_name}
    {last_name}
  </div>
);

PaginationRow.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string
}

export default PaginationRow;
