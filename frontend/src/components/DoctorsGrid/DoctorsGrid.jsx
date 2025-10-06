import { doctors as mockDoctors } from "../../utils/mocks/doctors"
import { useEffect, useState } from "react"
import DoctorCard from "../DoctorCard/DoctorCard"

export default function DoctorsGrid() {
    const [doctorsInfo, setDoctorsInfo] = useState([])
    
    useEffect(() => {
        const fetchDoctors = async () => {
            const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
            await delay(1000)
            const response = { data: mockDoctors }
            setDoctorsInfo(response.data)
        }
        fetchDoctors()
    }, []) 

    return(
        <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Médicos Disponíveis</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {doctorsInfo.map((doctorInfo) => (
                    <DoctorCard key={doctorInfo.id} doctor={doctorInfo} />
                ))}
            </div>
        </section>
    )
}