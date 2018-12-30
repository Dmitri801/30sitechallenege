import React, { Component } from 'react'
import GalleryModal from './GalleryModal'
import ImageGallery from './ImageGallery'
import Bio from './Bio'
const imagesArr = [
  {
    src:
      'https://images.unsplash.com/photo-1519220407669-06f9912b4aca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    title: 'image title',
    description: 'image description',
  },
  {
    src:
      'https://images.unsplash.com/photo-1494052140170-40523e3a90d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    title: 'image title',
    description: 'image description',
  },
  {
    src:
      'https://images.unsplash.com/photo-1474947978278-736eb28cb7c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    title: 'image title',
    description: 'image description',
  },
  {
    src:
      'https://images.unsplash.com/photo-1524157808567-b68e6efdf485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    title: 'image title',
    description: 'image description',
  },
]
class Story extends Component {
  state = {
    showModal: false,
    url: '',
  }

  openModal = url => {
    this.setState({
      showModal: true,
      url: url,
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false,
      url: '',
    })

    const scrollingElement = document.scrollingElement || document.body
    scrollingElement.scrollTop = scrollingElement.scrollHeight
  }
  render() {
    return (
      <div>
        <GalleryModal
          closeModal={this.closeModal}
          url={this.state.url}
          isOpen={this.state.showModal}
        />
        <Bio />
        <div className="event-invite_gallery">
          {imagesArr.map((img, index) => (
            <ImageGallery
              key={index}
              index={index}
              imageSrc={img.src}
              openModal={this.openModal}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Story
