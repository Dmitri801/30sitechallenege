import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
class GalleryModal extends Component {
  render() {
    if (!this.props.isOpen) {
      return null
    }
    return (
      <div
        className="event-invite_modal-overlay"
        onClick={this.props.closeModal}
        name={this.props.name}
      >
        <div
          style={{
            background: `url(${this.props.url})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'none',
            backgroundPosition: 'center',
          }}
          className="event-invite_modal-body"
        >
          <div
            className="event-invite_modal-close"
            onClick={this.props.onClick}
          >
            <FontAwesomeIcon
              onClick={() => this.props.closeModal()}
              icon={faTimes}
            />
          </div>

          <img src={this.props.src} alt="wedding" />
        </div>
      </div>
    )
  }
}

export default GalleryModal
