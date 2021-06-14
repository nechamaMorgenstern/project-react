import  React,  {useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import PersonService from '../services/PersonService'
import { connect } from 'react-redux'
import { actions } from '../redux/Action'
import { values } from 'lodash'
const mapDispatchToProps = (dispatch) => {
    return {
        newPerson: (p) =>  dispatch(actions.newPerson(p)),
        setPerson:(s)=>dispatch(actions.setPerson(s))
    }
}

const NewPersonSchema = Yup.object().shape({
    fullName: Yup.string(),
    age: Yup.string(),
    city: Yup.string(),
    email: Yup.string(),
    phone: Yup.string()
})


function createPerson({ setPerson,newPerson }) {
    
    const submit = async (values) => {
        setPerson(values);
        try {
            const person = await PersonService.newPerson(values);
            newPerson(person.person);
            
           
           
        } catch (err) {

        }
       
    }
    return (
        <div className="d-flex justify-content-center">
            <div className="col-4 ">
                <h1>Enter your details:</h1>
                <Formik
                    initialValues={{ name: '',age:'',city:'', email: '', phone: "" }}
                    onSubmit={submit}
                    validationSchema={NewPersonSchema}
                    render={() => {
                        return (
                            <Form>
                                <div className="form-group">
                                    <Field placeholder="fullName" type="text" name="fullName" className="form-control" />
                                    <ErrorMessage name="fullName" component="div" />
                                </div>
                                <div className="form-group">
                                    <Field placeholder="age" type="number" name="age" className="form-control" />
                                    <ErrorMessage name="age" component="div" />
                                </div>
                                <div className="form-group">
                                    <Field placeholder="city" type="text" name="city" className="form-control" />
                                    <ErrorMessage name="city" component="div" />
                                </div>
                                <div className="form-group">
                                    <Field placeholder="email" type="email" name="email" className="form-control" />
                                    <ErrorMessage name="email" component="div" />
                                </div>
                                <div className="form-group">
                                    <Field placeholder="phone" type="number" name="phone" className="form-control" />
                                    <ErrorMessage name="phone" component="div" />
                                </div>
                                <div className="form-group">
                                    <button   type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </Form>
                        )
                    }}
                />
            </div>
        </div>



    )
}

export default connect(
    // mapStateToProps,
    null,
    mapDispatchToProps
)(createPerson);


