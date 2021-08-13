import './PatientCard.css';
import { CalendarToday, LocationSearching, PhoneAndroid } from '@material-ui/icons';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import FaceIcon from '@material-ui/icons/Face';

const PatientCard = () => (
  <div className="userShow">
    <div className="userShowTop">
      <img
        src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        className="userShowImg"
      />
      <div className="userShowTopTitle">
        <span className="userShowUsername">Hobed Bayekula</span>
        <span className="userShowUserTitle">M</span>
      </div>
    </div>
    <div className="userShowBottom">
      <div className="userShowInfo">
        <ChildCareIcon className="userShowIcon" />
        <span className="userShowInfoTitle">21 mois</span>
      </div>
      <div className="userShowInfo">
        <CalendarToday className="userShowIcon" />
        <span className="userShowInfoTitle">10.12.1999</span>
      </div>
      <div className="userShowInfo">
        <PhoneAndroid className="userShowIcon" />
        <span className="userShowInfoTitle">+1 123 456 67</span>
      </div>
      <div className="userShowInfo">
        <FaceIcon className="userShowIcon" />
        <span className="userShowInfoTitle">Yves Mutshipayi</span>
      </div>
      <div className="userShowInfo">
        <LocationSearching className="userShowIcon" />
        <span className="userShowInfoTitle">Uvira</span>
      </div>
    </div>
  </div>
);

export default PatientCard;
