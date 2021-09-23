var UndergroundSystem = function () {
  this.currentXc = {}
  this.historyXc = {}
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.currentXc[id] = {
    stationName,
    t
  }
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  const cxc = this.currentXc[id]
  const key = cxc.stationName + '-' + stationName
  if (this.historyXc[key]) {
    this.historyXc[key].timeDiff += (t - cxc.t)
    this.historyXc[key].count++
  } else {
    this.historyXc[key] = {
      timeDiff: t - cxc.t,
      count: 1
    }
  }
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
  const key = startStation + '-' + endStation
  const { timeDiff, count } = this.historyXc[key]
  return timeDiff / count
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
const undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(45, "Leyton", 3);
undergroundSystem.checkIn(32, "Paradise", 8);
undergroundSystem.checkIn(27, "Leyton", 10);
undergroundSystem.checkOut(45, "Waterloo", 15);
undergroundSystem.checkOut(27, "Waterloo", 20);
undergroundSystem.checkOut(32, "Cambridge", 22);
undergroundSystem.getAverageTime("Paradise", "Cambridge");