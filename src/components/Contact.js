import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import { MdContacts } from "react-icons/md";
import { MdPersonPin } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col size={12} md={6}>
            <h2>
              <MdContacts className="mb-1" /> Kết nối với tôi
            </h2>
            <Row className="p-3">
              <Col size={12} sm={6} className="px-1 p-3">
                <h3>
                  <MdPersonPin className="mb-1" /> Trần Hoàng Việt
                </h3>
              </Col>
              <Col size={12} sm={6} className="px-1 p-3">
                <h3>
                  <FaBirthdayCake className="mb-2" /> 07/12/1986
                </h3>
              </Col>
              <Col size={12} sm={6} className="px-1 p-3">
                <h3>
                  <MdEmail className="mb-1" /> hoavee@gmail.com
                </h3>
              </Col>
              <Col size={12} sm={6} className="px-1 p-3">
                <h3>
                  <BsPhoneVibrateFill className="mb-1" /> 097 456 9396 (Zalo)
                </h3>
              </Col>
              <Col size={12} className="px-1 p-3">
                <h3>
                  <IoHome className="mb-2" /> 114/62 Phạm Văn Chiêu, Phường 9,
                  Gò Vấp, Tp Hồ Chí Minh
                </h3>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
