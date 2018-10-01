var studentService = (function () {

    // Local Storage's name.
    var _localStorageKey = 'students';
    // Initialization of the list.
    var _students = [];

    _loadStudents();

    // Loads all the students from localstorage.
    function _loadStudents() {
        var str = window.localStorage[_localStorageKey] || '[]';
        _students = JSON.parse(str);
    }

    // It returns the list of students.
    function getStudents() {
        return _students;
    }

    // Add a new student.
    function addStudent(student) {
        _students.push(student);
        window.localStorage[_localStorageKey] = JSON.stringify(_students); 
    }

    // Update a student.
    function updateStudent(student, index) {
        _students[index] = student;
        window.localStorage[_localStorageKey] = JSON.stringify(_students);
    }

    // Public methods.
    return {
        getStudents: getStudents,
        addStudent: addStudent,
        updateStudent: updateStudent
    };

})();
