import './PatientCard.css';
import { CalendarToday, LocationSearching, PhoneAndroid } from '@material-ui/icons';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FaceIcon from '@material-ui/icons/Face';
import { Avatar } from '@material-ui/core';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import moment from 'moment';

const PatientCard = ({ name, sex, age, birthdate, number, tutor, location, id, malnutrition }) => (
  <div className="userShow">
    <div className="userShowTop">
      <Avatar alt={name} src={`/static/mock-images/avatars/avatar_${id}.jpg`} />
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
        <span className="userShowInfoTitle">{moment(birthdate).format('DD/MM/YYYY')}</span>
      </div>
      <div className="userShowInfo">
        <PhoneAndroid className="userShowIcon" />
        <span className="userShowInfoTitle">{number}</span>
      </div>
      <div className="userShowInfo">
        <EmojiPeopleIcon className="userShowIcon" />
        <span className="userShowInfoTitle">{tutor}</span>
      </div>
      <div className="userShowInfo">
        <LocationOnIcon className="userShowIcon" />
        <span className="userShowInfoTitle">{location}</span>
      </div>
      <div className="userShowInfo">
        <LocalHospitalIcon className="userShowIcon" />
        <span className="userShowInfoTitle">{malnutrition}</span>
      </div>
    </div>
  </div>
);

export default PatientCard;
