function minTime(files, numCores, limit) {
  let minVal = 0;
  files.sort((a, b) => a - b);
  for (let i = 0; i < files.length; i++) {
    if (files[i] % numCores === 0) {
      minVal += files[i] / numCores;
    } else if (files[i] > numCores) {
      minVal = getTime(files[i], numCores, limit, minVal);
    } else {
      minVal += files[i];
    }
  }
  console.log(minVal);
  return minVal;
}

function getTime(noOfLines, numCores, limit, minVal) {
  console.log(noOfLines + "**");
  console.log(numCores + "**");
  console.log(limit + "**");
  console.log(minVal + "**");
  if (noOfLines === numCores) {
    minVal += 1;
  } else if (noOfLines > numCores) {
    let remVal = (minVal += noOfLines / numCores);
    getTime(remVal, numCores, limit, minVal);
  } else {
    minVal += noOfLines;
  }
  console.log(minVal + "^^^");
  return minVal;
}

// const arr = [130291875, 474356040, 1, 8];
const arr = [10, 15, 1, 8];
const cores = 5;
const limit = 3;
minTime(arr, cores, limit);
