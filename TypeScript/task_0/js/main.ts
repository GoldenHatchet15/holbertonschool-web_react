// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two student objects
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "San Francisco",
  };
  
  // Store the students in an array
  const studentsList: Student[] = [student1, student2];
  
  // Create and render the table
  const table = document.createElement("table");
  const tableHeader = table.createTHead();
  const headerRow = tableHeader.insertRow();
  const th1 = document.createElement("th");
  const th2 = document.createElement("th");
  th1.textContent = "First Name";
  th2.textContent = "Location";
  headerRow.appendChild(th1);
  headerRow.appendChild(th2);
  
  const tableBody = table.createTBody();
  studentsList.forEach((student) => {
    const row = tableBody.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });
  
  // Append the table to the document body
  document.body.appendChild(table);