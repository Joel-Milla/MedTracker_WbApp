// Components
import Graph from "../Graph/Graph"
// Models
import { SymptomsObject, RegisterObject } from '../../DashboardModels/dashboardModels';
// Own styles
import styles from "./MainAnalysis.module.css"

const REGISTERS: RegisterObject[] = [
    {
        "3A52A0FC-76CC-4B60-9D5F-C1F481554632": {
            "fecha": "February 8",
            "idSymptom": "CA2F8094-E00C-4FDA-893E-271B6D1DA1A5",
            "notas": "Minor symptoms",
            "cantidad": 86.99,
            "id": "3A52A0FC-76CC-4B60-9D5F-C1F481554632"
        }
    },
    {
        "55872B00-577D-49C1-A157-ADB07A373827": {
            "fecha": "February 2",
            "idSymptom": "44E5A71C-198B-489D-9CA7-F68F04044C36",
            "notas": "No symptoms",
            "cantidad": 0,
            "id": "55872B00-577D-49C1-A157-ADB07A373827"
        }
    },
    {
        "6EF2B458-5639-4520-9E6F-7609292788B2": {
            "fecha": "January 24",
            "idSymptom": "1FC6C98A-D827-413A-8183-FD25A0771810",
            "notas": "Initial occurrence",
            "cantidad": 0,
            "id": "6EF2B458-5639-4520-9E6F-7609292788B2"
        }
    },
    {
        "C5DA3D1A-AB57-4F89-8F5D-150FACE5F499": {
            "fecha": "February 6",
            "idSymptom": "CA2F8094-E00C-4FDA-893E-271B6D1DA1A5",
            "notas": "Improving",
            "cantidad": 67.56,
            "id": "C5DA3D1A-AB57-4F89-8F5D-150FACE5F499"
        }
    },
    {
        "A5B638D1-C657-4E2A-B3C4-A82154F3B5A9": {
            "fecha": "February 12",
            "idSymptom": "1E284C31-33F0-4112-B9C0-0C43AED4EBE6",
            "notas": "Much better",
            "cantidad": 95.36,
            "id": "A5B638D1-C657-4E2A-B3C4-A82154F3B5A9"
        }
    },
    {
        "D4E3F6A2-CFE2-4F25-8A58-18333E0F2158": {
            "fecha": "February 15",
            "idSymptom": "36FEEA09-3A63-4A48-B595-B9CCA47A3C40",
            "notas": "Significant improvement",
            "cantidad": 120.48,
            "id": "D4E3F6A2-CFE2-4F25-8A58-18333E0F2158"
        }
    },
    {
        "E3F1D3C1-AD67-4EAE-B8C8-84D168B8F84F": {
            "fecha": "February 20",
            "idSymptom": "44E5A71C-198B-489D-9CA7-F68F04044C36",
            "notas": "Symptoms returned",
            "cantidad": 50.21,
            "id": "E3F1D3C1-AD67-4EAE-B8C8-84D168B8F84F"
        }
    },
    {
        "F2A3D4E5-B657-4C83-97D9-EA8F0B5C3DFF": {
            "fecha": "February 25",
            "idSymptom": "1FC6C98A-D827-413A-8183-FD25A0771810",
            "notas": "Stable condition",
            "cantidad": 77.13,
            "id": "F2A3D4E5-B657-4C83-97D9-EA8F0B5C3DFF"
        }
    },
    {
        "B4C5D6E7-F8G9-H0I1-J2K3-L4M5N6O7P8Q9": {
            "fecha": "March 1",
            "idSymptom": "CA2F8094-E00C-4FDA-893E-271B6D1DA1A5",
            "notas": "Getting worse",
            "cantidad": 23.45,
            "id": "B4C5D6E7-F8G9-H0I1-J2K3-L4M5N6O7P8Q9"
        }
    },
    {
        "R4S5T6U7-V8W9-X0Y1-Z2A3-B4C5D6E7F8G9": {
            "fecha": "March 5",
            "idSymptom": "36FEEA09-3A63-4A48-B595-B9CCA47A3C40",
            "notas": "No symptoms observed",
            "cantidad": 0,
            "id": "R4S5T6U7-V8W9-X0Y1-Z2A3-B4C5D6E7F8G9"
        }
    },
    {
        "H1I2J3K4-L5M6-N7O8-P9Q0-R1S2T3U4V5W6": {
            "fecha": "March 10",
            "idSymptom": "1E284C31-33F0-4112-B9C0-0C43AED4EBE6",
            "notas": "Minor improvement noted",
            "cantidad": 58.79,
            "id": "H1I2J3K4-L5M6-N7O8-P9Q0-R1S2T3U4V5W6"
        }
    },
    {
        "Z1X2C3V4-B5N6-M7L8-K9J8-H7G6F5E4D3C2": {
            "fecha": "March 15",
            "idSymptom": "44E5A71C-198B-489D-9CA7-F68F04044C36",
            "notas": "Worsening condition",
            "cantidad": 33.89,
            "id": "Z1X2C3V4-B5N6-M7L8-K9J8-H7G6F5E4D3C2"
        }
    }
];

const SYMPTOM: SymptomsObject = {
    "CA2F8094-E00C-4FDA-893E-271B6D1DA1A5": {
        "fecha": "January 18, 2024 at 5:12:27 PM UTC-6",
        "color": "#007AFF",
        "cuantitativo": false,
        "unidades": "",
        "icon": "plus.viewfinder",
        "description": "3",
        "id": "CA2F8094-E00C-4FDA-893E-271B6D1DA1A5",
        "nombre": "Test3",
        "notificacion": "",
        "activo": true
    }
}

function MainAnalysis() {
    const registers = REGISTERS.map( (register) => Object.values(register)[0]);
    return (
        <>
            <div className={`${styles.container} col-12 col-md-8`}>
                <Graph symptom={Object.values(SYMPTOM)[0]} registers={registers}/>
            </div>
        </>
    )
}

export default MainAnalysis