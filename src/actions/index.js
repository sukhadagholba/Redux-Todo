export const addItem = (content) => {
        return {
                type: "ADD_ITEM",
		content: content
        };
};

export const clearCompleted = () => {
        return {
                type: "CLEAR_COMPLETED"
        };
};



export const toggleState = (index) => {
        return {
                type: "TOGGLE_STATE",
		index: index
        };
};

export const deleteItem = (index) => {
        return {
                type: "DELETE_ITEM",
                index: index
        };
};
