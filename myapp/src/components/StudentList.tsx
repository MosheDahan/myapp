import React from "react";
import { useState } from "react";

interface Student {
    id: number;
    studentName: string;
    age: number;
}

export default function StudentList() {

    const [studentName, setStudentName] = useState<string>('');
    const [age, setAge] = useState<number>(0);
    const [students, setStudents] = useState<Student[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStudentName(e.target.value);
    };

    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAge(Number(e.target.value));
    };

    const addStudent = () => {
        if (studentName.trim() !== '') {
            const newStudent: Student = {
                id: Date.now(),
                studentName: studentName.trim(),
                age: age
            };
            setStudents([...students, newStudent]);
            setStudentName('');
            setAge(0);
        }
    };

    const removeStudent = (id: number) => {
        setStudents(students.filter(student => student.id !== id));
    };

    return (
        <div>
            <input type="text" value={studentName} onChange={handleChange} placeholder="Enter student name" />
            <input type="number" value={age || ''} onChange={handleAgeChange} placeholder="Enter student age" />
            <button onClick={addStudent}> Add Student </button>
            <li>
                {students.map((student) => (
                    <div key={student.id}>
                        {student.studentName} - {student.age}
                        <button onClick={() => removeStudent(student.id)}> Remove </button>
                    </div>
                ))}
            </li>
        </div>
    );
}