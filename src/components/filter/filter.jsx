import { FilterInput, FilterLabel } from "./filter.styled"

export const Filter = ( {onChange, value} ) => {
    return (
        <FilterLabel>
            Find contact by name
            <FilterInput type='text' onChange={onChange} value={value} />
        </FilterLabel>
      
    )
}