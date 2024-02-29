const transactions = [1, 2, 5];
const userId = 1;

const operationsTime = (transactions, userId) => {
  let t = 0;
  let completedOperations = new Array(transactions.length).fill(0);

  //Calculate the unit times that userId will take to complete his/her operations => O(n2)
  //The final complexity could be improved to log(n)

  //O(n)
  while (transactions[userId] > 0) {
    //O(n)
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i] > 0) {
        transactions[i]--;
        completedOperations[i]++;
        t++;
      }
      if (transactions[userId] === 0) {
        break;
      }
      console.log(`t= ${t}`);
      console.log(`Operaciones necesarias: ${transactions}`);
      console.log(`Operaciones realizadas: ${completedOperations}`);
    }
  }

  return t;
};

const time = operationsTime(transactions, userId);
