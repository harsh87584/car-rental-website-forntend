import React, { useEffect } from 'react'
import CarData from '../assests/data/carData'
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import BookingForm from '../components/Ui/BookingForm';
import PaymentMethod from '../components/Ui/PaymentMethod';
const CarDetails = () => {
  const { slug } = useParams()

  const singleCaritem = CarData.find(item => item.carName === slug)
  useEffect(()=>{
    window.scrollTo(0,0);
  },[singleCaritem]);

  return (
    <div title={singleCaritem.carName}>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <img src={singleCaritem.imgUrl} alt="" className='w-100' />
              {/* <button>submit</button> */}

            </Col>


            <Col lg='6'>
              <h2 className='section_title'>{singleCaritem.carName}</h2>
              <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                <h6 className="rent-price fw-bold fs-4">${singleCaritem.price}.00/Day</h6>
                <span className='d-flex align-items-center gap-2'>
                  <span style={{ color: '#f9a826' }}>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                  </span>
                  ({singleCaritem.rating} ratings)
                </span>
              </div>

              <p className="section_description">
                {singleCaritem.description}
              </p>

              <div className='d-flex align-items-center mt-3' style={{
                columnGap: '4rem'
              }}>
                <span className='d-flex align-items-center gap-1  section_description'>
                  <i class="ri-roadster-line " style={{
                    color: '#f9a826'
                  }}></i>{singleCaritem.model}
                </span>

                <span className='d-flex align-items-center gap-1 section_description'>
                  <i class="ri-settings-2-line" style={{
                    color: '#f9a826'
                  }}></i>{singleCaritem.automatic}
                </span>


                <span className='d-flex align-items-center gap-1 section_description'>
                  <i class="ri-timer-flash-line" style={{
                    color: '#f9a826'
                  }}></i>{singleCaritem.speed}
                </span>
              </div>




              <div className='d-flex align-items-center mt-3' style={{
                columnGap: '2.8rem'
              }}>
                <span className='d-flex align-items-center gap-1 section_description'>
                  <i class="ri-map-pin-line " style={{
                    color: '#f9a826'
                  }}></i>{singleCaritem.gps}
                </span>

                <span className='d-flex align-items-center gap-1 section_description'>
                  <i class="ri-wheelchair-line" style={{
                    color: '#f9a826'
                  }}></i>{singleCaritem.seatType}
                </span>


                <span className='d-flex align-items-center gap-1 section_description'>
                  <i class="ri-building-2-line" style={{
                    color: '#f9a826'
                  }}></i>{singleCaritem.brand}
                </span>
              </div>

            </Col>


            <Col lg='7' className='mt-5'>
              <div className="booking-info mt-5">
                <h5 className='mb-4 fw-bold'>Booking Information</h5>
                <BookingForm />
              </div>
            </Col>



            <Col lg='5' className='mt-5'>
              <div className="payment_info mt-5">
                <h5 className='mb-4 fw-bold'>payment Information</h5>
                <PaymentMethod />
              </div>
            </Col>

          </Row>
        </Container>
      </section>
    </div>
  )
}

export default CarDetails