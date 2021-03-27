type keys = 'languageChange' | 'cartItemsChange' | 'totalChange';
type events = Partial<{[key in keys]: Function[]}>;
type callback = (...args: any[]) => void;

class EventLayer {
  private events: events = {}
  public static readonly instance = new EventLayer();
  private constructor() {}

  /**
   * @description dispatch a event and pass to it's callbacks some args
   * @param eventName 
   * @param args 
   * @example eventLayer.emit('eventName', 1, 2, 3...)
   */
  public emit(eventName: keys, ...args: any[]) {
    this.events[eventName]?.forEach(callback => callback(...args));
  }

  /**
   * @description subscribes callback to event queue and returns it's identifier
   * @param eventName name of event to handle
   * @param callback callback for event
   * @example eventLayer.on('eventName', () => {});
   */
  public on(eventName: keys, callback: callback) {
    if(!this.events[eventName]) {
      this.events[eventName] = [];
    }
    const index = this.events[eventName]?.push(callback);
    return {
      name: eventName,
      index: (index as number) - 1
    };
  }

  /**
   * @description unsubscribe callback from event queue
   * @example eventLayer.off(eventLayer.on('eventName', () => {}))
   */
  public off(eventIndentify: {name: keys; index: number}) {
    this.events[eventIndentify.name]?.splice(eventIndentify.index, 1);
  }
}

export const eventLayer = EventLayer.instance;
