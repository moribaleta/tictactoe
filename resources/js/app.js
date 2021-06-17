const app = new Vue({
    el: "#app",
    data: {
        table   : [],
        player  : 1,
        winner  : null
    },
    methods: {
        
        onStart() {
            this.table = [
                [0,0,0],
                [0,0,0],
                [0,0,0]
            ]
            this.winner = null
            this.player = 1
        },

        onFinish(){
            alert("Winner: player "+ this.winner)
        },

        onSelect(row, col){

            if(this.winner) {
                return
            }

            if (this.table[row][col] > 0) {
                alert("Item already selected")
                return 
            }

            var table = this.table
            table[row][col] = this.player

            this.table = [...table]

            if (this.player == 1) {
                this.player = 2
            } else {
                this.player = 1
            }

            let result = this.checker()
            if (result > 0) {
                this.winner = result
                this.onFinish()
            } 
        },

        checker() {
            const checker_value = this.player // 1, 2
            const check_1 = 3
            const check_2 = 6
            const table = this.table
    
            for (var i = 0; i < table.length; i++) {
    
                console.log(" checking row " + i)
                var sum = 0
    
                ///for each column value
                for (var j = 0; j < table[i].length; j++) {
                    console.log(" checking column " + j)
                    if (table[i][j] == checker_value) {
                        sum += table[i][j]
                    }
                }
    
                console.log("sum = " + sum)
    
                if (check_1 == sum) {
                    console.log(" winner check1 ")
                    return 1
                } else if (check_2 == sum) {
                    console.log(" winner check2 ")
                    return 2
                }
            }
    
            var sum = 0
    
            for (var i = 0; i < table.length; i++) {
                let value = table[i][i]
                if (value == checker_value) {
                    sum += table[i][j]
                }
            }
    
            if (check_1 == sum) {
                console.log(" winner check1 ")
                return 1
            } else if (check_2 == sum) {
                console.log(" winner check2 ")
                return 2
            }
    
            sum = 0
    
            for (var i = 0, j = table.length - 1; i < table.length, j >= 0; i++, j--) {
                let value = table[i][i]
                if (value == checker_value) {
                    sum += table[i][j]
                }
            }
    
            if (check_1 == sum) {
                console.log(" winner check1 ")
                return 1
            } else if (check_2 == sum) {
                console.log(" winner check2 ")
                return 2
            }

            return 0
        },//checker
    }

})//app