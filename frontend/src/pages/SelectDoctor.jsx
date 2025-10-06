import DoctorsFilter from "../components/DoctorsFilter/DoctorsFilter";
import DoctorsGrid from "../components/DoctorsGrid/DoctorsGrid";

export default function SelectDoctor() {
    return(
        <div className="flex flex-col gap-10">
            <DoctorsFilter />
            <DoctorsGrid />
        </div>
    )
}