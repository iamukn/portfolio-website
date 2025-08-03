
type BrandName = {
    brandName : string
}
export default function brandName ({brandName}: BrandName) {
    return <div className="brandName">
        <span>{brandName}</span>
    </div>
}