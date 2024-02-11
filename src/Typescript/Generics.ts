function getFirstElement<ElementType>(array: ElementType[]) {
  return array[0];
}

const numbers = [1, 2, 3];
console.log(getFirstElement<number>(numbers));

const strings = ["sdf", "sdf"];
console.log(getFirstElement(strings));

// Generics in document
const input = document.querySelector<HTMLInputElement>(".input");
console.log(input?.value);

// Generics in Data structures
const map = new Map<string, Map<string, number>>();

const innerMap = new Map<string, number>(); // Creating a new inner Map

// Adding values to the inner Map
innerMap.set("map", 123); // Assuming 'value' is defined somewhere

// Setting the inner Map as a value in the outer Map
map.set("val", innerMap);
console.log(map);

// Generics for Api Response
type ApiResponse<Data = { status: boolean }> = {
  data: Data;
  isError: boolean;
};

// This will work even if is use ApiResponse<string>;
// For that i need to use apiResponse like this ->
// ApiResponse<Data extends object>

type UserResponse = ApiResponse<{ name: string; age: number }>;
type BlogResponse = ApiResponse<{ title: string }>;

const response: UserResponse = {
  data: {
    name: "Kyle",
    age: 21,
  },
  isError: false,
};

const statusResponse: ApiResponse = {
  data: {
    status: false,
  },
  isError: false,
};

const blogResponse: BlogResponse = {
  data: {
    title: "Blog",
  },
  isError: false,
};

console.log(blogResponse);
console.log(response);
console.log(statusResponse);
