import "./style.css";

export default function AboutSection({ language }) {
    return (
        <>
            <section className="section about">
                <div className="section-image">
                    <img
                        className="section-inner-image"
                        src="/assets/content-pixie-iXRVqQtBa_8-unsplash.jpg"
                        alt="book with title story of my life and laptop"
                    />
                </div>

                <article className="section-article">
                    <div className="main-header about-header">
                        <h1>
                            {language === "en"
                                ? "about me".toUpperCase()
                                : "Über mich".toUpperCase()}{" "}
                        </h1>
                    </div>
                    I am a junior full stack web developer with a background in
                    foodindustry and automotive service. I began my professional
                    career with an apprenticeship as a brewer, where I
                    subsequently also completed my master's degree at the
                    Technical University of Berlin.
                    <br />
                    After that I worked for the ARWE Group, until then europe's
                    largest company in automotive service, as team leader and
                    later on as quality manager.
                    <br />
                    When the group went bankrupt during the Corona crisis, I was
                    now able to consistently realise my long-held wish for a
                    reorientation. To realise my long-cherished wish I had
                    already gained my first experience of coding at
                    CodeCademy.com and was sure that coding would be my future.{" "}
                    <br />
                    When I was offered the chance to attend a bootcamp at Spiced
                    Academy to become a full stack web developer, I took it.
                    <br />
                    In this intensive 12 week course I dived into the depths of
                    JavaScript. At Spiced Academy I built my first full stack
                    web applications using third party APIs, frontend frameworks
                    like React.js and Vue.js and backend like Express. After
                    graduating from the Spiced Academy, I completed the web
                    development career path at CodeCademy. <br />
                    Since I personally want to develop myself further and
                    development for mobile devices is becoming more and more
                    important, I started developing my first apps with
                    react-native and Google Firebase. So feel free to have a
                    look at some of my code on{" "}
                    <span
                        className="link-github"
                        onClick={() =>
                            window.open("https://github.com/Phil-boter")
                        }
                    >
                        Github.
                    </span>
                </article>
            </section>
            {/* make section bottom curvy */}
            <div className="border-bottom"></div>
        </>
    );
}
