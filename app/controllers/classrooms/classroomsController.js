(function () {

    function resetForm(){
        document.getElementById('fd_id').value='';
        document.getElementById('fd_name').value='';
        document.getElementById('fd_class').value='';
    }

    function addClassroom(event) {
        event.preventDefault();
        var classroom = {
            ID: $("#fd_id").val(),
            Name: $("#fd_name").val(),
            Class: $("#fd_class option:selected").text()
        };
        classroomService.addClassroom(classroom);
        resetForm();
        $("#alert-registration").removeClass("hide");
        $('#alert-registration').fadeIn( 300 ).delay( 2000 ).fadeOut( 400 );

    }

    function addListener() {
        var btn = document.getElementById("btnAdd");
        btn.addEventListener('click', addClassroom);
    }

    addListener();

})();
