import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { UserDetails } from ".";

const initialState = { auth: {}, user: {} };
const userTestState = {
  auth: { userId: 1 },
  user: {
    user: {
      id: 1,
      userName: "vo3xel",
      password: "123456",
      email: "vo3xel@gmail.com",
      firstName: "Michael",
      lastName: "Spitzer"
    }
  }
};

const mockStore = configureStore();
let store;

test("renders empty correctly", () => {
  store = mockStore(initialState);
  const { getByText, getByRole, container, asFragment } = render(
    <Provider store={store}>
      <UserDetails />
    </Provider>
  );
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div>
        User details for user (
        ):
      </div>
    </div>
  `);
});

test("renders user data correctly", () => {
  store = mockStore(userTestState);
  const { getByText, getByRole, container, asFragment } = render(
    <Provider store={store}>
      <UserDetails />
    </Provider>
  );
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div>
        User details for user (
        1
        ):
        <div>
          {"id":1,"userName":"vo3xel","password":"123456","email":"vo3xel@gmail.com","firstName":"Michael","lastName":"Spitzer"}
        </div>
      </div>
    </div>
  `);
});
