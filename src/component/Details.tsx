
const Details: React.FC = () => {

  const receiver = new URLSearchParams(location.search).get("receiver") || '';

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