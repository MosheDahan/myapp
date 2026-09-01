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
        <div style={{
            minHeight: '30vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px 0'
        }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '500px', width: '100%' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <input
                        type="text"
                        value={studentName}
                        onChange={handleChange}
                        placeholder="Enter student name"
                        style={{ flex: 1, padding: '10px 12px' }}
                    />
                    <input
                        type="number"
                        value={age || ''}
                        onChange={handleAgeChange}
                        placeholder="Enter student age"
                        style={{ flex: 1, padding: '10px 12px' }}
                    />
                    <button onClick={addStudent} style={{ padding: '10px 16px' }}> Add Student </button>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {students.map((student) => (
                        <li key={student.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span>{student.studentName} - {student.age}</span>
                            <button onClick={() => removeStudent(student.id)} style={{ padding: '8px 12px' }}> Remove </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}