import users from '../mocks/users.json';

export const fetchMockUsers = limit => offset => Promise.resolve({ data: users, max: users.length })
  .then(({ data, max }) => {
    if (offset === 0 || offset > 0) {
      if (offset > 0) {
        data.splice(0, offset);
      }
      data.splice(0 + limit, data.length || 0);
    }
    return {
      data,
      max
    };
  });
