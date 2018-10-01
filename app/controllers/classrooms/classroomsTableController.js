(function () {
    $("#table-classrooms").html("");
    $("#table-classrooms").html(
        "<thead>" +
        "<tr>" +
        "<th>ID</th>" +
        "<th>Classroom Name</th>" +
        "<th>Class</th>" +
        "<th>Actions</th>" +
        "</tr>" +
        "</thead>" +
        "<tbody>" +
        "</tbody>"
    );

    // Brings the classrooms list and print its itens on the table.
    classroomService.getClassrooms().forEach(writeDocument);

    function writeDocument(room, i) {
        $("#table-classrooms tbody").append("<tr>" +
            "<td>" + room.ID + "</td>" +
            "<td>" + room.Name + "</td>" +
            "<td>" + room.Class + "</td>" +
            "<td>Edit Delete</td>"+
            "</tr>");
    }

})();
