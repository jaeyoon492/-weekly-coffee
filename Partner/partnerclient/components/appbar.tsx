import Link from "next/link";

import { Navbar, Container, Nav } from "react-bootstrap";

const AppBar = () => {
  return (
    <Navbar bg="primary" expand="lg">
      <Container className="w-100">
        <Navbar.Brand className="ms-3">
          <Link href="/">
            <span className="text-light">Partner</span>
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default AppBar;
