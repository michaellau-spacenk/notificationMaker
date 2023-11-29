const CodeBlock = ({ notification, isCopied, onClick }) => {
    return (
        <pre className="relative font-mono bg-gray-700 p-4 text-white whitespace-pre-wrap">
            {JSON.stringify(notification, null, 2)}
            <button className="absolute top-2 right-2 bg-gray-200 text-black p-3 rounded-md" onClick={onClick}>
                {isCopied ? 'COPIED' : 'COPY'}
            </button>
        </pre>
    )
}

export default CodeBlock