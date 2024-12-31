import { useLocation } from 'react-router-dom';
const Details = () => {
  const location = useLocation();

  const getQueryParam = (param: string): string | null => {
    const urlParams = new URLSearchParams(location.search);
    return urlParams.get(param);
  };

  const receiver = getQueryParam('receiver');

  return (
    <div className="details">
      <p>Hi {receiver},</p>
      <p>
      May this New Year bring you endless joy, success, and cherished moments with loved ones. Here's to new beginnings and brighter days ahead! Cheers!
      </p>
    </div>
  )
}

export default Details