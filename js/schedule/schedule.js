

function getData() {
    function decryptBitmap(rawBitmap) {
        let bitmap = parseInt(rawBitmap, 10).toString(2)
        var bits = new Array();
        var index = bitmap.length;
        var currentPosition = 0;

        while (index--) {
            if (bitmap[index] == 1) {
                bits.push(currentPosition);
            }
            currentPosition += 1
        }

        return bits;
    }

    for (var key in schedulingData) {
        schedulingData[key].periods = decryptBitmap(schedulingData[key].availability);
    }

    return schedulingData;
}

function generateSchedules(data, selectedCourseIds) {
    var selectedCourses = [];
    for (const i in selectedCourseIds) {
        selectedCourses.push(data[selectedCourseIds[i]]);
        selectedCourses[i].id = selectedCourseIds[i];
    }
    var pool = selectedCourses;
    var poolByPeriod = [[], [], [], [], [], [], [], [], []];
    var currentSchedule = [null, null, null, null, null, null, null, null, null];
    var generatedSchedules = [];


    //updates and returns new pool of schedules for next period
    function updatePoolHelper(i, currentPeriod) {
        pool.splice(pool.indexOf(poolByPeriod[currentPeriod][i]), 1)
        currentSchedule[currentPeriod] = poolByPeriod[currentPeriod][i].id;

        return pool.filter(course => course.periods.indexOf(currentPeriod + 1) != -1);
    }

    //if course is done/doesn't work, readd to pool and remove from schedule
    function nextCourseHelper(i, currentPeriod) {
        pool.push(poolByPeriod[currentPeriod][i]);
        currentSchedule[currentPeriod] = null;
    }

    function generateSchedulesHelper(i, currentPeriod) {
        let newPool = updatePoolHelper(i, currentPeriod);
        if (newPool.length == 0) {
            // No available courses, period i does not work
            nextCourseHelper(i, currentPeriod);
            return false;
        } else {
            //There are more available courses to add, period i works
            poolByPeriod[currentPeriod+1] = newPool;
            return true;
        }
    }

    poolByPeriod[1] = selectedCourses.filter(course => course.periods.indexOf(1) != -1)

    for (const i in poolByPeriod[1]) {
        if (!generateSchedulesHelper(i, 1)) {
            //console.log("course " + poolByPeriod[1][i].id + " did not work, going to i+1");
            continue;
        } else {
            //console.log("worked", currentSchedule)
            for (const j in poolByPeriod[2]) {
                if (!generateSchedulesHelper(j, 2)) {
                    //console.log("course " + poolByPeriod[2][j].id + " did not work, going to j+1");
                    continue;
                } else {
                    //console.log("worked", currentSchedule)
                    for (const k in poolByPeriod[3]) {
                        if (!generateSchedulesHelper(k, 3)) {
                            //console.log("course " + poolByPeriod[3][k].id + " did not work, going to k+1");
                            continue;
                        } else {
                            //console.log("worked", currentSchedule)
                            for (const l in poolByPeriod[4]) {
                                if (!generateSchedulesHelper(l, 4)) {
                                    //console.log("course " + poolByPeriod[4][l].id + " did not work, going to l+1");
                                    continue;
                                } else {
                                    //console.log("worked", currentSchedule)
                                    for (const m in poolByPeriod[5]) {
                                        //console.log("before i", m)
                                        if (!generateSchedulesHelper(m, 5)) {
                                            //console.log("course " + poolByPeriod[5][m].id + " did not work, going to m+1");
                                            continue;
                                        } else {
                                            //console.log("worked", currentSchedule)
                                            for (const n in poolByPeriod[6]) {
                                                if (!generateSchedulesHelper(n, 6)) {
                                                    //console.log("course " + poolByPeriod[6][n].id + " did not work, going to n+1");
                                                    continue;
                                                } else {
                                                    //console.log("worked", currentSchedule)
                                                    for (const o in poolByPeriod[7]) {
                                                        //console.log("7 before generate",poolByPeriod[7])
                                                        if (!generateSchedulesHelper(o, 7)) {
                                                            //console.log("course " + poolByPeriod[7][o].id + " did not work, going to o+1");
                                                            continue;
                                                        } else {
                                                            //console.log("worked", currentSchedule)
                                                            for (const p in poolByPeriod[8]) {
                                                                //p is the final period, so it must work, no need to check
                                                                currentSchedule[8] = poolByPeriod[8][p].id;
                                                                pool.splice(pool.indexOf(poolByPeriod[8][p]), 1)
                                                                console.log("GENERATED SCHEDULE: ", currentSchedule);
                                                                generatedSchedules.push(currentSchedule);
                                                                console.log("GENERATED " + generatedSchedules.length + " SCHEDULES");

                                                                //reset
                                                                nextCourseHelper(p, 8);
                                                            }
                                                        }
                                                        nextCourseHelper(o, 7);
                                                    }
                                                }
                                                nextCourseHelper(n, 6);
                                            }
                                        }
                                        nextCourseHelper(m, 5);
                                    }
                                }
                                nextCourseHelper(l, 4);
                            }
                        }
                        nextCourseHelper(k, 3);
                    }
                }
                nextCourseHelper(j, 2);
            }
        }
        nextCourseHelper(i, 1);
    }
}


// currentSchedule.push(fourthArray[l])
// generatedSchedules.push(currentSchedule);
// console.log("generated schedule: ", currentSchedule);
// console.log("generated " + generatedSchedules.length + " schedules");
// currentSchedule = [];
// usedCourses = [];



function test() {
    let courses = ["TA2S3A", "LA3E4A", "MA3CBA", "SS3GVC", "MA3STA", "SC3PCA", "PP17SA", "PP18SA"]
    console.time()
    generateSchedules(getData(), courses);
    console.timeEnd()
}