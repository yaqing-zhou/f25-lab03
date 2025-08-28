import { IntegerList } from './IntegerList.js'

/**
 * AbstractIntList -- a list of integers.
 *
 * @author Nora Shoemaker
 *
 */
abstract class AbstractIntList implements IntegerList {
  /**
     * Adds the specified int to the list.
     *
     * @param num an integer to be added to the list
     * @return true if the list is changed as a result of the call
     */
  abstract add (num: number): boolean

  /**
     * Adds all of the elements of the IntegerList to the list.
     * Calls add() on each element of list. Can be overwritten
     * for more specific behavior.
     *
     * @param list IntegerList containing elements to be added to the list
     * @return true if the list changed as a result of the call
     */
  public addAll (list: IntegerList): boolean {
    let success = false

    for (let i = 0; i < list.size(); i++) {
      success ||= this.add(list.get(i))
    }

    return success
  }

  /**
     * Returns the integer at the specified position in this list.
     *
     * @param index index of the element to return
     * @return the element at the specified position in this list
     */
  abstract get (index: number): number

  /**
     * Removes the first occurrence of the specified element from the list,
     * if it is present (optional operation).
     *
     * @param num an integer to be removed from the list, if present
     * @return true if an element was removed as a result of this call
     */
  abstract remove (num: number): boolean

  /**
     * Removes from the list all of its elements that are contained in the
     * specified IntegerList.
     *
     * @param list IntegerList containing elements to be removed from
     * the list
     * @return true if the list changed as a result of the call
     */
  abstract removeAll (list: IntegerList): boolean

  /**
     * Returns the number of elements in this list. If this list contains
     * more than Integer.MAX_VALUE elements, returns Integer.MAX_VALUE.
     *
     * @return number of elements in the list
     */
  abstract size (): number
}

export { AbstractIntList }
