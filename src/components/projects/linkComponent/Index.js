const LinkComponent = ({ link, text, styling }) => {
    return (
        <span className={styling}>
            <a href={link} rel="noreferrer" target="_blank">
                {text}
            </a>
        </span>
    );
};
export default LinkComponent;
