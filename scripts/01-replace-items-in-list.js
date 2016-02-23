/* Algorithm to replace items in list

Pseudo code : 
1 begin

2 set initial values in list 
  list = [457,122,7787]

3 set item to replace from
  itemToReplace = 122

4 set item to replace to
  itemToInsert = 199

5 perform linear search in list
  find(itemToReplace in list)

6 add value to be inserted in list
  insert(itemToInsert in list[position of itemToReplace])

7 end
*/

// Implementation

(function() {
    "use strict";

    var itemsArray = [55, 34, 88, 45, 89, 102, 33, 12, 405],
        itemToReplace = 45,
        itemToInsert = 54;
    console.log("Original list : " + itemsArray);
    for (var i = 0; i < itemsArray.length; i++) {
        if (itemsArray[i] == itemToReplace)
       		itemsArray[i] = itemToInsert;
    }
    console.log("Updated list : " + itemsArray);
})();
