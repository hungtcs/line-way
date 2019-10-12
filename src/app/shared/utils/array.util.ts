
export class ArrayUtil {

  /**
   * 将数组映射为Map
   *
   * @author 鸿则 <hungtcs@163.com>
   * @date 2019-10-11
   * @static
   * @template T
   * @param {Array<T>} array
   * @param {keyof T} key
   * @returns
   */
  public static map2map<T>(array: Array<T>, key: keyof T) {
    return array.reduce((map, item) => map.set(item[key], item), new Map<any, T>())
  }

}
