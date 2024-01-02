function transmitData(numPorts, transmissionSeconds, data) {
  const occupiedPorts = []; // Array to track which ports are occupied at each second
  const usedPortsOrder = []; // Array to store the order in which ports are used

  data.forEach((item) => {
    // Check if any port is available in the current second
    let freePort = null;
    for (let port = 0; port < numPorts; port++) {
      if (!occupiedPorts.includes(port)) {
        freePort = port;
        break;
      }
    }

    // If no port is available, calculate when the first occupied port is freed
    if (freePort === null) {
      const freeTime = Math.min(...occupiedPorts) + transmissionSeconds;
      occupiedPorts.splice(
        occupiedPorts.indexOf(Math.min(...occupiedPorts)),
        1
      );
    }

    // Use the free port or the one that was freed first
    const usedPort = freePort !== null ? freePort : Math.min(...occupiedPorts);
    usedPortsOrder.push(usedPort);

    // Mark the port as occupied during the transmission time
    occupiedPorts.push(usedPort);
    occupiedPorts.push(usedPort + transmissionSeconds);
  });

  return usedPortsOrder;
}

// Example of usage
const numPorts = 3;
const transmissionSeconds = 2;
const data = [1, 2, 3, 4, 5];

const transmissionOrder = transmitData(numPorts, transmissionSeconds, data);
console.log('Transmission order of data:', transmissionOrder);
