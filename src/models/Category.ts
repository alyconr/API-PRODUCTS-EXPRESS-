export interface Category {
  id: number;
  name: string;
  active: boolean; 
}


export type CreateCategoryInput = Omit<Category, "id">;

export type UpdateCategoryInput = Partial<Omit<Category, "id">>;