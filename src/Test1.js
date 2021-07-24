import React, { Component , useState , useEffect} from 'react';
import { getStorage, ref , uploadBytes ,uploadBytesResumable, getDownloadURL} from "firebase/storage";
import storage from '../src/util/getStorage'

function Test1(params) {
    
    const [files, setFiles] = useState();
    const [xs, setxs] = useState()
    // onChange function that reads files on uploading them
    // files read are encoded as Base64
    const onFileUpload = (event) => {
        setFiles(event.target.files[0]);
    }
    var path = '';
    var link;

    // handle submit button for form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(files);
        path = 'classes' + '/' + 'agm' + '/' + 'xs1' + '/' + files.name ;
        const storageRef = ref(storage, path);

        uploadBytes(storageRef, files).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
    }

    const getVal = () =>{
        getDownloadURL(ref(storage, path))
        .then((url) => {
            // `url` is the download URL for 'images/stars.jpg'
            console.log(url);
            setxs(url);
            console.log(xs);
            link = url;
            console.log(link);
            
            // This can be downloaded directly:
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (event) => {
                const blob = xhr.response;
            };
            xhr.open('GET', url);
            xhr.send();

            // Or inserted into an <img> element
            // const img = document.getElementById('myimg');
            // img.setAttribute('src', url);
        })
        .catch((error) => {
            // Handle any errors
        });


    }


    return(
        <div>

            <form onSubmit={handleSubmit} className="upload--container">
                <h1> Multiple File Inputs with Signle Submit Button </h1>
                <div className="upload--button">
                    <input
                        onChange={onFileUpload}
                        id="pdf"
                        accept = "application/pdf"
                        type="file"
                        multiple
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            
            <a 
                // href = { "https://firebasestorage.googleapis.com/v0/b/my-final-app-3100.appspot.com/o/classes%2Fagm%2Fxs1%2Fvideo-1604730711.mp4?alt=media&token=389d4a6b-a7ce-4354-9c51-eb1a9c9215c4" } 
                href = {xs}
                without rel="noopener noreferrer" 
                target="_blank"
            >
                <button onClick = {getVal}>
                    DO IT
                </button>
            </a>

        </div>
        

        /// training for download
        
    );
}
export default Test1;