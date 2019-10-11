
export class EventUtil {

  public static isLeftMouseButton(event: MouseEvent) {
    return event.button === 0;
  }

  public static isMiddleMouseButton(event: MouseEvent) {
    return event.button === 1;
  }

  public static isRightMouseButton(event: MouseEvent) {
    return event.button === 2;
  }


}
