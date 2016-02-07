
const EMPTY = {};

export default store => {
	console.log('reducer: ', store);
	return store || EMPTY;
};

// export default ({ items=[] }=EMPTY) => ({
// 	items
// });
