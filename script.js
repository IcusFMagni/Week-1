var employees = []
var totalCost = 0;
var empAdd = 0

var firstNames = ['John', 'Sally', 'Salty', 'Amber', 'Quartz', "Bibity", 'Kattan', '0010001011' , 'Unit', 'Captain', 'Gonzo', 'Kermit', 'Oglafina', 'Bluster', 'Akbar', 'Jean Luc', 'William', 'Troi', 'Elana', 'Christo', 'Folstead'];
var lastNames = ['Picard','Simpson', 'Ryker'];
var titles = ['King', 'Queen', 'Ruler', 'Monarch', 'Catcher', 'Band Manager', 'Ringer of Bells', 'Keeper of Stones', 'Khaleesi', 'Warbler', 'Frog Catcher', 'Cat Scratcher', 'X-filer', 'Figure of an imagination'];

$(document).ready(onReady);

function onReady() {
  
    $table = $('<table></table>');
    $table.append('<thead><tr><th>Name</th><th width="150">ID</th><th width="250">Title</th><th width="200">Salary</th><th width="100">DELETE</th></thead>')
  
    $tbody = $('<tbody id="tableBody"></tbody>');
    $table.append($tbody);
  
    $('.container').append($table);

    $('body').on('click', ".deleter", deleteFunc);
    $("#submitInfoInput").on('click', submitInfo);
    $('#randomPerson').on('click', createRandom);
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


function createRandom() {
    var employee = new Random();
    employees.push(employee)

    costCalc();
    $('#totalCost').html('Total Cost of Human Property: $'+totalCost)
    
    employeePrint()
    
}

function Random () {
    this.name = firstNames[Math.floor(Math.random()*(firstNames.length))] +' '+lastNames[Math.floor(Math.random()*(lastNames.length))];
    this.id = Math.floor(Math.random()*6592);
    this.title = titles[Math.floor(Math.random()*(titles.length))];
    this.salary = Math.floor(Math.random()*10000000)/100;
    this.added = empAdd;
    empAdd++
}

