export interface Animal {
  name: string;
}

export interface Human {
  firstName: string;
  lastName: string;
}

// export const getDisplayName = <TItem extends Animal | Human>(
//   item: TItem
// ): TItem extends Human ? { humanName: string} : { displayName: string } => {
//     if ("name" in item) return { displayName: item.name } as { displayName: string };
//     else return { humanName: `${item.firstName} ${item.lastName}` } as { humanName: string };
//   };

export const getDisplayName = (name: Animal | Human) => {
    return name;
}

export const animalName = getDisplayName({ name: "Girrafe" });

export const humanName = getDisplayName({
  firstName: "Ayush",
  lastName: "Ranghar",
});
