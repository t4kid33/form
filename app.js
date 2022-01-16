var app = new Vue({
    el: '#form',
    data: {
        studentList: [{
            id: 1234567890,
            name: "test",
            last_name: "test2",
            gpa: 4,
            email: "test@gmail.com"

        }]
    },
    methods: {
        value: function () {
            this.studentList.push({
                id: this.student_id,
                name: this.name,
                last_name: this.lname,
                gpa: this.gpa,
                email: this.email
            })

        },
        Delete(index) {
            this.studentList.splice(index, 1)
        }
    },
})