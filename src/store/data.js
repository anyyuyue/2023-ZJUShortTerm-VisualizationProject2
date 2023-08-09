// 初始数据
// 生成6120个元素的空数组
let dataArray = new Array(6120).fill({}); 

// 循环生成对象写入数组
for (let i = 0; i < 6120; i++) {
    // 设置其他字段默认值
    dataArray.push ({
    Country: "a",
    Year: 1990, 
    Sum: 1,
    Infectious_Diseases: 1, 
    Chronic_Non_communicable_Diseases: 0,
    Maternal_And_Child_Diseases: 0, 
    Nutritional_And_Metabolic_Diseases: 0, 
    Traumatic_Tnjuries: 0, 
    Others: 0
  });
}

// 最终得到6120个对象的数组
console.log(dataArray);
const initialState = {
    count: 0,
    SelectYear: 1990,
    SelectCountry: 1,
    data : dataArray
}; 

export default initialState;