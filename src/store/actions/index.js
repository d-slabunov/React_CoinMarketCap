import queryString from 'query-string';
import { editDataForTable } from '../../helpers'

export const getCryptoCurrency = () => async (dispatch) => {
  dispatch({type: 'LOADING_DATA'});
  const params = {
    start: '1',
    limit: '10',
    convert: 'USD'
  };

  fetch(`/v1/cryptocurrency/listings/latest?${queryString.stringify(params)}`, {
    method: 'GET',
    headers: {
      'X-CMC_PRO_API_KEY': '57cf5982-7340-4251-99d5-9434ccfb9063',
    },
  })
    .then(response => response.json())
    .then(result => {
      if (result.data) {
        dispatch({type: 'LOADING_DATA_SUCCESS', payload: editDataForTable(result.data)});
      }
      if (result.error || result.status.error_message) {
        dispatch({type: 'LOADING_DATA_FAIL', payload: 'Some kind of error occurred'});
      }
    })
    .catch(e => {
      dispatch({type: 'LOADING_DATA_FAIL', payload: 'Some kind of error occurred'});
    });
};
