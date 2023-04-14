import { useState } from 'react';

import goitLogo from '../../assets/images/goitLogo.svg';
import boy from '../../assets/images/Boy.svg';

const UserCard = () => {
  const [count, setCount] = useState(100500);
  let number = Number(count).toLocaleString('en');
  return (
    <div className="card">
      <a href="https://goit.global/ua/" target="_blank" className="logoLink">
        <img src={goitLogo} className="logo" alt="GoIt logo" />
      </a>

      <div className="userImageBox">
        <div className="horizontalLine"></div>

        <img src={boy} className="userImage" alt="user image" />
      </div>
      <div className="cardInfo">
        <p className="cardInfoTweets">777 tweets</p>
        <p className="cardInfoTweets cardInfoFollowers">{number} followers</p>
        <button
          className="followBtn"
          alt="follow user button"
          onClick={() => setCount(count => count + 1)}
        >
          Follow
        </button>
      </div>
    </div>
  );
};
export default UserCard;
