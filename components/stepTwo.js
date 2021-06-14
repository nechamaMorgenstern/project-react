import { connect } from 'react-redux';
import React from 'react';
function mapStateToProps(state) {
    return {
        persons: state.personReducer.person,
        savePerson:state.personReducer.savePerson
    };
}

export default connect(mapStateToProps)( function stepTwo(props) {
    const {savePerson}=props;
    debugger
    return (
        <>

        <h1>welcome</h1>
        { <div>
            
             <div>{`My name is ${savePerson.fullName} and I am ${savePerson.age} years old from ${savePerson.city}, my email is ${savePerson.email} and my phone number is ${savePerson.phone} `}</div>
          </div>
        }


        </>
    );
})