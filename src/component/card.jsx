import "./card.css"
import { useState } from 'react';
import Image404 from "../assets/404.jpg"
import download from "../assets/download.svg"
export const Card = ()=>{
    const [dogImage, setNewImage] = useState(Image404);
    const [dogBreed, setNewBreed] = useState("Click me");
    const url = 'https://dog.ceo/api/breeds/image/random';
    const findName = (res) => res.split('/')[4];
    const searchNewDog = new Promise((resolve, reject) => {
        fetch(url)
        .then(respond => respond.json())
        .then(respondJson => resolve(respondJson.message))
        .catch(Error=> reject(Error));    
    });
    async function findRamdonDog() {
        try {
            let fetchDog = await searchNewDog;
            let dogName = findName(fetchDog);
            if(fetchDog === Image404)throw new Error('Image not Found');
            setNewImage(fetchDog);
            (dogName.split('').some(e => e === '-'))? setNewBreed(dogName.split('-').reverse().join(' ')): setNewBreed(dogName);
        } catch (error) {
            setNewBreed(error)
        }
    };
    return(
        <div className="CardContainer">
            <figure onClick={async ()=>{await findRamdonDog()}}>
                <img className="DogImg" src={dogImage} onError={()=>{setNewImage(Image404); setNewBreed(dogBreed + ' Not Found')}} alt="Dog Image"/>
                <figcaption>{dogBreed}</figcaption>
            </figure>
            <div className="TextCardContainer">
                <a href={dogImage} download><p>{dogBreed}</p><img src={download} alt="download-image"/></a>
            </div>
        </div>
    )
} 