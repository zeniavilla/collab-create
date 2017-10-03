import React from 'react';

// styles
import '../../styles/components/Index.css';

// components
import { LinkContainer } from 'react-router-bootstrap';

const Index = () => {
  return (
    <div className="home-background">
      <h2>Create something spectacular</h2>
      <div className="home-body">
        collab|create provides a network of creative professionals throughout the world. Whether you're looking to connect with a fashion expert, build your portfolio, or collaborate on fun projects, you'll find the best team of creatives.
      </div>
      <LinkContainer to="/signup" className="btn-announcement">
        <button>Get started</button>
      </LinkContainer>
    </div>
  )
}

export default Index;