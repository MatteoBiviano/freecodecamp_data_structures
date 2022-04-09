function checkCashRegister(price, cash, cid) {
  let total_register = cid.reduce((a,b) => a + b[1], 0).toFixed(2);
  let change_due = parseFloat((cash- price).toFixed(2));
  if(total_register < change_due){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  if(total_register == change_due){
    return {status: "CLOSED", change: cid};
  }
  let currency = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
  ];
  var final_change = [];
  for(let i = 0; i < currency.length; i++) {
    let total = cid.find((a) => a[0] === currency[i][0])[1];
    if(change_due > total && change_due > currency[i][1]){
      change_due = change_due - total;
      final_change.push([currency[i][0], total]);
    }
    else{
      if(change_due >  currency[i][1] && change_due < total){
        let floor_c = Math.floor(change_due / currency[i][1]) * currency[i][1]
        change_due = parseFloat((change_due - floor_c).toFixed(2));
        final_change.push([currency[i][0], floor_c]);
      }
    }
  }
  if(change_due > 0){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  return {status: "OPEN", change: final_change};
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

