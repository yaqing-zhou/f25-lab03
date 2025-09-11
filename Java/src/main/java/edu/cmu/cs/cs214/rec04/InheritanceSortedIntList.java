package edu.cmu.cs.cs214.rec04;


/**
 * InheritanceSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */

public class InheritanceSortedIntList extends SortedIntList {
    // Write your implementation below with API documentation
    private int totalAdded = 0;

    private boolean skipCount = false; // whether count should be skipped

    public int getTotalAdded(){
        return totalAdded;
    }

    @Override
    public boolean add(int num){
        if (!skipCount) {
            totalAdded++;
        }
        return super.add(num);
    }

    @Override
    public boolean addAll(IntegerList list) {
        totalAdded += list.size();
        skipCount = true; // avoid double counting when super class calls addAll

        try {
            return super.addAll(list);
        } finally {
            skipCount = false; // restore state
        }
    }

}