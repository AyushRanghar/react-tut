const makeFetch = <TData>(url: string): Promise<TData> => {
  return fetch(url).then((res) => res.json());
};

makeFetch<{ firstName: string; lastName: string }>("api/endpoint").then((res) =>
  console.log(res)
);

// Inferring the types
const addIdToObj = <TObj>(obj: TObj) => {
  return {
    ...obj,
    id: "123",
  };
};

console.log(addIdToObj({ firstName: "Ayush", lastName: "Ranghar" }));
