function swap(arr,x, y)
{
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

function selectionSort(arr,  n)
{
    let i, j, x;
    for (i = 0; i < n-1; i++)
    {
        x = i;
        for (j = i + 1; j < n; j++)
            if (arr[j] > arr[x])
                x = j;
        swap(arr,x, i);
    }
}

function printArray( arr,  size)
{
    let i;
    for (i = 0; i < size; i++)
        document.write(arr[i] + " ");
    document.write(" <br>");
}

function findMax(arr, size)
{
    let max = -9999, i;
    for ( i = 0 ; i < size; i++){
        if ((arr[i] > max) && (arr[i] < 0))
            max = arr[i];
    }
    return max;
}

function findMin(arr, size)
{
    let min = 9999, i;
    for ( i = 0 ; i < size; i++){
        if ((arr[i] < min) && (arr[i] > 0))
            min = arr[i];
    }
    return min;
}

let arr = [-5, -2, 4, 5, 6];
let n = 5;
document.write("Start array: <br>");
printArray(arr, n);
selectionSort(arr, n);
document.write("Sorted array: <br>");
printArray(arr, n);
let max = findMax(arr, n);
let min = findMin(arr,n);
document.write("Max below zero : " + max + "<br>");
document.write("Min after zero : " + min);


