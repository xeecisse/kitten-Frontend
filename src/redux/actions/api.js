export const apiURL = "http://localhost:43893/api";

export const fetchApi = async (url) => {
  try {
    const request = await fetch(`${apiURL}/${url}`);
    return request.json();
  } catch (error) {
    return error;
  }
};

export const postApi = async (url, data = {}) => {
  try {
    const request = await fetch(`${apiURL}/${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return request.json();
  } catch (error) {
    return error;
  }
};

export const deleteApi = async (url, data = {}) => {
  try {
    const request = await fetch(`${apiURL}/${url}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: data ? JSON.stringify(data) : null,
    });
    return request.json();
  } catch (error) {
    return error;
  }
};

export const updateApi = async (url = "", data = []) => {
  try {
    const request = await fetch(`${apiURL}/${url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return request.json();
  } catch (error) {
    return error;
  }
};

function unflatten(arr) {
  var tree = [],
    mappedArr = {},
    arrElem,
    mappedElem;
  for (var i = 0, len = arr.length; i < len; i++) {
    arrElem = arr[i];
    mappedArr[arrElem.title] = arrElem;
    mappedArr[arrElem.title]["children"] = [];
  }

  for (var title in mappedArr) {
    if (mappedArr.hasOwnProperty(title)) {
      mappedElem = mappedArr[title];
      if (mappedElem.subhead) {
        mappedArr[mappedElem["subhead"]]["children"].push(mappedElem);
      } else {
        tree.push(mappedElem);
      }
    }
  }
  return tree;
}

export { unflatten };
