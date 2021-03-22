var string = "************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA";

function encodeStr(str) {
    var hashMap = {};
    var encodedStr = '';
    var strArr = string.split("");
    for (i = 0; i < strArr.length; i++) {
        if (hashMap[strArr[i]]) {
            hashMap[strArr[i]]++;
        } else {
            hashMap[strArr[i]] = 1;
        }
    }
    Object.keys(hashMap).forEach(val => {
        if (hashMap[val] > 9) {
            encodedStr += splitStr(val, hashMap[val], '');
        } else {
            encodedStr += hashMap[val] + val;
        }
    });
    return encodedStr;
}

function splitStr(str, valLen, encodedStr) {
    if (valLen > 9) {
        let remVal = valLen - 9;
        encodedStr += 9 + str;
        return splitStr(str, remVal, encodedStr);
    } else {
        return encodedStr += valLen + str;
    }
}

console.log(encodeStr(string));

console.log(localStorage);