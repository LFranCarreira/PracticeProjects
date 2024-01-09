function sentTimes(numberOfPorts, transmissionTime, packetIds) {
  let hashmap = {};
  for (let i = 0; i < numberOfPorts; i++) {
    hashmap[i] = 0;
  }
  let count = 1; // First packet is sent at time t=1
  let result = [];

  for (let packetId of packetIds) {
    let hashVal = packetId % numberOfPorts;

    if (hashmap[hashVal] <= count) {
      result.push(hashVal);
      hashmap[hashVal] = transmissionTime + count;
      count++;
    } else {
      while (hashmap[hashVal] > count) {
        hashVal = (hashVal + 1) % numberOfPorts;
      }
      hashmap[hashVal] = transmissionTime + count;
      result.push(hashVal);
      count++;
    }
  }

  return result;
}

// Example usage
let numberOfPorts = 5;
let transmissionTime = 4;
let packetIds = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 12, 14, 15, 18, 16, 17, 22, 20, 19,
];
let result = sentTimes(numberOfPorts, transmissionTime, packetIds);
console.log(result);
