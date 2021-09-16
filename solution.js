//완주하지 못한 선수
function solutionHash1(participant, completion) {
    participant.sort();
    completion.sort();

    for(let i in participant) {
        if(participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}

//모의고사
function solution(answers) {
    const pattern1 = [1, 2, 3, 4, 5];
    const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const pattern3 = [3, 3, 1, 1, 2,2,4, 4, 5, 5];

    let pattern1Count = 0;
    let pattern2Count = 0;
    let pattern3Count = 0;
    answers.forEach((answer, index) => {
        if (answer === pattern1[index % 5]) pattern1Count++;
        if (answer === pattern2[index % 8]) pattern2Count++;
        if (answer === pattern3[index % 10]) pattern3Count++;
    });

    const maxCount = Math.max(...[pattern1Count, pattern2Count, pattern3Count]);
    const answer = [
        { name: 1, value: pattern1Count },
        { name: 2, value: pattern2Count },
        { name: 3, value: pattern3Count },
    ].filter(answer => answer.value === maxCount).map(answer => answer.name);

    return answer;
}