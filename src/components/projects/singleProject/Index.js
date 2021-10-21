import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "./style.css";

import SingleProjectSection from "../singleProjectSection/Index";

import { getFirestore, getDoc, doc } from "firebase/firestore";
import { getStorage, ref, listAll, getDownloadURL } from "@firebase/storage";

const db = getFirestore();
const storage = getStorage();

export default function SingleProjectComponent({ projectId, language }) {
    const history = useHistory();

    const [project, setProject] = useState({});
    const [imageLink, setURL] = useState([]);
    const [error, setError] = useState(false);
    const [imageArray, setImageArray] = useState([]);

    const displayImage = (imageRef) => {
        const storage = getStorage();

        getDownloadURL(ref(storage, imageRef))
            .then((url) => {
                setURL(url);
                setImageArray((imageArray) => [...imageArray, url]);
            })
            .catch((error) => {
                handleError();
            });
    };

    const handleError = () => {
        setError(true);
        setTimeout(() => {
            setError(false);
        }, 2000);
        history.goBack();
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        setImageArray([]);

        const getData = async () => {
            // first get the project data from firestore
            // after get the image-urls from fireStorage
            // and download the afterwards
            try {
                const docRef = doc(db, "projects", projectId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProject(docSnap.data());
                    // Now we get the references of these images+
                    const listRef = ref(storage, projectId);

                    listAll(listRef)
                        .then((res) => {
                            res.items.forEach((imageRef) => {
                                // And finally display them

                                displayImage(imageRef);
                            });
                        })
                        .catch((error) => {
                            handleError();
                        });
                } else {
                    // doc.data() will be undefined in this case
                    handleError();
                }
            } catch (err) {
                console.log("no singleProject");
            }
        };
        getData();
    }, []);

    return (
        <div className="single-project-main-container">
            <div className="single-project-main-inner-container">
                <SingleProjectSection
                    projectId={projectId}
                    project={project}
                    imageLink={imageLink}
                    imageArray={imageArray}
                    language={language}
                />
            </div>

            {error && <h2>It must be here somewhere...</h2>}
        </div>
    );
}
