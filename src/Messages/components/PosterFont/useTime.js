import * as React from "react";

export default function() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(function() {
    function updateTime() {
      setTime(new Date());
    }
    const timerId = setInterval(updateTime, 1000 * 60);

    return function() {
      clearInterval(timerId);
    };
  }, []);

  return time;
}
