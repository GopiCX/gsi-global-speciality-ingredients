import React from 'react';
import { withRouter } from 'react-router';
import { Col } from 'antd';
import { Timeline } from 'antd'
import './Events.scss'
import pointerIcon from '../../assets/images/events/pointer-icon.svg'

class EventsList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Timeline mode="alternate">
                    <Timeline.Item label="2023" >GULFOOD Dubai World Trading Center, UAE</Timeline.Item>
                    <Timeline.Item label="2022" >SupplySide West Las Vegas, USA</Timeline.Item>
                    <Timeline.Item label="2022" >GULFOOD MANUFACTURING Dubai, UAE</Timeline.Item>
                    <Timeline.Item label="2022" >Food Ingredients Asia Indonesia</Timeline.Item>
                    <Timeline.Item label="2019" >Vitafoods Asia, Singapore</Timeline.Item>
                    <Timeline.Item label="2019">GULFOOD Dubai, UAE</Timeline.Item>
                    <Timeline.Item label="2019">Food Ingredients Asia</Timeline.Item>
                    <Timeline.Item label="2019">Africa’s Big 7, South Africa</Timeline.Item>
                    <Timeline.Item label="2018">MIHAS</Timeline.Item>
                    <Timeline.Item label="2018">GULFOOD Dubai, UAE</Timeline.Item>
                    <Timeline.Item label="2017">International Palm Oil Congress (PIPOC) Exhibition</Timeline.Item>
                    <Timeline.Item label="2017">ANUGA, Cologne, GERMANY</Timeline.Item>
                    <Timeline.Item label="2015">International Palm Oil Congress (PIPOC) Exhibition</Timeline.Item>
                    <Timeline.Item label="2015">GULFOOD Dubai, UAE</Timeline.Item>
                    <Timeline.Item label="2014">SIAL Exhibition France</Timeline.Item>
                    <Timeline.Item label="2013">International Palm Oil Congress (PIPOC) Exhibition</Timeline.Item>
                    <Timeline.Item label="2011">International Palm Oil Congress (PIPOC) Exhibition</Timeline.Item>
                    <Timeline.Item label="2010">Oil and Fats International Asia Exhibition</Timeline.Item>
                </Timeline>
            </React.Fragment >
        )
    }
}
export default withRouter(EventsList)