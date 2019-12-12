// Task_03
function task_03() {
  const findBestEmployee = function(employees) {
    const namesOfEmployees = Object.keys(employees);
    let maxValue = 0;
    let bestEmployer;
    for (const value in employees) {
      if (employees[value] > maxValue) {
        maxValue = employees[value];
        bestEmployer = value;
      }
    }
    console.log(bestEmployer);
  };
  const employeesList1 = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99 // lorence
  };
  const employeesList2 = {
    poly: 12,
    mango: 17, // mango
    ajax: 4
  };
  const employeesList3 = {
    lux: 147, // lux
    david: 21,
    kiwi: 19,
    chelsy: 38
  };
  findBestEmployee(employeesList1);
  findBestEmployee(employeesList2);
  findBestEmployee(employeesList3);
}

// ======================================
