const ArticleHeader = ({ header, styling }) => {
    return <h2 className={`${styling} ${header.toUpperCase()}`}>{header}</h2>;
};
export default ArticleHeader;
