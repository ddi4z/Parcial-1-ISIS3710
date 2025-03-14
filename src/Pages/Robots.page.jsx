import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

export default function RobotsPage() {
  const [robots, setRobots] = useState([]);
  const [detailRobot, setDetailRobot] = useState(null);

  const url = "http://localhost:3001/robots";
  console.log(robots)

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setRobots(data));
  }, []);

  return (
    <Row className='mt-5'>
      <Col xs={6} lg={9}>
        <RobotList robots={robots} setDetailRobot={setDetailRobot} />
      </Col>
      <Col xs={6} lg={3}>
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
          <th>ID</th>
          <th>Nombre</th>
          <th>Modelo</th>
          <th>Empresa fabricante</th>
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
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', width: '250px', backgroundColor: '#e0e0e0'}}>
      <h3 style={{ padding: '8px', margin: '-16px -16px 10px -16px'}}>{robot.nombre}</h3>
      <img src={robot.imagen} alt={robot.nombre} style={{ width: '100%', border: '1px solid #ccc' }} />
      <p><strong>→ Año de Fabricación:</strong> {robot.anioFabricacion}</p>
      <p><strong>→ Capacidad de Procesamiento:</strong> {robot.capacidadProcesamiento}</p>
      <p><strong>→ Humor:</strong> {robot.humor}</p>
    </div>
  );
}
