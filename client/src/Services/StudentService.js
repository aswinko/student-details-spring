import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/students";

class StudentService{

    saveStudent(student) {
        return axios.post(STUDENT_API_BASE_URL, student);
    }

    getAllStudents() {
        return axios.get(STUDENT_API_BASE_URL);
    }

    
}

export default new StudentService();