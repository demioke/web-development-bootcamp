function echo(str, num) {
    for (var i = 0; i < num; i++) {
        console.log(str);
    }
}

echo("Echo!!", 5);
echo("cool beans", 7);

// to run this file in terminal using node, type: node echo.js