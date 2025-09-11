import { SortedIntList } from './hidden/SortedIntListLibrary.js'
import { IntegerList } from './IntegerList.js'

/**
 * InheritanceSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */

class InheritanceSortedIntList extends SortedIntList {
  // Write your implementation below with API documentation
  private totalAdded: number
  private skipCount: boolean

  constructor () {
    super()
    this.totalAdded = 0
    this.skipCount = false
  }

  getTotalAdded (): number {
    return this.totalAdded
  }

  add (num: number): boolean {
    if (!this.skipCount) {
      this.totalAdded += 1
    }
    return super.add(num)
  }

  addAll (list: IntegerList): boolean {
    this.totalAdded += list.size()
    this.skipCount = true
    try {
      return super.addAll(list)
    } finally {
      this.skipCount = false
    }
  }
}

export { InheritanceSortedIntList }
