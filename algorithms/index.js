// Use a stack to find the maximum numeric value in an array of arrays
function findMax2(arElements)
{
    var max = -Infinity;

    // This is the stack on which will put the first array and then 
    // all the other sub-arrays that we find as we traverse an array     
    var arrays = [];

    arrays.push(arElements);

    // Loop as long as are arrays added to the stack for processing
    while(arrays.length > 0)
    {
        // Extract an array from the stack
        ar = arrays.pop();

        // ... and loop through its elements
        for(var i = 0; i < ar.length; i++)
        {
            var el = ar[i];

            // If an element is of type array, we'll add it to stack
            // to be processed later
            if ( Array.isArray(el) )
            {
                arrays.push(el);
                continue;
            }

            if ( el > max )
            {
                max = el;
            }
        }
    }

    return max;
}