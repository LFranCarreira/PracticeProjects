function numberOfAlerts(precedingMinutes, alertThreshold, numCalls) {
  let start = 0;
  let end = 1;
  let counter = 0;
  let S = numCalls[0];

  while (start < numCalls.length) {
    if (S / (end - start) > alertThreshold) {
      counter++;
    }

    if (end - start >= precedingMinutes) {
      S -= numCalls[start];
      start++;
    }

    if (end !== numCalls.length) {
      S += numCalls[end];
      end++;
    } else {
      S -= numCalls[start];
      start++;
    }
  }

  return counter;
}

// Ejemplo de uso
let precedingMinutes = 3;
let alertThreshold = 10;
let numCalls = [8, 12, 15, 10, 6, 8, 11, 14];

let result = numberOfAlerts(precedingMinutes, alertThreshold, numCalls);
console.log(result);
