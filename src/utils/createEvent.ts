import { EventListenerCallback } from "../types";

export const createEvent = (eventName: string) => {
  const subscribe = (listener: EventListenerCallback) => {
    document.addEventListener(eventName, listener);
  };

  const unsubscribe = (listener: EventListenerCallback) => {
    document.removeEventListener(eventName, listener);
  };

  const dispatch = () => {
    document.dispatchEvent(new CustomEvent(eventName));
  };

  return { subscribe, unsubscribe, dispatch };
};
