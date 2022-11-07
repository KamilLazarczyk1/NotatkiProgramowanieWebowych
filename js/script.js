function form()
{
    let num = document.getElementById("num");
    if(num > 17)
    {
        document.write("Jesteś pełnoletni");
    } else {
        document.write("Za rok będziesz miał " + (num+1));
    }
}