var ar = [23, 1000, 1, -1, 8, 3];
console.log(ar);
bubbleSort(ar);
console.log(ar);

function bubbleSort(ar)
{
    var shouldSort = true;

    while(shouldSort)
    {
        shouldSort = false;

        for(var i = 0; i < ar.length - 1; i++)
        {
            var a = ar[i];
            if ( a > ar[i+1] )
            {
                ar[i] = ar[i+1];
                ar[i+1] = a;
                shouldSort = true;
            }
        }
    }
}