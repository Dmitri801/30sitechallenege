import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (
    <footer className="event-invite_footer">
      <div className="info-copyright">
        &copy; 2019 DMI Web Design <Link to="/">Back To Projects</Link>
      </div>
      <div className="social-links">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </footer>
  )
}

export default Footer
