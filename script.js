var employees = []
var totalCost = 0;
var empAdd = 0

$(document).ready(onReady);

function onReady() {
  
    $table = $('<table></table>');
    $table.append('<thead><tr><th>Name</th><th width="150">ID</th><th width="250">Title</th><th width="200">Salary</th><th width="100">DELETE</th></thead>')
  
    $tbody = $('<tbody id="tableBody"></tbody>');
    $table.append($tbody);
  
    $('.container').append($table);

    $('body').on('click', ".deleter", deleteFunc)
    $("#submitInfoInput").on('click', submitInfo)
}

function deleteFunc () {
    $(this).closest('tr').remove();
    adde = this.id;
    employees[adde].salary = 0;
    costCalc();
    $('#totalCost').html('Total Cost of Human Property: $'+totalCost)
    // console.log(employees.find()
};


function submitInfo () {
    var employee = new Info();
    employees.push(employee)

    costCalc();
    $('#totalCost').html('Total Cost of Human Property: $'+totalCost)
    
    employeePrint()

}

function costCalc () {
    totalCost = 0
    for (var i = 0; i < employees.length; i++) {
        totalCost += Number(employees[i].salary);
        
    }
}

function Info () {

    this.name= ($("#firstNameInput").val() + " " + $("#lastNameInput").val());
    this.id = $('#idNumberInput').val();
    this.title = $("#jobTitleInput").val();
    this.salary = $("#annualSalaryInput").val();
    this.added = empAdd;
    empAdd++

}

function employeePrint () {

    var emp = employees [employees.length-1]

    $('#tableBody').append('<tr><td>'+emp.name +'</td><td>'+emp.id+'</td><td>'+emp.title+'</td><td>$'+emp.salary+'</td><td><button id = '+emp.added+' class="deleter">Delete</button></td></tr>')
    $('#firstNameInput').val('First Name')
    $('#lastNameInput').val('Last Name')
    $('#idNumberInput').val('ID Number')
    $('#jobTitleInput').val('Job Title')
    $('#annualSalaryInput').val('Salary')


}