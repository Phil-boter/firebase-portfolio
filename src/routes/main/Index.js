import { useContext } from "react";
import Mainheader from "../../components/mainHeader/Index";
import { DataContext } from "../../context/DataProvider";
export default function Main() {
    const projects = useContext(DataContext);
    console.log("main", projects);
    return (
        <>
            <Mainheader projects={projects} />
        </>
    );
}
