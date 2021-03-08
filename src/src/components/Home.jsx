import React, {useContext} from 'react'
import {Formik, Form} from 'formik';
import TextField from "./TextField";
import {UserContext} from './Contexts'
import * as Yup from "yup";
export default function Home() {
  const validate=Yup.object({
login:Yup.string().max(15,'No, type less').required('Back nigga, write your login'),
password:Yup.string().matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}$/, 'Wrong door, boy').required('How i let you in?')
  });
  const msg=useContext(UserContext);
  return (
    <div>
    <h2>Home</h2>
    {msg}
    <Formik initialValues={{login:"", password:""}} validationSchema={validate}>
{formik=>(
  <div>
    <Form>
     <TextField label="login" name="login" type="text"/>
     <TextField label="password" name="password" type="password"/>
     <button type="submit">Sign Up</button>
    </Form>
  </div>
)}
    </Formik>
  </div>   
  )
}
