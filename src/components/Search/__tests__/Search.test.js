import { fireEvent, screen, render, waitFor } from "@testing-library/react";
import Search from "../Search";
import HomeContainer from "../../Home/HomeContainer";
import { BrowserRouter, MemoryRouter, Router } from "react-router-dom";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

test("Search page should contain a search bar", () => {
  render(<Search />);
  const searchBar = screen.getByTestId("searchBar");
  expect(searchBar).toBeInTheDocument();
});

test("when  clicked on view Button of Planet Category, whole planet list is shown on search page", async () => {
  render(<HomeContainer />);
  const planetBtn = screen.getByTestId("planetBtn");

  fireEvent.click(planetBtn);
  const searchList = [
    {
      name: "test",
      url: "https://swapi.dev/api/test/1/",
    },
  ];
  render(
    <BrowserRouter>
      <Search cName="planets" searchList={searchList} />
    </BrowserRouter>
  );

  await waitFor(() => {
    const planetList = screen.getByTestId("planetList");
    expect(planetList).toBeInTheDocument();
  });
});

test("when  clicked on view Button of People Category, whole people list is shown on search page", async () => {
  render(<HomeContainer />);
  const peopleBtn = screen.getByTestId("peopleBtn");

  fireEvent.click(peopleBtn);
  const searchList = [
    {
      name: "test people",
      url: "https://swapi.dev/api/test/1/",
    },
  ];
  render(
    <BrowserRouter>
      <Search cName="people" searchList={searchList} />
    </BrowserRouter>
  );

  await waitFor(() => {
    const peopleList = screen.getByTestId("peopleList");
    expect(peopleList).toBeInTheDocument();
  });
});

test("when  clicked on view Button of film Category, whole film list is shown on search page", async () => {
  render(<HomeContainer />);
  const filmBtn = screen.getByTestId("filmBtn");

  fireEvent.click(filmBtn);
  const searchList = [
    {
      name: "test film name",
      url: "https://swapi.dev/api/test/1/",
    },
  ];
  render(<Search cName="films" searchList={searchList} />);

  await waitFor(() => {
    const filmList = screen.getByTestId("filmList");
    expect(filmList).toBeInTheDocument();
  });
});
