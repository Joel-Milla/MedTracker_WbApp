// Import types/models
import { Timestamp } from "../Models/Symptom_Register";
import { Symptom, Register } from "../Models/Symptom_Register";

// Date Functions handling
export function timestampToDate(timestamp: Timestamp): Date {
    // Returns a Date object from timestamp
    // Convert seconds to milliseconds and add nanoseconds converted to milliseconds
    const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
    return date;
}

// Return a string that has the month and day of the date
export function dateToString(date: Date): string {
    const monthsInSpanish = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const month = monthsInSpanish[date.getMonth()];
    const day = date.getDate();

    return `${month} ${day}`;
}

// Obtain the name of a symptom based on its id
export const getSymptomName = (symptoms: Symptom[], idSymptom: string): string => {
    // Obtain the symptom that matched
    const symptom: Symptom | undefined = symptoms.find((symptom) => symptom.id == idSymptom);
    const symptomName = symptom?.nombre ?? 'Sin definir'
    return symptomName;
}

// Obtain the min, mean, max value of a given symptom inside the registers
export const getInisightsValues = (registers: Register[], idSymptom: string): {min: number, mean: number, max: number} => {
    let min = Infinity;
    let sum = 0;
    let max = 0;
    let numValues = 0;
    // Caluclate the min, max, and sum of all values
    for (const register of registers) {
        if (register.idSymptom == idSymptom) {
            if (register.cantidad > max) {
                max = register.cantidad;
            }
            if (register.cantidad < min) {
                min = register.cantidad;
            }
            sum += register.cantidad;
            numValues += 1 // Count the number of values
        }
    }
    // If the values didnt change, it means that 
    if (numValues == 0) {
        return {
            min: 0,
            mean: 0,
            max: 0,
        }
    }

    // When some values where found, print them
    return {
        min,
        mean: sum / numValues,
        max,
    };

}