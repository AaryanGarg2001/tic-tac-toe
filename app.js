var board=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

var turn=1

function update(x,y,pl) {
    board[y][x]=pl;
    var f=0;
    if((board[y][0]===pl&&board[y][1]===pl&&board[y][2]===pl)||(board[0][x]===pl&&board[1][x]===pl&&board[2][x]===pl)){
        f=1;
    }
    if(x===y&&board[0][0]===pl&&board[1][1]===pl&&board[2][2]===pl){
        f=1;
    }
    if(x+y===2&&board[0][2]===pl&&board[1][1]===pl&&board[2][0]===pl){
        f=1;
    }

    if(f===1){
    over(pl);
    }
}

function over(pl){
    $('#score').text("Player "+pl+" won")
    for(let i=0;i<3;i++)
    {
        for(let j=0;j<3;j++)
        {
            if(board[i][j]===pl)
            {
                var lit=i*3+j;
                $('#'+lit).addClass("win")
            }
        }
    }

    setTimeout(()=>{
        location.reload()
    },15000)
}

$('.grid').click((event)=>{

    var choice=event.target
    var cho=$(choice).attr('id')
    var choose=parseInt(cho)
    var x=choose%3
    var y=Math.floor(choose/3)

    console.log(x+" "+y)

    if(board[y][x]===0){
    if(turn===1){
    $(choice).text("X")
    }
    else{
    $(choice).text("O")
    }

    update(x,y,turn)
    turn=3-turn;
    }
})

$('.refresh').click(function(){
    location.reload()
})