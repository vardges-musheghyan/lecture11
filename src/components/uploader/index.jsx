import './styles.css';


function Uploader({ addUploadedFiles }){

    const handleFileInputChange = (e) => {

        const { files } = e.target;

        const filesArr = Array.from(files);

        addUploadedFiles(filesArr);

        e.target.value = null;

    }

    return (
        <>
            <input
                accept="image/jpeg, image/png"
                   onChange={handleFileInputChange}
                   type="file"
                    multiple
            />
        </>
    )
}

export default Uploader;
