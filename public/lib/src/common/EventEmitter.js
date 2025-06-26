/**
 * A extendable class that creates an event system
 */
class EventEmitter {
  eventListeners = {};

  /**
   * Listens for a specific event, then executes a callback
   * @param {string} eventName The name of the event
   * @param {function} eventListener The callback to execute once the event has been emitted
   */
  on(eventName, eventListener) {
    !this.eventListeners[eventName] && (this.eventListeners[eventName] = []);
    this.eventListeners[eventName].push(eventListener);
  }

  /**
   * Listens for a specific event, then executes a callback the first time the event gets emitted
   * @param {string} eventName The name of the event
   * @param {function} eventListener The callback to execute the first time the event gets emitted
   */
  once(eventName, eventListener) {
    this.on(eventName, (...eventInfo) => {
      eventListener(...eventInfo);
      this.removeListener(eventName, eventListener);
    })
  }

  /**
   * Removes an existing event listener
   * @param {string} eventName The name of the event the listener was waiting for
   * @param {function} eventListener The listener's callback
   */
  removeListener(eventName, eventListener) {
    const listenerIndex = this.eventListeners[eventName].indexOf(eventListener);
    listenerIndex !== -1 &&  this.eventListeners[eventName].splice(listenerIndex, 1);
  }

  /**
   * Emits an event and triggers the callbacks for all relevant listeners
   * @param {string} eventName The name of the event to emit
   * @param  {...any} eventParams The parameters to pass to the listener callbacks
   */
  emit(eventName, ...eventParams) {
    if (this.eventListeners[eventName]) {
      for (const listener of this.eventListeners[eventName]) {
        listener(...eventParams);
      }
    }
  }
}

export { EventEmitter };
