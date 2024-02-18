import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from "formik";
import * as yup from 'yup';
import {FormStyled, FieldStyled, LabelStyled} from './Form.styled'

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().min(1000000).max(9999999).integer().required(),
})

const initValues ={
  name: '',
  number: '',
};

const ContactForm = ({addContact}) => {

    const handleSubmit = (initValues, {resetForm}) => {

        const { name, number } = initValues;
        const contact = ({
          id: nanoid(5), name: name, number: number
        })
        addContact(contact); 
        resetForm();
      }

    return (
          <div> 
            <Formik initialValues={initValues} onSubmit={handleSubmit} validationSchema={schema}>
              <FormStyled autoComplete='off'>
                <LabelStyled>
                <label htmlFor="name">
                  Name <br/>
                  <FieldStyled type="text" name="name" required /><br/>
                  <ErrorMessage name="name" />
                </label>
                </LabelStyled>
                <LabelStyled>
                <label htmlFor="number">
                  Phone <br/>
                  <FieldStyled type="tel" name="number" required /><br/>
                  <ErrorMessage name="number" />
                </label>
                </LabelStyled>
                <button type='submit'>Add contact</button>
              </FormStyled>
            </Formik>
          </div>
   )}
   
export default ContactForm;

ContactForm.propTypes = {
     addContact: PropTypes.func.isRequired,
     };