import './PatientCard.css';
import { CalendarToday, LocationSearching, PhoneAndroid } from '@material-ui/icons';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import FaceIcon from '@material-ui/icons/Face';

const PatientCard = ({ name, sex, age, birthdate, number, tutor, location }) => (
  <div className="userShow">
    <div className="userShowTop">
      <img
        src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        className="userShowImg"
      />
      <div className="userShowTopTitle">
        <span className="userShowUsername">{name}</span>
        <span className="userShowUserTitle">{sex}</span>
      </div>
    </div>
    <div className="userShowBottom">
      <div className="userShowInfo">
        <ChildCareIcon className="userShowIcon" />
        <span className="userShowInfoTitle">{age}</span>
      </div>
      <div className="userShowInfo">
        <CalendarToday className="userShowIcon" />
        <span className="userShowInfoTitle">{birthdate}</span>
      </div>
      <div className="userShowInfo">
        <PhoneAndroid className="userShowIcon" />
        <span className="userShowInfoTitle">{number}</span>
      </div>
      <div className="userShowInfo">
        <FaceIcon className="userShowIcon" />
        <span className="userShowInfoTitle">{tutor}</span>
      </div>
      <div className="userShowInfo">
        <LocationSearching className="userShowIcon" />
        <span className="userShowInfoTitle">{location}</span>
      </div>
    </div>
  </div>
);

export default PatientCard;
