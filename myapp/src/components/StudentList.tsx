import { useState, type ChangeEvent } from 'react';

interface Student {
  id: number;
  studentName: string;
  age: number;
}

export default function StudentList() {
  const [studentName, setStudentName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [students, setStudents] = useState<Student[]>([]);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStudentName(event.target.value);
  };

  const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAge(Number(event.target.value));
  };

  const addStudent = () => {
    const trimmedName = studentName.trim();

    if (!trimmedName) {
      return;
    }

    const newStudent: Student = {
      id: Date.now(),
      studentName: trimmedName,
      age,
    };

    setStudents((prevStudents) => [...prevStudents, newStudent]);
    setStudentName('');
    setAge(0);
  };

  const removeStudent = (id: number) => {
    setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
  };

  return (
    <div
      style={{
        minHeight: '30vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 0',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          maxWidth: '500px',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', gap: '12px' }}>
          <input
            type="text"
            value={studentName}
            onChange={handleNameChange}
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
          <button onClick={addStudent} style={{ padding: '10px 16px' }}>
            Add Student
          </button>
        </div>

        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {students.map((student) => (
            <li
              key={student.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <span>
                {student.studentName} - {student.age}
              </span>
              <button onClick={() => removeStudent(student.id)} style={{ padding: '8px 12px' }}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}