import BackButton from "../../backButton/Index";
import LinkComponent from "../linkComponent/Index";
import SingleProjectArticle from "../singleProjectArticle/Index";

export default function SingleProjectSection({
    project,
    language,
    imageArray,
}) {
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
                                    language={language}
                                />
                            ))}
                            {project.host && (
                                <>
                                    <h2 className="singleproject-article-header">
                                        {language === "en"
                                            ? "Try It".toUpperCase()
                                            : "probiere es aus".toUpperCase()}
                                    </h2>
                                    <div className="singleproject-article">
                                        {language === "en" ? (
                                            <p>
                                                It is possible to try out the
                                                app live{" "}
                                                <LinkComponent
                                                    styling={
                                                        "link-linkedIn try"
                                                    }
                                                    link={project.host}
                                                    text={
                                                        language === "en"
                                                            ? "here"
                                                            : "hier"
                                                    }
                                                />
                                            </p>
                                        ) : (
                                            <p className="singleproject-try">
                                                Du kannst es{" "}
                                                <LinkComponent
                                                    styling={
                                                        "link-linkedIn try"
                                                    }
                                                    link={project.host}
                                                    text={
                                                        language === "en"
                                                            ? "here"
                                                            : "hier"
                                                    }
                                                />
                                                auch live ausprobieren.
                                            </p>
                                        )}
                                    </div>
                                </>
                            )}
                        </article>
                    </section>
                </>
            ) : language === "en" ? (
                <p>It must be here somewhere... </p>
            ) : (
                <p>Es muss hier irgendwo sein... </p>
            )}
            <BackButton language={language} />
        </div>
    );
}
