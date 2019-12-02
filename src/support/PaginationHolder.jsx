import React from 'react';
import Pagination from '../components/Pagination';
import { fetchMockUsers } from '../api/pagination';
import PaginationRow from './PaginationRow';

const PaginationHolder = () => (
  <Pagination
    fetchData={fetchMockUsers(10)}
    Loader={() => <div>Hoi, loading!</div>}
    PaginationRow={PaginationRow}
  />
);

export default PaginationHolder;
