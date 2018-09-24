var classroomService = (function () {

    // Local Storage's name.
    var _localStorageKey = 'classrooms';
    // Initialization of the list.
    var _classrooms = [];

    _loadClassrooms();

    // Loads all the classrooms from localstorage.
    function _loadClassrooms() {
        var str = window.localStorage[_localStorageKey] || '[]';
        _classrooms = JSON.parse(str);
    }

    // It returns the list of classrooms.
    function getClassrooms() {
        return _classrooms;
    }

    // Add a new classroom.
    function addClassroom(classroom) {
        _classrooms.push(classroom);
        window.localStorage[_localStorageKey] = JSON.stringify(_classrooms);
    }

    // Update a classroom.
    function updateClassroom(classroom, index) {
        _classrooms[index] = classroom;
        window.localStorage[_localStorageKey] = JSON.stringify(_classrooms);
    }

    // Public methods.
    return {
        getClassrooms: getClassrooms,
        addClassroom: addClassroom,
        updateClassroom: updateClassroom
    };

})();
