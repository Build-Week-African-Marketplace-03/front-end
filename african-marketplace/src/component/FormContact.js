import { Formik } from "formik"
import contactSchema from "../validation/contactSchema"
import "../css/contact.css"

const FormContact = () => (
  <>
    <h2>Contact Us</h2>
    <div className="contactMainDiv">
      <div
        className="contactBG"
        style={{
          backgroundImage: `url("/images/contactus.png")`,
        }}
      ></div>
      <div className="rightContact">
        <Formik
          initialValues={{
            name: "",
            email: "",
            comment: "",
          }}
          onSubmit={(values, { resetForm }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
            }, 1000)
            resetForm()
          }}
          validationSchema={contactSchema}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <div>
                <label>
                  Name:
                  <input
                    value={props.values.name}
                    onChange={props.handleChange}
                    name="name"
                    type="text"
                    className="nameBox"
                  />
                </label>
              </div>
              <div>
                <label>
                  Email:
                  <input
                    value={props.values.email}
                    onChange={props.handleChange}
                    name="email"
                    type="email"
                    className="nameBox"
                  />
                </label>
                <label>
                  Comment:
                  <input
                    value={props.values.comment}
                    onChange={props.handleChange}
                    name="comment"
                    type="text"
                    className="nameBox"
                  />
                </label>
              </div>
              <button type="submit" className="loginButton">
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  </>
)

export default FormContact
