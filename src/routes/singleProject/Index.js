import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

import { getFirestore, getDoc, doc } from "firebase/firestore";
import { getStorage, ref, listAll, getDownloadURL } from "@firebase/storage";

const db = getFirestore();
const storage = getStorage();

const PopUpPicture = ({ setPopUpPicture, item, index }) => {
    return (
        <div
            key={index}
            className="popup-picture-container"
            onClick={() => setPopUpPicture(false)}
        >
            <h2>click to close</h2>
            <img className="popup-picture" src={item} alt="" />
        </div>
    );
};

const SingleProjectImage = ({ index, item, imageLink }) => {
    const [picture, setPopUpPicture] = useState(false);

    return (
        <>
            <div className="single-project-image-container">
                <img
                    className="content-image slide-image"
                    src={item}
                    alt=""
                    onClick={() => setPopUpPicture(true)}
                />
            </div>
            {picture && (
                <PopUpPicture
                    item={item}
                    index={index}
                    setPopUpPicture={setPopUpPicture}
                />
            )}
        </>
    );
};

let imageArray = [];
const SingleProjectSection = ({ project, projectId, imageLink, language }) => {
    const history = useHistory();

    imageArray.push(imageLink);

    return (
        <div className="main-color-wrapper">
            {project && (
                <>
                    <div className="article-image-container">
                        <img
                            className="article-image modal-image slide-main"
                            id="article-image"
                            src={project.image}
                            alt={project.title}
                        />
                    </div>
                    <section className="single">
                        <div className="single-project-header-container">
                            <span className="single-project-header">
                                {project.title}
                            </span>
                            <br></br>
                            {project.title_second ? (
                                <span className="single-project-header title2">
                                    {project.title_second}
                                </span>
                            ) : (
                                <></>
                            )}
                        </div>
                        <article>
                            <div className="article-content description">
                                <p className="article-body">
                                    {project.description}
                                </p>
                            </div>
                            <div className="content-image-container">
                                {imageArray && imageArray.length !== 0 ? (
                                    imageArray
                                        .map((item, index) => (
                                            <SingleProjectImage
                                                item={item}
                                                key={index}
                                            />
                                        ))
                                        .slice(1)
                                ) : (
                                    <>loading...</>
                                )}
                            </div>
                            <div className="article-content description">
                                {/* <h4 className="article-headline"></h4> */}
                                <p className="article-body">
                                    {project.technology}
                                </p>
                            </div>
                            <div className="article-content description">
                                <p className="article-body">
                                    You can also look at the code belonging to
                                    the app on{" "}
                                    <span
                                        className="link-github"
                                        onClick={() =>
                                            window.open(project.link)
                                        }
                                    >
                                        Github
                                    </span>
                                    .
                                </p>
                            </div>
                            {project.host && (
                                <div className="article-content">
                                    <p className="article-body">
                                        It is possible to try out the app live{" "}
                                        <span
                                            className="link-linkedIn"
                                            onClick={() =>
                                                window.open(project.host)
                                            }
                                        >
                                            here
                                        </span>
                                        .
                                    </p>
                                </div>
                            )}
                        </article>

                        <button onClick={() => history.goBack()}>back</button>
                    </section>
                </>
            )}
        </div>
    );
};

export default function SingleProject({ projectId }) {
    const history = useHistory();

    const [project, setProject] = useState({});
    const [imageLink, setURL] = useState([]);
    const [error, setError] = useState(false);

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

    const displayImage = (imageRef) => {
        const storage = getStorage();
        getDownloadURL(ref(storage, imageRef))
            .then((url) => {
                setURL(url);
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
        imageArray = [];
        getData();
    }, []);
    return (
        <>
            <SingleProjectSection
                projectId={projectId}
                imageLink={imageLink}
                project={project}
            />
            {error && <h2>It must be here somewhere...</h2>}
        </>
    );
}
