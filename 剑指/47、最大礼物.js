// 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？
//
// 示例 1:
//
// 输入:
//     [
//         [1,3,1],
//         [1,5,1],
//         [4,2,1]
//     ]
// 输出: 12
// 解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物



let maxValue = function(grid) {
    let dp = new Array(grid.length+1).fill(0)
    dp = dp.map(() => new Array(grid[0].length+1).fill(0))

    for(let i = 0 ; i < dp.length ; i++){
        for(let j = 0 ; j < dp[0].length ; j++){
            if(i > 0 && j > 0){
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]) + grid[i-1][j-1]
            }
        }
    }
    return dp[dp.length - 1][dp[0].length - 1]
};


let a =  [
    [1,3,1],
    [1,5,1],
    [4,2,1]
]

console.log(maxValue(a));













