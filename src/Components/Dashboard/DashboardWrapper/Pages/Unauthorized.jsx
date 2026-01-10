import unauthorized from "../../../../assets/unauthorized.png"

export default function Unauthorized() {
    return <>
        <div className="flex justify-center align-center">
            <div className="p-4 text-center">
                <img src={unauthorized} style={{ width: "50em" }} alt="unauthorized" />
                <h1 className="mt-5 text-3xl font-bold">Error : You are not Authorized to access this page.</h1>
            </div>
        </div>
    </>
}
