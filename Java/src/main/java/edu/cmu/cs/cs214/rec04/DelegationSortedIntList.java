package edu.cmu.cs.cs214.rec04;

/**
 * DelegationSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */

public class DelegationSortedIntList implements IntegerList {
    // Write your implementation below with API documentation
    private final SortedIntList delegate = new SortedIntList();

    private int totalAdded = 0;

    public int getTotalAdded() {
        return totalAdded;
    }

    @Override
    public boolean add(int num){
        totalAdded++;
        return delegate.add(num);
    }

    @Override
    public boolean addAll(IntegerList list) {

        boolean success = false;

        for (int i = 0; i < list.size(); i++)
        {
            success |= this.add(list.get(i));
        }

        return success;
    }

    @Override
    public int get(int index){
        return delegate.get(index);
    }

    @Override
    public boolean remove(int num){
        return delegate.remove(num);
    }

    @Override
    public boolean removeAll(IntegerList list){
        return delegate.removeAll(list);
    }

    @Override
    public int size() {
        return delegate.size();
    }
}