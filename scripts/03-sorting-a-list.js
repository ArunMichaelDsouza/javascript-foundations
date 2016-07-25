/* Algorithm to sort a list using Selection Sort

Pseudo code : 
1 begin

2 set initial values in list 
  list = [3, 1, 25, 2, 4, 3245, 12, 66, 0, 67, 112]

3 perform selection sort on list

  loop from first to last position of list with iterator i
  set first position value as minimum
  min = i

  loop from first+1 position to last position of list with iterator j

  if list[j] < list[min]
    swap value located at list[min] with list[j]

  print sortedList
  
4 end
*/

// Implementation

(function() {
    'use strict';

    // Declare variables
    var list = [3, 1, 25, 2, 4, 3245, 12, 66, 0, 67, 112];

    // Sort list
    function selectionSort(list) {
        console.log('Original list : ' + list);
        for (var i = 0; i < list.length; i++) {
            var min = i;
            for (var j = i + 1; j < list.length; j++) {
                if (list[j] < list[min]) {
                    var temp = list[min];
                    list[min] = list[j];
                    list[j] = temp;
                }
            }
        }
        return list;
    }

    // Print sorted list
    var sortedList = selectionSort(list);
    console.log('Sorted list : ' + sortedList);
})();
