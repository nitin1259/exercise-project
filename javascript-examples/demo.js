var arr = [3, 4, 5, 6, 7, 8, 1, 2];

function bsRoatatedArray(input, low, high, search) {
  if (low > high) return -1;
  let mid = (low + high) / 2;

  if (input[mid] == search) {
    return mid;
  }

  //left
  if (input[low] <= input[mid]) {
    if (input[low] < search && input[mid] >= search) {
      return bsRoatatedArray(input, low, mid - 1, search);
    } else {
      return bsRoatatedArray(input, mid + 1, high, search);
    }
  }

  if (input[mid] <= input[high]) {
    if (input[mid] <= search && input[high] >= search) {
      return bsRoatatedArray(input, mid + 1, high, search);
    } else {
      return bsRoatatedArray(input, low, mid - 1, search);
    }
  }
}

console.log(bsRoatatedArray(arr, 0, arr.length, 5));
