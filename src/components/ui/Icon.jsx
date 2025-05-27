'use client';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket, faBolt, faCrown, faCheck, faTimes, faClock, faCoins, 
  faChartLine, faBrain, faPaintBrush, faSearch, faShareAlt, faCalendarAlt,
  faComments, faRecycle, faHashtag, faPuzzlePiece, faSyncAlt, faLink,
  faRobot, faLightbulb, faChartArea, faUserSecret, faChartPie, faVideo,
  faPenFancy, faMagic, faThumbsUp, faUserTie, faBuilding, faStore,
  faShoppingCart, faMoneyBillWave, faTasks, faUsers, faStar,
  faArrowRight,
  faChevronDown,
  faBars
} from '@fortawesome/free-solid-svg-icons';

import { 
  faFacebookF,
  faTwitter,
  faXTwitter,
  faLinkedinIn, 
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

// Add icons to the library
library.add(
  faRocket, faBolt, faCrown, faCheck, faTimes, faClock, faCoins, 
  faChartLine, faBrain, faPaintBrush, faSearch, faShareAlt, faCalendarAlt,
  faComments, faRecycle, faHashtag, faPuzzlePiece, faSyncAlt, faLink,
  faRobot, faLightbulb, faChartArea, faUserSecret, faChartPie, faVideo,
  faPenFancy, faMagic, faThumbsUp, faUserTie, faBuilding, faStore,
  faShoppingCart, faMoneyBillWave, faTasks, faUsers, faStar,
  faArrowRight,
  faChevronDown,
  faBars,
  // Add brand icons
  faFacebookF,
  faTwitter,
  faXTwitter,
  faLinkedinIn,
  faInstagram,
  faYoutube
);

// Icon mapping
const iconMap = {
  'chart-pie': faChartPie,
  'paint-brush': faPaintBrush,
  'share-alt': faShareAlt,
  'search': faSearch,
  'arrow-right': faArrowRight,
  'chevron-down': faChevronDown,
  'bars': faBars,
  'times': faTimes,
  'chart-line': faChartLine,
  'robot': faRobot,
  'calendar-alt': faCalendarAlt,
  'comments': faComments,
  'bolt': faBolt,
  'user-tie': faUserTie,
  'store': faStore,
  'building': faBuilding,
  'shopping-cart': faShoppingCart,
  'check': faCheck,
  'magic': faMagic,
  'video': faVideo,
  'pen-fancy': faPenFancy,
  'thumbs-up': faThumbsUp,
  'brain': faBrain,
  'recycle': faRecycle,
  'hashtag': faHashtag,
  'puzzle-piece': faPuzzlePiece,
  // Add brand icons to mapping
  'facebook': faFacebookF,
  'twitter': faTwitter,
  'x-twitter': faXTwitter,
  'linkedin': faLinkedinIn,
  'instagram': faInstagram,
  'youtube': faYoutube
};

export default function Icon({ icon, className }) {
  return (
    <FontAwesomeIcon 
      icon={iconMap[icon] || faChartPie} 
      className={className || ''} 
    />
  );
} 