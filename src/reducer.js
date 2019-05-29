import { useEffect, useReducer, useState } from "react";
import { getDeviceInfo } from "./actions";

/*
  Shape:

  id is a hash of printKey.url

    printKeys: 
      [id]: {
        url: Url,
        lastChecked: Date | null
      }

    printers: {
      [id]: {
        "status": "online",
        "name": "Andrew's Printer",
        "owner": "andrewn"
      }
    }
*/
const emptyState = {
  printKeys: {},
  printers: {}
};

function reducer(state, action) {
  switch (action.type) {
    case "hydrate":
      return action.state;
    case "add":
      return {
        ...state,
        printKeys: {
          ...state.printKeys,
          [action.id]: action.info
        }
      };
    case "status":
      return {
        ...state,
        printKeys: {
          ...state.printKeys,
          [action.id]: {
            ...state.printKeys[action.id],
            lastUpdatedAt: new Date().toISOString()
          }
        },
        printers: {
          ...state.printers,
          [action.id]: action.printer
        }
      };
    default:
      throw new Error();
  }
}

export function getPrinterById(state, id) {
  return state.printers[id];
}

export default function createReducer() {
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, emptyState);

  useEffect(
    function() {
      if (isLoading) {
        const data = JSON.parse(localStorage.getItem("little-printers"));
        if (data) {
          dispatch({ type: "hydrate", state: data });
        }

        setIsLoading(false);

        // TODO: This shouldn't go here
        const printKeys = Object.entries(state.printKeys);
        console.log("Fetching status for printKeys", printKeys);
        printKeys.forEach(([id, { url }]) => getDeviceInfo(dispatch, id, url));
      } else {
        const serialised = JSON.stringify(state);
        console.log("persist state", serialised);
        localStorage.setItem("little-printers", serialised);
      }
    },
    [state]
  );

  return [{ ...state, isLoading }, dispatch];
}
