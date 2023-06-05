interface Student {
  name: string;
  califications: number[];
}

interface StudentSummary {
  name: string;
  highestCalification: number;
  averageCalifications: number;
}

type CalculationFn = (califications: number[]) => number;
type SummaryFn = (studentList: Student[]) => StudentSummary[];

const students: Student[] = [
  {
    name: "Juan",
    califications: [1.56, 2.13, 7.53, 9.71, 2.67, 2.43, 2.86, 9.42, 8.08, 7.34],
  },
  {
    name: "Álvaro",
    califications: [4.49, 1.52, 7.0, 8.3, 8.01, 6.45, 3.72, 3.27, 6.99, 6.01],
  },
  {
    name: "María",
    califications: [2.99, 7.33, 1.14, 3.26, 0.98, 2.94, 4.99, 4.51, 1.8, 9.3],
  },
  {
    name: "Jorge",
    califications: [4.6, 3.63, 9.07, 9.03, 3.05, 6.61, 4.81, 1.39, 2.97, 8.69],
  },
  {
    name: "Mónica",
    califications: [9.72, 6.07, 1.11, 4.72, 0.04, 1.56, 0.66, 3.87, 6.97, 9.48],
  },
];

const highestCalification: CalculationFn = (
  califications: number[]
): number => {
  const highest = califications.sort((a, b) => b - a)[0];
  return Number(highest.toPrecision(3));
};

const averageCalifications: CalculationFn = (
  califications: number[]
): number => {
  const average =
    califications.reduce((acc, act) => acc + act) / califications.length;
  return Number(average.toPrecision(3));
};

const summarizeClassRoom: SummaryFn = (
  studentList: Student[]
): StudentSummary[] => {
  const StudentSummary = studentList.map((student) => {
    return {
      name: student.name,
      highestCalification: highestCalification(student.califications),
      averageCalifications: averageCalifications(student.califications),
    };
  });
  return StudentSummary;
};


const button17 = document.getElementById("calificationButton") as HTMLElement;
button17.addEventListener("click", function (event: Event) {
  event.preventDefault();
  console.log("Ejercicio 17 => Califications Summary");
  // Ejemplo
  console.log(summarizeClassRoom(students));
  // [
  //   { name: 'Juan', highestCalification: 9.71, averageCalifications: '5.37' },
  //   { name: 'Álvaro', highestCalification: 8.3, averageCalifications: '5.58' },
  //   { name: 'María', highestCalification: 9.3, averageCalifications: '3.92' },
  //   { name: 'Jorge', highestCalification: 9.07, averageCalifications: '5.38' },
  //   { name: 'Mónica', highestCalification: 9.72, averageCalifications: '4.42' }
  // ]  
});