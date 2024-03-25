// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// interface Student {
//     id: number;
//     name: string;
//     regno: string; // Add regNo to Student interface
// }

// // Other interface definitions...

// export default function RecapSheet() {
//     const [students, setStudents] = useState<Student[]>([]);
//     // Other state variables...

//     useEffect(() => {
//         // Fetch student data
//         axios.get(`/api/students`)
//             .then(response => {
//                 setStudents(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching student data:', error);
//             });

//         // Other data fetching logic...
//     }, []);
// // 
//     return (
//         <div>
//             <h1>Recap Sheet</h1>

//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Reg. #</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {students.map((student, index) => (
//                         <tr key={index}>
//                             <td>{student.name}</td>
//                             <td>{student.regno}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Student {
    id: number;
    name: string;
    regno: string;
}

interface Grade {
    gradeid: number;
    grade: string;
    gpa: number;
}

interface Head {
    hid: number;
    headname: string;
}

interface Mark {
    mid: number;
    regno: string;
    marks: number;
}

export default function RecapSheet() {
    const [students, setStudents] = useState<Student[]>([]);
    const [grades, setGrades] = useState<Grade[]>([]);
    const [heads, setHeads] = useState<Head[]>([]);
    const [marks, setMarks] = useState<Mark[]>([]);

    useEffect(() => {
        // Fetch student data
        axios.get(`/api/students`)
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error('Error fetching student data:', error);
            });

        // Fetch grade data
        axios.get(`/api/grades`)
            .then(response => {
                setGrades(response.data);
            })
            .catch(error => {
                console.error('Error fetching grade data:', error);
            });

        // Fetch head data
        axios.get(`/api/heads`)
            .then(response => {
                setHeads(response.data);
            })
            .catch(error => {
                console.error('Error fetching head data:', error);
            });

        // Fetch mark data
        axios.get(`/api/marks`)
            .then(response => {
                setMarks(response.data);
            })
            .catch(error => {
                console.error('Error fetching mark data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Recap Sheet</h1>

            <h2>Students</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Reg. #</th>
                        <th>Quiz 1</th>
                        <th>Quiz 2</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.regno}</td>
                            {/* Add quiz1 and quiz2 data here */}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Add similar sections for grades, heads, and marks */}
            {/* Display grades */}
            <h2>Grades</h2>
            <ul>
                {grades.map((grade, index) => (
                    <li key={index}>{grade.grade} ({grade.gpa})</li>
                ))}
            </ul>

            {/* Display heads */}
            <h2>Heads</h2>
            <ul>
                {heads.map((head, index) => (
                    <li key={index}>{head.headname}</li>
                ))}
            </ul>

            {/* Display marks */}
            <h2>Marks</h2>
            <ul>
                {marks.map((mark, index) => (
                    <li key={index}>{mark.regno} - {mark.marks}</li>
                ))}
            </ul>
        </div>
    );
}
