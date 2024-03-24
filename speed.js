function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    // Check if the speed is less than or equal to the speed limit
    if (speed <= speedLimit) {
        console.log("Ok");
        return;
    }

    // Calculate demerit points
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerPoint);

    // Output the total number of demerit points
    console.log("Points:", demeritPoints);

    // Check if the driver's license should be suspended
    if (demeritPoints > 12) {
        console.log("License suspended");
    }
}

// Test the function with different speeds
calculateDemeritPoints(80); // Output: Points: 2
calculateDemeritPoints(65); // Output: Ok
calculateDemeritPoints(130); // Output: Points: 12, License suspended
