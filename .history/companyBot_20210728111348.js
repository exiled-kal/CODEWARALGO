function companyBotStrategy(trainingData) {
    let q = 0;
    let sum = 0;

    for(let i of trainingData) {
        if(i[1] == 1) {
            q++;
            sum +=i[0]
        }
    }
}