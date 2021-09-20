import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";
import { BrowserRouter } from "react-router-dom";
import NavbarContainer from "../NavbarContainer";

test("Navbar renders a <Home/>", () => {
  const auth = { user: "test name" };
  render(
    <BrowserRouter>
      <Navbar auth={auth} />
    </BrowserRouter>
  );
  const home = screen.getByTestId("home");
  expect(home).toBeInTheDocument();
});

test("Navbar renders a <About/>", () => {
  const auth = { user: "test name" };
  render(
    <BrowserRouter>
      <Navbar auth={auth} />
    </BrowserRouter>
  );
  const about = screen.getByTestId("about");
  expect(about).toBeInTheDocument();
});

test("Navbar renders a <Contact/>", () => {
  const auth = { user: "test name" };
  render(
    <BrowserRouter>
      <Navbar auth={auth} />
    </BrowserRouter>
  );
  const contact = screen.getByTestId("contact");
  expect(contact).toBeInTheDocument();
});

test("if user is signed in show signout button on Navbar", () => {
  const auth = { user: "test name" };
  render(
    <BrowserRouter>
      <Navbar auth={auth} />
    </BrowserRouter>
  );
  const signoutBtn = screen.getByTestId("signoutBtn");
  expect(signoutBtn).toBeInTheDocument();
});

test("if user is not signed in, sign out button is not shown ", () => {
  const auth = { user: "" };
  render(
    <BrowserRouter>
      <Navbar auth={auth} />
    </BrowserRouter>
  );
  const signoutBtn = screen.queryByTestId("signoutBtn");
  expect(signoutBtn).not.toBeInTheDocument();
});
