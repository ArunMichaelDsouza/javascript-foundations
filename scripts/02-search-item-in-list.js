/* Algorithm to search item in list using Linear Search

Pseudo code : 
1 begin

2 set initial values in list 
  list = [22, 67, 12, 4, 99, 33, 54, 678, 32, 998]

3 set item to search
  itemToSearch = 12

4 perform linear search in list
  find(itemToSearch in list) // Compare each item with itemToSearch one by one
  if list[i] == itemToSearch
    return list[i]

6 if found, return search result

7 end
*/

// Implementation

(function() {
    'use strict';

    // Declare variables
    var list = [22, 67, 12, 4, 99, 33, 54, 678, 32, 998],
        itemToSearch = 12;

    // Loop end callback
    function loopEnd() {
        console.log('Item not found!');
    }

    // Search item in list
    function linearSearch(list, item) {
        for (var i = 0; i < list.length || loopEnd(); i++) {
            if (list[i] === item) {
                return 'Item found at position : ' + parseInt(i + 1);
            }
        }
    }

    // Print search result
    console.log(linearSearch(list, itemToSearch));
})();
