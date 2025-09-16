import { useNavigate, useLocation } from 'react-router-dom';
import { queryStringToObject, addToQueryString, omitFromQueryString } from 'shared/utils/url';

const useQueryParamModal = (param) => {
  const navigate = useNavigate();
  const location = useLocation();

  const open = () => {
    const pathname = location.pathname;
    const search = addToQueryString(location.search, { [`modal-${param}`]: true });
    // console.log('pathName: ', pathname);
    // console.log('search: ', search);
    navigate({ pathname, search });
  };

  const close = () => {
    const pathname = location.pathname;
    const search = omitFromQueryString(location.search, [`modal-${param}`]);
    // console.log('pathName: ', pathname);
    // console.log('search: ', search);
    navigate({ pathname, search });
  };

  const isOpen = () => !!queryStringToObject(location.search)[`modal-${param}`];

  return { open, close, isOpen };
};

export default useQueryParamModal;
