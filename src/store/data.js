let idata = new Array(6120).fill(0).map((_, i) => ({Country: "0" , Year: 1990 + i, Sum: 1, Infectious_Diseases: 1, Chronic_Non_communicable_Diseases: 0, Maternal_And_Child_Diseases: 0, Nutritional_And_Metabolic_Diseases: 0, Traumatic_Tnjuries: 0, Others: 0}));
// 初始数据
const initialState = {
    count: 0,
    SelectPieYear: 1990,
    SelectMapYear: 1990,
    selectcountry: 1, 
    data : idata
}; 

export default initialState;