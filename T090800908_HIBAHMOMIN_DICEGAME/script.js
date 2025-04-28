document.getElementById("rollDice").addEventListener("click", function() {
    let scores = [];
    let diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

    for (let i = 1; i <= 3; i++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        document.querySelector(`#player${i} .dice`).textContent = diceFaces[roll - 1];
        document.querySelector(`#player${i} .score`).textContent = `Score: ${roll}`;
        scores.push({ player: `Player ${i}`, score: roll });
    }

    scores.sort((a, b) => b.score - a.score);
    
    let winners = scores.filter(p => p.score === scores[0].score);

    let resultText = winners.length === 1 
        ? `${winners[0].player} wins!` 
        : `It's a tie between ${winners.map(p => p.player).join(" & ")}!`;
    
    document.getElementById("result").textContent = resultText;
});
