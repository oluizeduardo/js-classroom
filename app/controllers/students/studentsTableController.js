(function () {
    $("#table-students").html("");
    $("#table-students").html(
        "<thead>" +
        "<tr>" +
        "<th>ID</th>" +
        "<th>Name</th>" +
        "<th>Birth date</th>" +
        "<th>Gender</th>" +
        "<th>Actions</th>" +
        "</tr>" +
        "</thead>" +
        "<tbody>" +
        "</tbody>"
    );

    // Brings the students list and print its itens on the table.
    studentService.getStudents().forEach(writeDocument);

    function writeDocument(student, i) {
        $("#table-students tbody").append("<tr>" +
            "<td>" + student.ID + "</td>" +
            "<td>" + student.Name + "</td>" +
            "<td>" + student.Birthdate + "</td>" +
            "<td>" + student.Gender + "</td>" +
            "<td>Edit Delete</td>"+
            "</tr>");
    }

})();
