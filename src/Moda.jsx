import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { Button, Input, Modal } from "antd";
function Moda() {
    const {control, handleSubmit} = useForm()

async function postRequest(data){
    return await axios.post('https://jsonplaceholder.typicode.com/todos', data)
}
const {mutate} = useMutation({
    mutationFn: postRequest
})

const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
        setIsModalOpen(false);
}

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <Button onClick={showModal} style={{width:'150px', heoght:'150px', background:'#5384FA', border:'none', color:'black',}}>Create</Button>
    <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <br />
            <Controller
                name="body"
                control = {control}
                render={({field})=>{
                    return <Input placeholder="Body" {...field}/>
            }}/>
    <br />
    <br />
            <Controller
                name="title"
                control = {control}
                render={({field})=>{
                    return <Input placeholder="Title" {...field}/>
             }}/>
<br />
<br />
             <Button onClick={
                handleSubmit((data)=>{mutate(data, {
                    onSuccess: (response)=>{
                        console.log('post request is Succes', response, setIsModalOpen(false))
                },
                    onError: (response)=>{"Error", response.message, setIsModalOpen(false)},

                })})
             }>Sending</Button>
    </Modal>
    </>
    )
}

export default Moda;
