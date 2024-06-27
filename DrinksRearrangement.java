/*
 In a shop, there are two rows assigned for drinks X, Y. X and Y contains m and n drinks respectively and sorted according to two their prices. The store manager wants to rearrange the drinks such that.

* Every drink in row y is expensive than drinks in row x.
* X and Y contain the same no of drinks as the previous arrangement and sorted according to price.

Print the price of drinks of the X and Y arrays in separate lines with single spaces. Do the conversion in-place and without using any other data structure.
 */

public class DrinksRearrangement {

    // Method to rearrange drinks in-place
    public static void rearrangeDrinks(int[] X, int[] Y) {
        int m = X.length;
        int n = Y.length;

        for (int i = 0; i < m; i++) {
            if (X[i] > Y[0]) {
                // Swap X[i] and Y[0]
                int temp = X[i];
                X[i] = Y[0];
                Y[0] = temp;

                // Sort Y to maintain order
                int first = Y[0];
                int k;
                for (k = 1; k < n && Y[k] < first; k++) {
                    Y[k - 1] = Y[k];
                }
                Y[k - 1] = first;
            }
        }
    }

    public static void main(String[] args) {
        int[] X = {1, 4, 7, 8, 10};
        int[] Y = {2, 3, 9};

        rearrangeDrinks(X, Y);

        // Print the rearranged X array
        for (int price : X) {
            System.out.print(price + " ");
        }
        System.out.println();

        // Print the rearranged Y array
        for (int price : Y) {
            System.out.print(price + " ");
        }
    }
}
