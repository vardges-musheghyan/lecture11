import './styles.css';


function Uploader({ changeImageSrc }){

    const handleFileInputChange = (e) => {

        const { files } = e.target;

        const [ file ] = files;

        if (file){
            changeImageSrc(URL.createObjectURL(file));
        }

    }

    return (
        <>
            <input
                accept="image/jpeg, image/png"
                   onChange={handleFileInputChange}
                   type="file"
            />
        </>
    )
}

export default Uploader;
