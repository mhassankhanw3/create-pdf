export function KeywordSanitzer(keyword) {
  var kw = keyword.toLowerCase();
  var kw = kw.replace(/\n/g, "");
  var kw = kw.replace(/\\n/g, "");
  var kw = kw.replace(/\t/g, "");
  var kw = kw.replace(/\\t/g, "");

  var kw = kw.replace(/\\/g, "");

  var kw = kw.replace(/(^\s+)|(\s+$)/g, "");
  var kw = kw.replace(/[ \f\t\v]$/g, "");

  var kw = kw.replace(/         /g, " ");
  var kw = kw.replace(/        /g, " ");
  var kw = kw.replace(/       /g, " ");
  var kw = kw.replace(/      /g, " ");
  var kw = kw.replace(/     /g, " ");
  var kw = kw.replace(/    /g, " ");
  var kw = kw.replace(/   /g, " ");
  var kw = kw.replace(/  /g, " ");

  return kw;
}

export default function DomainSanitizer(domain) {
  if (domain) {
    var rootUrl = domain;
    var rootUrl = rootUrl.replace(/http(s?):\/\/(?:www\.)?/g, "");
    var rootUrl = rootUrl.replace("www.", "");
    var rootUrl = rootUrl.replace(/\/.*$/g, "");
    var rootUrl = rootUrl.replace(/ /g, "");
    var rootUrl = rootUrl.toLowerCase();

    return rootUrl;
  }
}

export function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

export function abbreviateNumber(value) {
  let newValue = value;
  const suffixes = ["", "K", "M", "B", "T"];
  let suffixNum = 0;
  if (Math.sign(newValue) == 1) {
    while (newValue >= 1000) {
      newValue /= 1000;
      suffixNum++;
    }
  } else {
    newValue = newValue * -1;
    while (newValue >= 1000) {
      newValue /= 1000;
      suffixNum++;
    }
    newValue = newValue * -1;
  }
  if (newValue) {
    // newValue = newValue.toPrecision(3);
    if (newValue % 1 != 0) {
      newValue = Number(newValue).toFixed(1);
    } else {
      newValue = Math.round(newValue);
    }
    newValue += suffixes[suffixNum];
    return newValue;
  } else {
    return 0;
  }
}
export function abbreviateNumberNew(value) {
  let newValue = value;
  const suffixes = ["", "K", "M", "B", "T"];
  let suffixNum = 0;
  if (Math.sign(newValue) == 1) {
    while (newValue >= 1000) {
      newValue /= 1000;
      suffixNum++;
    }
  } else {
    newValue = newValue * -1;
    while (newValue >= 1000) {
      newValue /= 1000;
      suffixNum++;
    }
    newValue = newValue * -1;
  }
  if (newValue) {
    // newValue = newValue.toPrecision(3);
    if (newValue % 1 != 0) {
      newValue = Number(newValue).toFixed(1);
    } else {
      newValue = Math.round(newValue);
    }
    console.log(newValue, "newValue");

    return newValue;
  } else {
    return 0;
  }
}

export function NumberFormatter(number) {
  if (number) {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  } else {
    return 0;
  }
}

export function FileChecker(data) {
  function LineBreakSanitizer(data) {
    let newarr = [];

    for (let item of data) {
      if (item !== "") {
        if (item !== ",") {
          if (item !== "\n") {
            item = item.replace(/,/g, "\n");
            item = item.replace(/\n{1,}/g, "");
            item = item.replace(/\t{1,}/g, "");
            item = item.replace(/\r{1,}/g, "");
            item = item.replace(/^\n/g, "");
            item = item.replace(/\n$/g, "");
            item = item.replace(/^\t/g, "");
            item = item.replace(/\t$/g, "");
            item = item.replace(/^\r/g, "");
            item = item.replace(/\r$/g, "");
            item = item.replace(/[^a-zA-Z0-9]/g, "");
            item = item.replace(
              /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]{1,}/g,
              ""
            );
            item = item.replace(/         /g, "");
            item = item.replace(/        /g, "");
            item = item.replace(/       /g, "");
            item = item.replace(/      /g, "");
            item = item.replace(/     /g, "");
            item = item.replace(/    /g, "");
            item = item.replace(/   /g, "");
            item = item.replace(/  /g, "");
            if (item !== "") {
              newarr.push(item);
            }
          }
        }
      }
    }

    return newarr;
  }

  function CommaSanitizer(data) {
    let newarr = [];
    let cleanarr = [];

    for (let item of data) {
      if (item !== "") {
        item = item.replace(/\t{1,}/g, "");
        item = item.replace(/\n{1,}/g, "");
        item = item.replace(/\r{1,}/g, "");
        item = item.replace(/[^a-zA-Z0-9],/g, "");
        item = item.replace(
          /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]{1,}/g,
          ""
        );
        item = item.replace(/         /g, "");
        item = item.replace(/        /g, "");
        item = item.replace(/       /g, "");
        item = item.replace(/      /g, "");
        item = item.replace(/     /g, "");
        item = item.replace(/    /g, "");
        item = item.replace(/   /g, "");
        item = item.replace(/  /g, "");
        item = item.split(",");
        for (let item2 of item) {
          if (item2 !== "") {
            item2 = item2.replace(/         /g, "");
            item2 = item2.replace(/        /g, "");
            item2 = item2.replace(/       /g, "");
            item2 = item2.replace(/      /g, "");
            item2 = item2.replace(/     /g, "");
            item2 = item2.replace(/    /g, "");
            item2 = item2.replace(/   /g, "");
            item2 = item2.replace(/^ /g, "");
            item2 = item2.replace(/ $/g, "");
            newarr.push(item2);
          }
        }
      }
    }

    return newarr;
  }

  let linebreakcount = 0;
  let commacount = 0;
  for (let item of data) {
    if (item.match(/[^\n]*\n[^\n]*/gi)) {
      linebreakcount += item.match(/[^\n]*\n[^\n]*/gi)?.length;
    }
    if (item.match(/[^,]*,[^,]*/gi)) {
      commacount += item.match(/[^,]*,[^,]*/gi)?.length;
    }
  }
  if (linebreakcount > commacount) {
    return LineBreakSanitizer(data);
  } else {
    return CommaSanitizer(data);
  }
}
