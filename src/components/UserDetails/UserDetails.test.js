import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { UserDetails } from ".";
import thunk from "redux-thunk";
import config from "react-global-configuration";
import { configuration } from "../../config/dev";

config.set(configuration);

const middlewares = [thunk];
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

const mockStore = configureStore(middlewares);
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
      <div
        class="row"
      >
        <div
          class="col-lg-6"
        >
          <div
            class="card"
          >
            <div
              class="card-body"
            >
              <div
                class="card-title h5"
              >
                Authenticated user action: get user details
              </div>
              <p
                class="card-text"
              >
                This action returns detailed information about the logged in user.
              </p>
            </div>
          </div>
        </div>
        <div
          class="col-lg-6"
        >
          <div
            class="card"
          >
            <div
              class="card-body"
            >
              <div
                class="card-title h5"
              >
                Authenticated user action: set threejs scene box size
              </div>
              <p
                class="card-text"
              >
                This action sets the box size in the threejs scene.
              </p>
            </div>
          </div>
        </div>
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
      <div
        class="row"
      >
        <div
          class="col-lg-6"
        >
          <div
            class="card"
          >
            <div
              class="card-body"
            >
              <div
                class="card-title h5"
              >
                Authenticated user action: get user details
              </div>
              <p
                class="card-text"
              >
                This action returns detailed information about the logged in user.
              </p>
              <button
                class="btn btn-primary"
                type="button"
              >
                Get details of user
              </button>
            </div>
          </div>
        </div>
        <div
          class="col-lg-6"
        >
          <div
            class="card"
          >
            <div
              class="card-body"
            >
              <div
                class="card-title h5"
              >
                Authenticated user action: set threejs scene box size
              </div>
              <p
                class="card-text"
              >
                This action sets the box size in the threejs scene.
              </p>
              <div
                class="dropdown"
              >
                <button
                  aria-expanded="false"
                  aria-haspopup="true"
                  class="dropdown-toggle btn btn-primary"
                  id="dropdown-basic-button"
                  type="button"
                >
                  Box size
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
});
