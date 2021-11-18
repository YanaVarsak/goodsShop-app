import { Row, Col } from "antd";
import { Menu } from "../Menu";

import { Header } from "../Header";
import { Footer } from "../Footer";
export const StartPage: React.FC = () => {
  return (
  <>
        <Header />
        <Row>
          <Col xs={24} span={18} push={6} />
          <Col xs={24} span={6} pull={18}>
            <Menu categories={[]} />
          </Col>
        </Row>
        <Footer/>
</>
  );
};