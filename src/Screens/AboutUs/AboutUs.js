import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Row, Col, Button } from 'antd';
import './AboutUs.scss'

class AboutUs extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="gsi-about pattern-1 py-5">
                    <div className="container mx-auto ">
                        <Row gutter={[30, 20]} align="center" className="pb-3 ">
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} className="center-contents" >
                                 <div class="title-section text-center mb-4">
                                     <h1 class="text-blue text-center d-inline border-left-3 pl-3  border-danger  pr-3">Contact Us</h1>
                                <p class="mt-4">Fill out the form below and we will contact you as soon as possible.</p>
                                </div>
                            </Col>                        
                        </Row>

                        <Row gutter={[30, 20]} align="center" className="pb-3 ">
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} className="center-contents" >
                            <div class="title-section text-center mb-4">
                                <form className='contact-form'>
                                    <input type="text" class='input-box' name='name' placeholder='Your Name'></input>
                                    <input type="text" class='input-box' name='name' placeholder='Your Email'></input>
                                    <input type="text" class='input-box' name='name' placeholder='Phone Number'></input>
                                    <textarea type='text' class='input-box' name='Message' placeholder='Message'></textarea>
                                    <input type="submit" class='bg-red-gradient' value="Send Now"></input>
                                </form>
                           </div>
                            </Col>
                        </Row>
                    </div>
                </section>

                <section className="gsi-location bg-blue pattern-1">
                    <div className="container-fluid mx-auto">
                        <Row align="center" className="">
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} className="center-contents" >
                                 <div class="map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.4939379298644!2d101.32767281475681!3d2.9603563978439364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cd00b2e94f241d%3A0x1e25b47118688a3a!2s(Westport)Global%20Special%20ty%20Ingredients%20(M)%20Sdn.%20Bhd.!5e0!3m2!1sen!2sin!4v1661843310287!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </Col>   
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} className="center-contents" >
                            <div class="address">
                                 <div class="title-section mb-4">
                                     <h1 class="text-white d-inline border-left-3 pl-3  border-danger  pr-3">Our Main Office</h1>
                                </div>
                                <h4 class='text-red'>Global Specialty Ingredients (M) Sdn. Bhd.</h4>
                                <p class='text-white mt-4'>Lot 16 & 18, Jalan Permata 9/KS9 Taman Perindustrian Air Hitam, 41200 Klang Selangor Darul Ehsan, MALAYSIA</p>
                                <div className="d-flex mt-4">
                                    <ul>
                                        <h6 class='text-red'>Phone</h6>
                                        <p class='text-white'>+6018 3123 7171</p>
                                    </ul>
                                    <ul>
                                        <h6 class='text-red'>Email</h6>
                                        <p class='text-white'>marketing@gsiworldwide.com</p>
                                    </ul>
                                </div>
                                <a href="#" class='text-white btn mt-4'>Make Your Key Account Manager</a>
                            </div>
                            </Col>                     
                        </Row>
                    </div>
                </section>

            </React.Fragment>
        )
    }
}
export default withRouter(AboutUs)