import React, { Component } from 'react';
import { Popover, Row, Col, Card, } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import './TableBox.scss';

class TableBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { columns, dataSource, actionIndex, cardHeaderIndex, cardFirstLabelIndex, viewType } = this.props;
        return (
            <div className="custom-background">
                {viewType === 'table' &&
                    <div className="custom-table">
                        <table>
                            <thead>
                                <tr>
                                    {columns.map((col) => {
                                        return <td>{col.title}</td>
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {dataSource.map((data) => {
                                    return <tr>
                                        {columns.map((col) => {
                                            if (col.render) {
                                                return <td>{col.render(data)}</td>
                                            } else {
                                                return <td>{data[col.dataIndex]}</td>
                                            }

                                        })}
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>}
                {viewType === 'card' && <div className="custom-card">
                    <Row gutter={[16, 16]}>
                        {dataSource.map((data) => {
                            const findAction = columns.find(val => val.dataIndex === 'custom_action')
                            const findCardLabel = columns.find(val => val.dataIndex === cardFirstLabelIndex)
                            return <Col xs={{ span: 24, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }}>
                                <Card
                                    hoverable
                                    style={{ width: '100%', marginTop: 16, boxShadow: '0 2px 20px 0 #E0E0E0' }}
                                    className="issued"
                                >
                                    <div className="custom-card-details">
                                        {columns.map((col) => {

                                        })}
                                        <div className="custom-card-status">
                                            {findAction && <div className="action">
                                                {findAction.render(data)}
                                            </div>}
                                            {cardHeaderIndex && <h3><i className="flaticon-progress-arrows" /> {data[cardHeaderIndex]}</h3>}
                                        </div>
                                        {findCardLabel && <div className="custom-card-title">
                                            <span>{findCardLabel.title}</span>
                                            <h2>{data[findCardLabel.dataIndex]}</h2>
                                        </div>}
                                        <div className="custom-card-otherdetails">
                                            <Row>
                                                {columns.map((col) => {
                                                    if (col.dataIndex !== cardHeaderIndex && col.dataIndex !== cardFirstLabelIndex && col.dataIndex !== actionIndex) {
                                                        return <Col xs={{ span: 24, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 12, order: 1 }} lg={{ span: 12, order: 1 }}>
                                                            <div className="details">
                                                                <span>{col.title}</span>
                                                                <p>{data[col.dataIndex]}</p>
                                                            </div>
                                                        </Col>
                                                    }
                                                })}
                                            </Row>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        })}
                    </Row>
                </div>}
            </div>
        );
    }
};

export default TableBox; 
