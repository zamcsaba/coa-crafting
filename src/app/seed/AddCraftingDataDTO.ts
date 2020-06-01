export interface AddCraftingDataDTO {
    level: number;
    xp: number;
    profession: string;
    station: string;

    ingredient1?: string;
    quantity1?: number;
    ingredient2?: string;
    quantity2?: number;
    ingredient3?: string;
    quantity3?: number;
    ingredient4?: string;
    quantity4?: number;

    craftedIngredient1?: string
    craftedIngredientQty1: number
    craftedIngredient2?: string
    craftedIngredientQty2: number

    craftedProduct1?: string
    craftedProductQty1: number
    craftedProduct2?: string
    craftedProductQty2: number

    craftedByproduct1?: string
    craftedByproductQty1: number
    craftedByproduct2?: string
    craftedByproductQty2: number
}