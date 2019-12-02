import React from 'react';
import PropTypes from 'prop-types';
import { getPageButtonsNumbersArray } from '../utils/pagination';

class Pagination extends React.Component {
  state = {
    data: [],
    initialized: false,
    selectedPageButton: 0,
    totalNumberOfRows: 0,
    paginationNumberButtons: []
  };

  componentDidMount = () => {
    const { fetchData, highestIndexOfSelectedPageButton, maximumNumberOfPageButtons, rowLimit } = this.props;
    const { selectedPageButton } = this.state;
    if (fetchData) {
      fetchData(0)
        .then(({ data, max: totalNumberOfRows }) => {
          const paginationNumberButtons = getPageButtonsNumbersArray(selectedPageButton, highestIndexOfSelectedPageButton, maximumNumberOfPageButtons, rowLimit, totalNumberOfRows);
          this.setState({
            data,
            initialized: true,
            totalNumberOfRows,
            paginationNumberButtons
          });
        });
    }
  }

  render = () => {
    const { fetchData, Loader, PaginationRow } = this.props;
    const { data, initialized, paginationNumberButtons } = this.state;
    if (!fetchData) return <div> No fetchData function found!</div>;
    if (!initialized) return Loader ? <Loader /> : <div>Loading...</div>;
    return (
      <>
        {data.map(d => <PaginationRow key={d.id} {...d} />)}
        {paginationNumberButtons.map(d => <div key={d}>{d}</div>)}
      </>
    );
  };
}

Pagination.defaultProps = {
  maximumNumberOfPageButtons: 10,
  highestIndexOfSelectedPageButton: 5,
  rowLimit: 25
};

Pagination.propTypes = {
  fetchData: PropTypes.func.isRequired,
  maximumNumberOfPageButtons: PropTypes.number,
  highestIndexOfSelectedPageButton: PropTypes.number,
  rowLimit: PropTypes.number,
  Loader: PropTypes.func,
  PaginationRow: PropTypes.func
};

export default Pagination;
