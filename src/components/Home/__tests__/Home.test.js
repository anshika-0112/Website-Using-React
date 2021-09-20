import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "../Home";
import HomeContainer from "../HomeContainer";
import { MemoryRouter, Router } from "react-router-dom";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

test("Home page contains a planet list", async () => {
  render(<Home />);
  await waitFor(() => {
    const planet = screen.getByTestId("planet");
    expect(planet).toBeInTheDocument();
  });
});

test("Home page contains a film list", async () => {
  render(<Home />);
  await waitFor(() => {
    const planet = screen.getByTestId("film");
    expect(planet).toBeInTheDocument();
  });
});

test("Home page contains a people list", async () => {
  render(<Home />);
  await waitFor(() => {
    const planet = screen.getByTestId("people");
    expect(planet).toBeInTheDocument();
  });
});

test("when clicked on view Button of Planet Category, user is redirected to search page with url-> '/search/planets'", () => {
  render(
    <MemoryRouter>
      <HomeContainer />
    </MemoryRouter>
  );
  const planetBtn = screen.getByTestId("planetBtn");

  fireEvent.click(planetBtn);
  expect(mockHistoryPush).toHaveBeenCalledWith("/search/planets");
});

test("when clicked on view Button of Film Category, user is redirected to search page with url-> '/search/films'", () => {
  render(
    <MemoryRouter>
      <HomeContainer />
    </MemoryRouter>
  );
  const filmBtn = screen.getByTestId("filmBtn");

  fireEvent.click(filmBtn);
  expect(mockHistoryPush).toHaveBeenCalledWith("/search/films");
});

test("when clicked on view Button of People Category, user is redirected to search page with url-> '/search/people'", () => {
  render(
    <MemoryRouter>
      <HomeContainer />
    </MemoryRouter>
  );
  const peopleBtn = screen.getByTestId("peopleBtn");

  fireEvent.click(peopleBtn);
  expect(mockHistoryPush).toHaveBeenCalledWith("/search/people");
});
