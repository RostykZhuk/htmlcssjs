// recursive function to count elements in list
function countElements(list) {
    if (list.length === 0) {
        return 0;
    }
    return 1 + countElements(list.slice(1));
    }


