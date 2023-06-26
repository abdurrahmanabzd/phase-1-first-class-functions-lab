

const returnFirstTwoDrivers = (array) => {
    const slicedArray = array.slice(0, 2);
    return slicedArray;

}

const returnLastTwoDrivers = (array) => {
    const slicedArray = array.slice(-2);
    return slicedArray;

}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = (multiplier) => {
    return (fare) => {
      return fare * multiplier;
    };
  };

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, driverSelector) => {
    return driverSelector(drivers);
  };
