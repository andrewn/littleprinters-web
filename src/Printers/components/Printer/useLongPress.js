export default function useLongPress({ onLongPress }) {
  const thresholdMs = 1000 * 1;
  let timerId = null;

  function onPointerDown(evt) {
    timerId = setTimeout(onLongPress, thresholdMs);
  }

  function onPointerUp(evt) {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }
  }

  return function () {
    return {
      onPointerDown,
      onPointerUp
    };
  };
}
