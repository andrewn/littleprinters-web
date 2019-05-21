import { useEffect, useReducer, useState } from "react";

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

export default function createReducer() {
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, emptyState);

  useEffect(
    function() {
      if (isLoading) {
        const data = JSON.parse(localStorage.getItem("little-printers"));
        dispatch({ type: "hydrate", state: data });
        setIsLoading(false);
      } else {
        const serialised = JSON.stringify(state);
        console.log("persist state", serialised);
        localStorage.setItem("little-printers", serialised);
      }
    },
    [state]
  );

  return [state, dispatch];
}
