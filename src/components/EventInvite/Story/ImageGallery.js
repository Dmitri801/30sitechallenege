import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand } from '@fortawesome/free-solid-svg-icons'
class ImageGallery extends Component {
  render() {
    const { imageSrc, index, openModal } = this.props
    return (
      <div className="img-container ">
        <img src={imageSrc} alt={index} />
        <div className="expand-icon">
          <FontAwesomeIcon
            onClick={() => {
              openModal(imageSrc)
              console.log(imageSrc)
            }}
            icon={faExpand}
          />
        </div>
      </div>
    )
  }
}

export default ImageGallery
