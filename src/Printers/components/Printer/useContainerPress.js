import { useEffect } from 'react'

export default function useContainerPress({ enabled = true, elementRef, container = document.body, onContainerPress }) {
  if (elementRef == null) {
    throw new Error(`'elementRef' must be provided but it was '${elementRef}'`);
  }

  if (onContainerPress == null) {
    throw new Error(`'onContainerPress' must be provided but it was '${onContainerPress}'`);
  }

  const onClick = (evt) => {
    if (elementRef.current.contains(evt.target)) {
      return;
    }

    console.log('click');
    onContainerPress();
  }

  return useEffect(
    () => {
      if (enabled) {
        document.body.addEventListener('click', onClick);
      }

      return () => {
        document.body.removeEventListener('click', onClick)
      }
    }
  );
}
