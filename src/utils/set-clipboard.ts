import clipboardy from 'clipboardy';

function setClipboard(content: string) {
    return clipboardy.write(content);
}

export default setClipboard;
