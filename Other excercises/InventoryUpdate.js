// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
function updateInventory(currentInventory, newInventory) {
  // Check each item of new inventory
  for (let newItem of newInventory) {
    let found = false;
    // Check against current inventory
    for (let oldItem of currentInventory) {
      // Update value if new item is found
      if (newItem[1] === oldItem[1]) {
        oldItem[0] += newItem[0];
        found = true;
        break;
      }
    }
    // Otherwise add item to the old inventory
    if (!found) currentInventory.push([...newItem]);
  }
  // Alphabetize and put into original array format
  return currentInventory.sort((a, b) => {
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
  });
}
var curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone'],
];

var newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste'],
];

updateInventory(curInv, newInv);
