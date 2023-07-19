//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore)
    }
    average() {
        let scoreSum = 0
        for (let i = 0; i < this.scores.length; i++) {
            scoreSum += this.scores[i];
        }
        // let average = Math.round(scoreSum / this.scores.length) / 10
        return Math.round(scoreSum / this.scores.length * 10) / 10
    }
    status(score) {
        let acceptance = '';
        if (score >= 90) {
            acceptance = 'Accepted';
        } else if (score >= 80) {
            acceptance = 'Reserve';
        } else if (score >= 70) {
            acceptance = 'Probationary';
        } else {
            acceptance = 'Rejected';
        }
        return `${this.name} has earned an average test score of ${score} and has a status of ${acceptance}`;
    }
    
}

let candidate1 = new CrewCandidate("Bubba Bear", "135kg", [88, 85, 90])
let candidate2 = new CrewCandidate("Merry Maltese", "1.5kg", [93, 88, 97])
let candidate3 = new CrewCandidate("Glad Gator", "225kg", [75, 78, 62])

candidate1.addScore(83)
candidate3.addScore(100)
candidate3.addScore(100)
//two perfect scores to get the Alligator accepted
candidate3.addScore(100)
candidate3.addScore(100)
candidate3.addScore(100)
candidate3.addScore(100)
//six perfect scores to get the Alligator accepted
console.log(candidate1.scores)
console.log(candidate3.status(candidate3.average()))
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.