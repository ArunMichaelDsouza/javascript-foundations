/* Algorithm to replace item in list

Pseudo code : 
1 begin

2 set initial values in list 
  list = [55, 34, 88, 45, 89, 102, 33, 12, 405]

3 set item to replace from
  itemToReplace = 45

4 set item to replace to
  itemToInsert = 54

5 perform linear search in list
  find(itemToReplace in list) // Compare each item with ItemToReplace one by one
  if list[i] == itemToReplace
    return list[i]

6 if found, add value to be inserted in list
  insert(itemToInsert in list[position of itemToReplace])

  print updatedList

7 end
*/

// Implementation

(function() {
    'use strict';

    // Declare variables
    var itemsArray = [55, 34, 88, 45, 89, 102, 33, 12, 405],
        itemToReplace = 45,
        itemToInsert = 54;

    // Replace item
    function replaceItemInList(list, replace, insert) {
        console.log("Original list : " + list);
        for (var i = 0; i < list.length; i++) {
            list[i] === replace ? list[i] = insert : '';
        }
        return list;
    }

    // Print updated list
    var updatedList = replaceItemInList(itemsArray, itemToReplace, itemToInsert);
    console.log('Updated list : ' + updatedList);
})();
