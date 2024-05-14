import React from "react";
import { useState , useEffect} from "react";
import Spinner from "../components/spinner";
import BackButton from "../components/backButton";
import {useNavigate, useParams} from 'react-router-dom'
import axios from "axios";




const EditBook = () =>{
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");  
    const [publishYear, setPublishYear] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        axios
        .get(`http://localhost:8080/book/${id}`)
        .then((response) => {
            setAuthor(response.data.data[0].author);
            setPublishYear(response.data.data[0].publishYear)
            setTitle(response.data.data[0].title)
            setLoading(false);
          }).catch((error) => {
            setLoading(false);
            alert('An error happened. Please Chack console');
            console.log(error);
          });
      }, [])

    const handelUpdateBook = () => {
        const data ={
            title,
            author,
            publishYear,
        };
        setLoading(true);
        axios
            .put(`http://localhost:8080/book/${id}`,data)
            .then(()=>{
                setLoading(false);
                alert('Updated book succesfully');
                navigate('/');
            })
            .catch((err)=>{
                setLoading(false)
                console.log(err);
                alert('Error');
            })
    }


    return(
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Create Book</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Title</label>
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Author</label>
                    <input type='text' value={author} onChange={(e) => setAuthor(e.target.value)} className='border-2 border-gray-500 px-4 py-2  w-full '/>
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
                    <input type='number' value={publishYear} onChange={(e) => setPublishYear(e.target.value)} className='border-2 border-gray-500 px-4 py-2  w-full '/>
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handelUpdateBook}>Save</button>
            </div>
        </div>
    )
}


export default EditBook