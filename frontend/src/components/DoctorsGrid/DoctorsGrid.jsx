import { doctors as mockDoctors } from "../../utils/mocks/doctors"
import { useEffect, useState } from "react"
import axios from "axios"
import DoctorCard from "../DoctorCard/DoctorCard"

export default function DoctorsGrid() {
    const [doctorsInfo, setDoctorsInfo] = useState([])
    
    useEffect(() => {
        const fetchDoctors = async () => {
            const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
            await delay(2000)
            const response = { data: mockDoctors }

            setDoctorsInfo(response.data)
        }

        fetchDoctors()
    }, []) 

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {doctorsInfo.map((doctorInfo) => (
                <DoctorCard key={doctorInfo.id} doctor={doctorInfo} />
            ))}
        </div>
    )
}