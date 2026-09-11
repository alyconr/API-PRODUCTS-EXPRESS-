import { Category } from "../models/Category";

export const categories: Category[] = [
  {
    id: 1,
    name: "Computers",
    active: true,
  },
  {
    id: 2,
    name: "Electronics",
    active: true,
  },
  {
    id: 3,
    name: "Audio",
    active: true,
  },
  {
    id: 4,
    name: "Home Appliances",
    active: true,
  },
  {
    id: 5,
    name: "Gaming",
    active: true,
  },
];

let nextCategoryId = Math.max(...categories.map((category) => category.id)) + 1;

export function generateCategoryId(): number {
  // Esta función genera un nuevo ID para una categoría. Toma el valor actual de nextCategoryId, lo asigna a la variable id, luego incrementa nextCategoryId en 1 para que esté listo para la próxima vez que se necesite un nuevo ID. Finalmente, devuelve el ID generado.
  const id = nextCategoryId;
  nextCategoryId++;
  return id;
}
