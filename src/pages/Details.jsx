import { IoArrowBack } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../components/Button';
import { Info } from '../components/Info';
import {
  clearDetails,
  loadBordersByCode,
  loadCountryByName,
} from '../store/details/details-actions';
import { selectDetailsInfo } from '../store/details/details-selectors';

export const Details = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const navigate = useNavigate();
  const { error, status, currentCountry } = useSelector(selectDetailsInfo);

  useEffect(() => {
    dispatch(loadCountryByName(name));
    return () => dispatch(clearDetails());
  }, [name, dispatch]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {error && <h2>Can't fetch data</h2>}
      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'received' && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
