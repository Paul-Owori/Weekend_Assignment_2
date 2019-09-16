/**
 * Create a grades object that stores a set of student grades in an object.
 * Provide afunction for adding a
 * grade and a function for displaying the student’s grade average.
 */
//Student grade object constructor
class StudentGrade {
    constructor(name, subject1, subject1Grade) {
        this.name = name;
        this[subject1] = subject1Grade;
        this.allGrades = [{
            subject: subject1,
            grade: subject1Grade
        }];
        this.avGrade = function () {
            let sum = 0;
            this.allGrades.forEach(gradeObject => {
                sum += gradeObject.grade;
            });
            let average = sum / this.allGrades.length;
            return average;
        };
        //Function to add a new subject and grade, or just a new grade
        this.addGrade = function (subject, grade) {
            this[subject] = grade;
            let gradeObject = {
                subject: subject,
                grade: grade
            };
            //Check if Subject was previously added
            let oldSubject = this.allGrades.filter(gradeObject => {
                return gradeObject.subject === subject;
            });
            //If a subject with the same name already exists in the object, delete the old value and replace it.
            if (oldSubject) {
                this.allGrades = this.allGrades.filter(gradeObject => {
                    return gradeObject.subject !== subject;
                });
            }
            this.allGrades.push(gradeObject);
            console.log(`A grade of ${grade} for ${subject} was added for ${this.name}.`);
        };
    }
}


//Typical student grade object
const studentGrades = {
    //Student Name
    name: "John",
    //Subjects
    Math: 90,
    Physics: 85,
    //Array of all grades(to be used for calculating average)
    allGrades: [{
        subject: 'Math',
        grade: 90
    }, {
        subject: 'Physics',
        grade: 85
    }],
    //Function to calculate Grade average
    avGrade: function () {
        let sum = 0;
        this.allGrades.forEach(gradeObject => {
            sum += gradeObject.grade
        })
        let average = sum / this.allGrades.length;
        return average
    },
    //Function to add a new subject and grade, or just a new grade
    addGrade: function (subject, grade) {
        this[subject] = grade;
        let gradeObject = {
            subject: subject,
            grade: grade
        }
        //Check if Subject was previously added
        let oldSubject = this.allGrades.filter(gradeObject => {
            return gradeObject.subject === subject
        })

        //If a subject with the same name already exists in the object, delete the old value and replace it.
        if (oldSubject) {
            this.allGrades = this.allGrades.filter(gradeObject => {
                return gradeObject.subject !== subject
            })
        }
        this.allGrades.push(gradeObject)
        console.log(`A grade of ${grade} for ${subject} was added for ${this.name}.`)
    }
}