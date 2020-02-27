const createRequestTypes = (base, act) =>
  ['REQUEST', 'SUCCESS', 'FAILURE'].reduce((acc, type) => {
    const key = `${act}_${type}`;
    acc[key] = `${base}_${act}_${type}`;
    return acc;
  }, {});

const TRIP_TYPE = {
  ...createRequestTypes('TRIP', 'GET_LIST')
};
export default TRIP_TYPE;