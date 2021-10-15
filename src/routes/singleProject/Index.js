// import { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";

import SingleProjectComponent from "../../components/projects/singleProject/Index";
import "./style.css";

// import { getFirestore, getDoc, doc } from "firebase/firestore";
// import { getStorage, ref, listAll, getDownloadURL } from "@firebase/storage";

// const db = getFirestore();
// const storage = getStorage();

const SingleProject = ({ projectId, language }) => {
    // const history = useHistory();

    // const [project, setProject] = useState({});
    // const [url, setURL] = useState("");
    // const [imageArray, setImageArray] = useState([]);
    // const [error, setError] = useState(false);

    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // const getData = async () => {
    //     // first get the project data from firestore
    //     // after get the image-urls from fireStorage
    //     // and download the afterwards
    //     try {
    //         const docRef = doc(db, "projects", projectId);
    //         const docSnap = await getDoc(docRef);

    //         if (docSnap.exists()) {
    //             try {
    //                 setProject(docSnap.data());
    //                 // Now we get the references of these images+
    //                 const listRef = ref(storage, projectId);
    //                 const res = await listAll(listRef);
    //                 res.items.forEach((imageRef) => {
    //                     // And finally display them
    //                     displayImage(imageRef);
    //                 });
    //             } catch (error) {
    //                 handleError();
    //             }
    //         } else {
    //             // doc.data() will be undefined in this case
    //             handleError();
    //         }
    //     } catch (err) {
    //         console.log("no singleProject");
    //     }
    // };

    // const displayImage = async (imageRef) => {
    //     try {
    //         const storage = getStorage();
    //         const url = await getDownloadURL(ref(storage, imageRef));
    //         setURL(url);
    //         setImageArray((imageArray) => [...imageArray, url]);
    //     } catch (error) {
    //         handleError();
    //     }
    // };

    // const handleError = () => {
    //     setError(true);
    //     setTimeout(() => {
    //         setError(false);
    //     }, 2000);
    //     history.goBack();
    // };

    // useEffect(() => {
    //     getData();
    // }, [getData, url, setURL, setImageArray, imageArray]);

    // if (imageArray.length === 0) {
    //     getData();
    //     return null;
    // }

    return (
        <>
            <SingleProjectComponent
                projectId={projectId}
                language={language}
                // imageArray={imageArray}
                // project={project}
            />
            {/* {error && <h2>It must be here somewhere...</h2>} */}
        </>
    );
};
export default SingleProject;
