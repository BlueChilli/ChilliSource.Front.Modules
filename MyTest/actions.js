export const addThing = (data) => {
  return {
    type: "ADDTHING",
    payload: async () => {
      // Example of failing
      if (data.get("name") === "fail") throw new Error("Name is fail, therefore failed.");

      // Just some nonesense aysnc thing
      const fetchObj = await fetch("https://baconipsum.com/api/?type=" + data.get("random"));
      const j = await fetchObj.json();
      return data.set("bacon", j[0]);
    }
  }
};

export const editThing = (data) => {

  return {
    type: "EDITTHING",
    payload: async () => {
      return Promise.resolve(data);
    }
  }
};