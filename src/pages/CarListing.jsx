import React from 'react'
import { Container, Row, Col } from 'reactstrap';
// import Helmet from '../components/Helmet.js';
import CommonSection from '../components/Ui/CommonSection'
import CarItem from '../components/Ui/CarItem'
import CarData from '../assests/data/carData'
const CarListing = () => {
  return (
    <div title='Cars'>
      <CommonSection title='Car Listing' />

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="d-flex align-items-center gap-3 mb-5">

                {/* <span className='d-flex align-items-center gap-2'>
                  <i class="ri-sort-asc"></i>Sort By
                </span> */}
                {/* <select >
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select> */}
              </div>
            </Col>

            {
              CarData.map(item => 
              <CarItem item={item} key={item.id}/>)
            }
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default CarListing 