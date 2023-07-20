
interface TextI {
    content?: string;
    textStyle?: string;
}

const Text = ({content, textStyle}: TextI) => {

    return (
        <span className={textStyle}>{content}</span>
    )
}
export default Text;
