
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
            let selectElement = document.getElementById("selectcountry");
            return {
                ...state,
                SelectCountry: selectElement.value
            };
        }
        case 'selectyear': {
            let selectElement = document.getElementById("selectyear");
            return {
                ...state,
                SelectYear: selectElement.value
            };
        }
        default:
            throw new Error();
    }
}

export default reducer;