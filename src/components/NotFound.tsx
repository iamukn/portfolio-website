type notFoundProps = {
    code: number
    description: string
}

export default function Error({code, description}: notFoundProps) {
    return <div className="flex-col-center">
        <h3 className="errorCode">{code}</h3>
        <p className="errorCodeDesc">{description}</p>
        <span className="cry-emoji">🥹</span>
    </div>
}