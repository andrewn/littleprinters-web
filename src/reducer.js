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

    networkState: "dormant" | "sending" | "failed"
*/
const emptyState = {
  printKeys: {},
  printers: {},
  networkState: "dormant",
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
          [action.id]: action.info,
        },
      };
    case "delete":
      const printers = { ...state.printers };
      delete printers[action.id];

      const printKeys = { ...state.printKeys };
      delete printKeys[action.id];

      return {
        ...state,
        printers,
        printKeys,
      };
    case "status":
      return {
        ...state,
        printKeys: {
          ...state.printKeys,
          [action.id]: {
            ...state.printKeys[action.id],
            lastUpdatedAt: new Date().toISOString(),
          },
        },
        printers: {
          ...state.printers,
          [action.id]: action.printer,
        },
      };
    case "sending":
      return {
        ...state,
        networkState: "sending",
      };
    case "success":
    case "failed":
      return {
        ...state,
        networkState: "dormant",
      };
    default:
      console.warn("Unhandled action", action);
      throw new Error();
  }
}

export function getPrinterById(state, id) {
  return { ...state.printers[id], ...state.printKeys[id] };
}

export default function useAppReducer() {
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, emptyState);

  useEffect(
    function () {
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
        const copied = { ...state };
        delete copied.networkState;

        const serialised = JSON.stringify(copied);
        console.log("persist state", serialised);

        localStorage.setItem("little-printers", serialised);
      }
    },
    [isLoading, state]
  );

  return [{ ...state, isLoading }, dispatch];
}
