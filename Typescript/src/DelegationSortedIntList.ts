/**
 * DelegationSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */

import { SortedIntList } from './hidden/SortedIntListLibrary'
import { IntegerList } from './IntegerList'

class DelegationSortedIntList {
  // Write your implementation below with API documentatioin
  private readonly delegate: SortedIntList
  private totalAdded: number

  constructor () {
    this.delegate = new SortedIntList()
    this.totalAdded = 0
  }

  getTotalAdded (): number {
    return this.totalAdded
  }

  add (num: number): boolean {
    this.totalAdded += 1
    return this.delegate.add(num)
  }

  addAll (list: IntegerList): boolean {
    this.totalAdded += list.size()
    return this.delegate.addAll(list)
  }

  get (index: number): number {
    return this.delegate.get(index)
  }

  remove (num: number): boolean {
    return this.delegate.remove(num)
  }

  removeAll (list: IntegerList): boolean {
    return this.delegate.removeAll(list)
  }

  size (): number {
    return this.delegate.size()
  }
}

export { DelegationSortedIntList }
