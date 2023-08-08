
// 不同请求的处理
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1
            };
        case 'init': {
            let newData = [];
            // TODO: use action.payload to update newData
            console.log(action.payload);
            newData = action.payload;
            return {
                ...state,
                data: newData
            };
        }
        case 'selectcountry': {
            let selectElement = document.getElementById("country");
            return {
                ...state,
                selectcountry: selectElement.value
            };
        }
        case 'selectpieyear': {
            let selectElement = document.getElementById("selectpieyear");
            return {
                ...state,
                SelectPieYear: selectElement.value
            };
        }
        case 'selectmapyear': {
            let selectElement = document.getElementById("selectmapyear");
            return {
                ...state,
                SelectMapYear: selectElement.value
            };
        }
        default:
            throw new Error();
    }
}

export default reducer;