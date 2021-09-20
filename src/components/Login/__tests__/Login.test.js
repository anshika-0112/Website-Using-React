import { fireEvent, screen, render, waitFor } from "@testing-library/react";
import LoginContainer from "../LoginContainer";
import { MemoryRouter } from "react-router-dom";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));
let container;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test("Username input is getting changed according to user", () => {
  render(<LoginContainer />, container);
  const userNameInput = screen.getByTestId("userName");
  fireEvent.change(userNameInput, {
    target: {
      value: "test name",
    },
  });
  expect(userNameInput.value).toBe("test name");
});

test("Password input is getting changed according to user", () => {
  render(<LoginContainer />, container);
  const passwordInput = screen.getByTestId("password");
  fireEvent.change(passwordInput, {
    target: {
      value: "13BBY",
    },
  });
  expect(passwordInput.value).toBe("13BBY");
});

test("Login page contains a Sign in button", () => {
  render(<LoginContainer />, container);
  const signInBtn = screen.getByTestId("signInBtn");
  expect(signInBtn).toBeInTheDocument();
});

// test("If user enters correct details page should be directed to home", async () => {
//   render(
//     <MemoryRouter>
//       <LoginContainer />
//     </MemoryRouter>,
//     container
//   );
//   const signInBtn = screen.getByTestId("signInBtn");
//   const promise = Promise.resolve({
//     json: () => Promise.resolve({ count: 1 }),
//   });
//   global.fetch = jest.fn(() => {
//     return promise;
//   });
//   fireEvent.click(signInBtn);
//   await waitFor(() => {
//     expect(mockHistoryPush).toHaveBeenCalledWith("/home");
//   });
// });

it("If user enters wrong details erroe message should be shown", async () => {
  render(<LoginContainer />, container);
  const signInBtn = screen.getByTestId("signInBtn");
  const promise = Promise.resolve({
    json: () => Promise.resolve({ count: 0 }),
  });
  global.fetch = jest.fn(() => {
    return promise;
  });
  fireEvent.click(signInBtn);

  await waitFor(() => {
    const error = screen.getByTestId("error");
    expect(error).toBeInTheDocument();
  });
});
