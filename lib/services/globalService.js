import moment from "moment-timezone";
const tz = moment.tz.guess();
moment.tz.setDefault(tz);

export function getCurrentYear() {
  const d = new Date();
  return d.getFullYear();
}

export function sortSlice(list) {
  return list.sort((a, b) => a.order - b.order);
}

export function paramsToString(params) {
  return params
    ? Object.keys(params)
        .map((key, index) => {
          if (Array.isArray(params[key]))
            return params[key]
              .map((value, i) => `${key}[${i}]=${value}`)
              .join("&");
          else return `${key}=${Object.values(params)[index]}`;
        })
        .join("&")
    : null;
}

export function convertDate(date) {
  return moment.utc(date).tz(tz).format("MMMM DD, yyyy");
}
