// Import types/models
import { Timestamp } from "../Models/Symptom_Register";

// Date Functions handling
// Returns a Date object from timestamp
export function timestampToDate(timestamp: Timestamp): Date {
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