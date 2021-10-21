import { useState } from "react";

import ArticleHeader from "../articleHeader/Index";
import LinkComponent from "../linkComponent/Index";

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

const SingleProjectArticle = ({ project, index, header, item, language }) => {
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
                            <ArticleHeader
                                styling={"singleproject-article-header"}
                                header={
                                    language === "en"
                                        ? "description".toUpperCase()
                                        : "beschreibung".toUpperCase()
                                }
                            />

                            <p>{project.description}</p>
                        </div>
                    </div>
                </>
            ) : null}
            {index === 1 ? (
                <>
                    <div className="singleproject-article">
                        <div>
                            <ArticleHeader
                                styling={"singleproject-article-header"}
                                header={
                                    language === "en"
                                        ? "technology".toUpperCase()
                                        : "technologie".toUpperCase()
                                }
                            />
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
                                    <ArticleHeader
                                        styling={"singleproject-article-header"}
                                        header={"github".toUpperCase()}
                                    />

                                    <p>
                                        You can also look at the code belonging
                                        to the app on{" "}
                                        <LinkComponent
                                            styling={"link-github try"}
                                            link={project.link}
                                            text={"GitHub"}
                                        />
                                    </p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="singleproject-article">
                                <div>
                                    <ArticleHeader
                                        styling={"singleproject-article-header"}
                                        header={"github".toUpperCase()}
                                    />
                                    <p>
                                        You can also look at the code belonging
                                        to the app on{" "}
                                        <LinkComponent
                                            styling={"link-github try"}
                                            link={project.link}
                                            text={"GitHub"}
                                        />
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
export default SingleProjectArticle;
