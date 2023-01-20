import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import CommonSection from '../components/Ui/CommonSection'
import BlogList from '../components/Ui/BlogList'
const Blog = () => {
  return <div title='Blogs'>
  <CommonSection title='Blogs'/>
  <section>
    <Container>
      <Row>
        <BlogList />
        <BlogList />
      </Row>
    </Container>
  </section>
  </div>
}

export default Blog