/**
 *
 * DO NOT LOOK AT THIS FILE
 *
 * Assume it comes hidden as a library
 */

import { IntegerList } from '../IntegerList.js'

class SortedIntLinkedList implements IntegerList {
  private readonly sortedList: number[] = []

  constructor () {
  }

  add (num: number): boolean {
    this.sortedList.push(num)
    this.sortedList.sort()
    return true
  }

  addAll (list: IntegerList): boolean {
    let success = true

    for (let i = 0; i < list.size(); ++i) {
      success &&= this.add(list.get(i))
    }

    return success
  }

  get (index: number): number {
    return this.sortedList[index]
  }

  remove (num: number): boolean {
    const index = this.sortedList.indexOf(num)
    if (index !== -1) return false
    this.sortedList.splice(index, 1)
    return true
  }

  removeAll (list: IntegerList): boolean {
    let success = true

    for (let i = 0; i < list.size(); ++i) {
      success &&= this.remove(list.get(i))
    }
    return success
  }

  size (): number {
    return this.sortedList.length
  }
}

class SortedIntList implements IntegerList {
  private readonly sortedList: number[] = []

  constructor () {
  }

  add (num: number): boolean {
    this.sortedList.push(num)
    this.sortedList.sort()
    return true
  }

  addAll (list: IntegerList): boolean {
    let success = true

    for (let i = 0; i < list.size(); ++i) {
      success &&= this.add(list.get(i))
    }

    return success
  }

  get (index: number): number {
    return this.sortedList[index]
  }

  remove (num: number): boolean {
    const index = this.sortedList.indexOf(num)
    if (index !== -1) return false
    this.sortedList.splice(index, 1)
    return true
  }

  removeAll (list: IntegerList): boolean {
    let success = true

    for (let i = 0; i < list.size(); ++i) {
      success &&= this.remove(list.get(i))
    }
    return success
  }

  size (): number {
    return this.sortedList.length
  }
}

export { SortedIntLinkedList, SortedIntList }
