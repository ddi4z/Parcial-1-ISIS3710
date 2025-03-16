import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

export default function RobotsPage() {
  const [robots, setRobots] = useState([]);
  const [detailRobot, setDetailRobot] = useState(null);

  const url = "http://localhost:3001/robots";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setRobots(data));
  }, []);

  return (
    <Row className='mt-5'>
      <Col xs={12} lg={8}>
        <RobotList robots={robots} setDetailRobot={setDetailRobot} />
      </Col>
      <Col xs={12} lg={4}>
        {detailRobot && <RobotDetail robot={detailRobot} />}
      </Col>
    </Row>
  );
}

function RobotList({ robots, setDetailRobot }) {
  return (
    <Table bordered hover>
      <thead className='table-dark'>
        <tr>
          <th><FormattedMessage id="robots-id" /></th>
          <th><FormattedMessage id="robots-name" /></th>
          <th><FormattedMessage id="robots-model" /></th>
          <th><FormattedMessage id="robots-manufacturer" /></th>
        </tr>
      </thead>
      <tbody>
        {robots.map((robot) => (
          <ListRow key={robot.id} robot={robot} setRobot={setDetailRobot} />
        ))}
      </tbody>
    </Table>
  );
}

function ListRow({ robot, setRobot }) {
  return (
    <tr onClick={() => setRobot(robot)}>
      <td>{robot.id}</td>
      <td>{robot.nombre}</td>
      <td>{robot.modelo}</td>
      <td>{robot.empresaFabricante}</td>
    </tr>
  );
}

function RobotDetail({ robot }) {
  const imgUrl = `https://raw.githubusercontent.com/fai-aher/T34-Wiki-Backup/refs/heads/main/images/robot${robot.id}.png`

  return (
    <div className="d-flex flex-column border border-black" style={{ backgroundColor: 'rgba(217, 217, 217, 0.5)' }}>
      <p className="fw-bold text-center text-xl m-0 mt-3" >{robot.nombre}</p>
      <img className='mx-auto border border-black' src={imgUrl} alt={robot.nombre} style={{ width: '10em'}} />
      <div className='px-4'>
        <p className='m-0 mt-3'><strong><FormattedMessage id="robots-year" /></strong> {robot.añoFabricacion}</p>
        <p className='m-0'><strong><FormattedMessage id="robots-processing" /></strong> {robot.capacidadProcesamiento}</p>
        <p className='m-0 mb-3'><strong><FormattedMessage id="robots-humor" /></strong> {robot.humor}</p>
      </div>

    </div>
  );
}