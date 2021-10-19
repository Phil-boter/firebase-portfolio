import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BackButton from "../../backButton/Index";
import "./style.css";

import { getFirestore, getDoc, doc } from "firebase/firestore";
import { getStorage, ref, listAll, getDownloadURL } from "@firebase/storage";

const db = getFirestore();
const storage = getStorage();

const PopUpPicture = ({ setPopUpPicture, item, header }) => {
    return (
        <div
            className="popup-picture-container"
            onClick={() => setPopUpPicture(false)}
        >
            <h2>click to close</h2>
            <img className="popup-picture" src={item} alt={header} />
        </div>
    );
};

const SingleProjectImage = ({ item, header }) => {
    const [picture, setPopUpPicture] = useState(false);

    return (
        <div>
            <img
                className="content-image"
                src={item}
                alt={header}
                onClick={() => setPopUpPicture(true)}
            />

            {picture && (
                <PopUpPicture
                    item={item}
                    header={header}
                    setPopUpPicture={setPopUpPicture}
                />
            )}
        </div>
    );
};

const SingleProjectArticle = ({ project, index, header, item }) => {
    return (
        <section>
            {index === 0 ? (
                <>
                    <div className="singleproject-article">
                        <div className="singleproject-content-image-container">
                            <aside>
                                <SingleProjectImage
                                    item={item}
                                    header={header}
                                />
                            </aside>
                        </div>
                        <div className="singleproject-article-content-container">
                            <h2 className="singleproject-article-header">
                                {"description".toUpperCase()}
                            </h2>
                            <p>{project.description}</p>
                        </div>
                    </div>
                </>
            ) : null}
            {index === 1 ? (
                <>
                    <div className="singleproject-article">
                        <div>
                            <h2 className="singleproject-article-header">
                                {"technology".toUpperCase()}
                            </h2>
                            <p>{project.technology}</p>
                        </div>
                        <aside>
                            <SingleProjectImage item={item} header={header} />
                        </aside>
                    </div>
                </>
            ) : null}
            {index === 2 ? (
                <>
                    {index === 2 ? (
                        <>
                            <div className="singleproject-article">
                                <aside>
                                    <SingleProjectImage
                                        item={item}
                                        header={header}
                                    />
                                </aside>
                                <div>
                                    <h2 className="singleproject-article-header">
                                        {"github".toUpperCase()}
                                    </h2>
                                    <p>
                                        You can also look at the code belonging
                                        to the app on
                                        <span className="link-github">
                                            <a
                                                href={project.link}
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                Github
                                            </a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="singleproject-article">
                                <div>
                                    <h2 className="singleproject-article-header">
                                        {"github".toUpperCase()}
                                    </h2>
                                    <p>
                                        You can also look at the code belonging
                                        to the app on
                                        <span className="link-github">
                                            <a
                                                href={project.link}
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                Github
                                            </a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                </>
            ) : null}
            {index === 3 ? (
                <>
                    <div className="singleproject-article">
                        <aside>
                            <SingleProjectImage item={item} header={header} />
                        </aside>
                    </div>
                </>
            ) : null}
        </section>
    );
};

const SingleProjectSection = ({ project, language, imageArray }) => {
    return (
        <div>
            {project && project.title !== undefined ? (
                <>
                    <div className="singleproject-image-container">
                        <img
                            className="singleproject-main-image"
                            id="article-image"
                            src={project.image}
                            alt={project.title}
                        />
                        <div className="single-project-header-container">
                            <h1 className="single-project-header">
                                <span className="title1">
                                    {project.title.toUpperCase()}
                                </span>

                                {project.title_second && (
                                    <span className="title2">
                                        {project.title_second.toUpperCase()}
                                    </span>
                                )}
                            </h1>
                        </div>
                    </div>

                    <section
                        className="singleproject-main-section"
                        id="single-project-main-section"
                    >
                        <article className="singleproject-main-article-container">
                            {imageArray.map((item, index) => (
                                <SingleProjectArticle
                                    key={index}
                                    index={index}
                                    project={project}
                                    item={item}
                                />
                            ))}
                            {project.host && (
                                <>
                                    <h2 className="singleproject-article-header">
                                        {"Try It".toUpperCase()}
                                    </h2>
                                    <div className="singleproject-article">
                                        <p>
                                            It is possible to try out the app
                                            live{" "}
                                            <span className="link-linkedIn">
                                                <a
                                                    href={project.host}
                                                    rel="noreferrer"
                                                    target="_blank"
                                                >
                                                    here
                                                </a>
                                            </span>
                                            .
                                        </p>
                                    </div>
                                </>
                            )}
                        </article>
                    </section>
                </>
            ) : (
                <p>loading projects .... </p>
            )}
            <BackButton />
        </div>
    );
};

export default function SingleProjectComponent({ projectId, language }) {
    const history = useHistory();

    const [project, setProject] = useState({});
    const [imageLink, setURL] = useState([]);
    const [error, setError] = useState(false);
    const [imageArray, setImageArray] = useState([]);

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
                />
            </div>

            {error && <h2>It must be here somewhere...</h2>}
        </div>
    );
}
