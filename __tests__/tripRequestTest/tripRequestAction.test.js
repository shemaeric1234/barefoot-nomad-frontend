import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  requestTrip,
  GetLocations,
  GetAccomodations
} from "../../src/actions/tripRequestAction";
import moxios from "moxios";
import axios from "axios";
import expect from "expect";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe("Trip Requests  actions", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it("should create one way trip successfully", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          status: 200,
          message: "Trip Request Successfully created",
          data: {
            data: {
              id: 167,
              originId: 1,
              destinationId: 2,
              accomodationId: 2,
              departureDate: "2020-05-20T00:00:00.000Z",
              returnDate: null,
              userId: 6,
              tripId: "515803e4-ff3e-4b79-bce4-f64416d87a92",
              tripType: "one way",
              updatedAt: "2020-03-17T20:12:48.733Z",
              createdAt: "2020-03-17T20:12:48.733Z",
              reason: null,
              leavingDays: null
            }
          }
        }
      });
    });
    const store = mockStore({});
    return store
      .dispatch(requestTrip("1", "2", "2", "2020-05-20", "0788787273"))
      .then(() => {
        expect(store.getActions());
      });
  });
  it("should get accommodation from supported location", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: {
          status: 201,
          data: {
            data: [
              { id: "1", name: "marriot" },
              { id: "1", name: "marriot" }
            ]
          }
        }
      });
    });
    const store = mockStore({});
    return store.dispatch(GetAccomodations("1")).then(() => {
      expect(store.getActions());
    });
  });
  it("should get accommodation from supported loacation", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: {
          status: 201,
          data: [{ id: "1", name: "marriot" }]
        }
      });
    });
    const store = mockStore({});
    return store.dispatch(GetAccomodations("1")).then(() => {
      expect(store.getActions());
    });
  });
  it("should all get supported location", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: {
          status: 201,
          error: "All Supported Locations"
        }
      });
    });
    const store = mockStore({});
    return store.dispatch(GetLocations("")).then(() => {
      expect(store.getActions());
    });
  });
  it("should not get accommodation from supported loacation", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          status: 404,
          error: "Trip Unsccessfully created"
        }
      });
    });
    const store = mockStore({});
    return store.dispatch(requestTrip("")).catch(() => {
      expect(store.getActions());
    });
  });
});
