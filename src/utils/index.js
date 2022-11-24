import moment from "moment";

export function getAgeFromDOB(dob, format = "Y") {
  let today = moment();
  let f_dob = moment(dob);
  let age = moment.duration(today.diff(f_dob));

  if (format === "Y") {
    return `${age.years()} Y`;
  } else if (format === "YM") {
    return `${age.years()} Y, ${age.months()} months`;
  } else if (format === "YMD") {
    return `${age.years()} Y, ${age.months()} months, ${age.days()} days`;
  } else {
    return null;
  }
}
