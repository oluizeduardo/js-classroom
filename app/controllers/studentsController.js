(function () {

    function resetForm(){
        document.getElementById('fd_id').value='';
        document.getElementById('fd_name').value='';
        document.getElementById('fd_birthdate').value='';
        document.getElementById('fd_gender').value='';
    }

    function addStudent(event) {
        event.preventDefault();
        var student = {
            ID: $("#fd_id").val(),
            Name: $("#fd_name").val(),
            Birthdate: $("#fd_birthdate").val(),
            Gender: $("#fd_gender option:selected").text()
        };
        studentService.addStudent(student);
        resetForm();
        $("#alert-registration").removeClass("hide");
        $('#alert-registration').fadeIn( 300 ).delay( 2000 ).fadeOut( 400 );

    }

    function addListener() {
        // var btn = document.getElementById("btnAdd");
        // btn.addEventListener('click', addStudent);
        console.log('Clicou aqui!!');
    }

    addListener();

})();
